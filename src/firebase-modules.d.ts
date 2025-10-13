// This file is a workaround to allow TypeScript to compile
// when using Firebase modules directly from a CDN URL.
// It tells TypeScript that these modules exist.
// This will suppress "Cannot find module" errors (TS2307).
// Note: This approach sacrifices some type safety for these modules. 
// The ideal solution is to use a package manager (like npm) to install
// Firebase as a dependency, which would provide full type support.

declare module 'https://esm.sh/firebase@10.12.2/app';
declare module 'https://esm.sh/firebase@10.12.2/auth';
declare module 'https://esm.sh/firebase@10.12.2/firestore';
declare module 'https://esm.sh/firebase@10.12.2/storage';

// FIX: Add type definitions for Vite environment variables to resolve
// "Property 'env' does not exist on type 'ImportMeta'" errors in src/firebase.ts.
interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
