// This file is a workaround to allow TypeScript to compile
// when using Firebase modules directly from a CDN URL.
// It tells TypeScript that these modules exist.
// This will suppress "Cannot find module" errors (TS2307).
// Note: This approach sacrifices some type safety for these modules. 
// The ideal solution is to use a package manager (like npm) to install
// Firebase as a dependency, which would provide full type support.

// The `declare module` lines below have been removed as they were preventing
// TypeScript from loading the proper type definitions from the esm.sh CDN.

// Type definitions for Vite environment variables
interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_VAPID_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
