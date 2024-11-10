// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqZAKBGlVK2L0fdLUy-8d9ODgr2C1X0oQ",
  authDomain: "crystal-travels-8299a.firebaseapp.com",
  projectId: "crystal-travels-8299a",
  storageBucket: "crystal-travels-8299a.firebasestorage.app",
  messagingSenderId: "204627654159",
  appId: "1:204627654159:web:787eaa03e1b4473b46d57a",
  measurementId: "G-GN25Q7NRYW",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
