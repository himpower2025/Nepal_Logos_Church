
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
// Fix for 'Property 'cwd' does not exist on type 'Process''.
// The global `process` object might have incorrect typings in this context.
// Importing `cwd` directly from `node:process` avoids type conflicts with the global `process` object.
import { cwd } from 'node:process';
import fs from 'fs';
import path from 'path';
// Fix: Add import for fileURLToPath to construct __dirname in an ES module environment.
import { fileURLToPath } from 'url';

/**
 * Custom Vite plugin to replace placeholder variables in the service worker file.
 * This is necessary because Vite does not process files in the `public` directory,
 * but our service worker needs the Firebase config to function.
 * @param {Record<string, string>} env - The loaded environment variables.
 * @returns {Plugin} A Vite plugin object.
 */
const serviceWorkerFirebaseConfigPlugin = (env: Record<string, string>): Plugin => {
    const swFilename = 'firebase-messaging-sw.js';
    
    const getTransformedContent = () => {
        // Fix: __dirname is not available in ES modules. Recreate it using import.meta.url.
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        const swPath = path.resolve(__dirname, 'public', swFilename);
        try {
            let content = fs.readFileSync(swPath, 'utf-8');
            content = content
                .replace(/__VITE_FIREBASE_API_KEY__/g, env.VITE_FIREBASE_API_KEY)
                .replace(/__VITE_FIREBASE_AUTH_DOMAIN__/g, env.VITE_FIREBASE_AUTH_DOMAIN)
                .replace(/__VITE_FIREBASE_PROJECT_ID__/g, env.VITE_FIREBASE_PROJECT_ID)
                .replace(/__VITE_FIREBASE_STORAGE_BUCKET__/g, env.VITE_FIREBASE_STORAGE_BUCKET)
                .replace(/__VITE_FIREBASE_MESSAGING_SENDER_ID__/g, env.VITE_FIREBASE_MESSAGING_SENDER_ID)
                .replace(/__VITE_FIREBASE_APP_ID__/g, env.VITE_FIREBASE_APP_ID)
                .replace(/__VITE_FIREBASE_MEASUREMENT_ID__/g, env.VITE_FIREBASE_MEASUREMENT_ID);
            return content;
        } catch (error) {
            console.error(`[SW Plugin] Failed to read/transform service worker file at ${swPath}`, error);
            return null;
        }
    };

    return {
        name: 'vite-plugin-service-worker-firebase-config',

        // For the dev server: intercept the request for the service worker and serve the transformed version.
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url === `/${swFilename}`) {
                    const content = getTransformedContent();
                    if (content !== null) {
                        res.setHeader('Content-Type', 'application/javascript');
                        res.end(content);
                    } else {
                        res.statusCode = 500;
                        res.end('Service worker file not found or could not be processed.');
                    }
                } else {
                    next();
                }
            });
        },

        // For the build: find the file in the output directory and replace its content.
        writeBundle(options) {
            const outDir = options.dir || 'dist';
            const builtSwPath = path.join(outDir, swFilename);
            if (fs.existsSync(builtSwPath)) {
                const content = getTransformedContent();
                if (content !== null) {
                    fs.writeFileSync(builtSwPath, content);
                    console.log(`[SW Plugin] Injected Firebase config into ${builtSwPath}`);
                }
            }
        },
    };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Fix: Use the imported `cwd` function instead of `process.cwd()` to avoid TypeScript errors.
  const env = loadEnv(mode, cwd(), '');
  
  return {
    plugins: [
        react(),
        // This custom plugin is essential for the service worker to get Firebase config.
        serviceWorkerFirebaseConfigPlugin(env),
    ],
  }
});
