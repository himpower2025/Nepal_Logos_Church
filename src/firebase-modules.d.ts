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
