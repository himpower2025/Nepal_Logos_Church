// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getMessaging, type Messaging } from "firebase/messaging";

// Your web app's Firebase configuration using Vite environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let auth: Auth | undefined;
let db: Firestore | undefined;
let storage: FirebaseStorage | undefined;
let messaging: Messaging | undefined;
let firebaseError: string | undefined;

try {
    const missingVars = Object.entries(firebaseConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key);

    if (missingVars.length > 0) {
        throw new Error(`The application is not configured correctly. Missing required environment variables: ${missingVars.join(', ')}.`);
    }

    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    messaging = getMessaging(app);
} catch (e: any) {
    console.error("Firebase initialization failed:", e);
    firebaseError = `A critical error occurred while starting the application: ${e.message}`;
}


export { auth, db, storage, messaging, firebaseError };