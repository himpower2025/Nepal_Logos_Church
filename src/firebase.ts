
// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getMessaging, type Messaging } from "firebase/messaging";

export interface FirebaseServices {
    auth?: Auth;
    db?: Firestore;
    storage?: FirebaseStorage;
    messaging?: Messaging;
    firebaseError?: string;
}

let services: FirebaseServices | null = null;

export const initializeFirebaseServices = (): FirebaseServices => {
    if (services) {
        return services;
    }

    try {
        if (!import.meta.env) {
            throw new Error("Vite environment variables (import.meta.env) are not available. The app cannot be configured.");
        }

        const firebaseConfig = {
            apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
            authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
            projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_FIREBASE_APP_ID
        };

        const missingVars = Object.entries(firebaseConfig)
            .filter(([, value]) => !value)
            .map(([key]) => key);

        if (missingVars.length > 0) {
            throw new Error(`The application is not configured correctly. Missing required environment variables: ${missingVars.join(', ')}.`);
        }

        const app: FirebaseApp = initializeApp(firebaseConfig);
        
        services = {
            auth: getAuth(app),
            db: getFirestore(app),
            storage: getStorage(app),
            messaging: getMessaging(app),
            firebaseError: undefined
        };

    } catch (e: any) {
        console.error("Firebase initialization failed:", e);
        services = {
            firebaseError: `A critical error occurred while starting the application: ${e.message}`
        };
    }
    
    return services;
};
