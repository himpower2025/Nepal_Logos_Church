
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';
import fs from 'fs';
import path from 'path';

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
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
        react(),
        // This custom plugin is essential for the service worker to get Firebase config.
        serviceWorkerFirebaseConfigPlugin(env),
    ],
    // The 'define' block is for the main application code (src/*), not for public assets.
    define: {
      'process.env.VITE_FIREBASE_API_KEY': JSON.stringify(env.VITE_FIREBASE_API_KEY),
      'process.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
      'process.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
      'process.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(env.VITE_FIREBASE_STORAGE_BUCKET),
      'process.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_FIREBASE_MESSAGING_SENDER_ID),
      'process.env.VITE_FIREBASE_APP_ID': JSON.stringify(env.VITE_FIREBASE_APP_ID),
      'process.env.VITE_FIREBASE_MEASUREMENT_ID': JSON.stringify(env.VITE_FIREBASE_MEASUREMENT_ID),
    }
  }
});
