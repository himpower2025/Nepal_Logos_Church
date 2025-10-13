// Import the functions you need from the SDKs you need
import { initializeApp } from "https://esm.sh/firebase@10.12.2/app";
import { getAuth } from "https://esm.sh/firebase@10.12.2/auth";
import { getFirestore } from "https://esm.sh/firebase@10.12.2/firestore";
import { getStorage } from "https://esm.sh/firebase@10.12.2/storage";

// TODO: Add your own Firebase configuration from your Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyD3iY_LJZxOp1Y3i1Z_ZFWU0gk04TKfa-o",
  authDomain: "logos-church-nepal.firebaseapp.com",
  projectId: "logos-church-nepal",
  storageBucket: "logos-church-nepal.firebasestorage.app",
  messagingSenderId: "869546960167",
  appId: "1:869546960167:web:19a41c46ef253617683502",
  measurementId: "G-6DQ7BDJ8GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the necessary Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
