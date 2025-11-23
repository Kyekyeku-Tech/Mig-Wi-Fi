// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0UoAmAQ7-QGaISEyCI897eVqUXwE01A8",
  authDomain: "second-impact-417012.firebaseapp.com",
  projectId: "second-impact-417012",
  storageBucket: "second-impact-417012.firebasestorage.app",
  messagingSenderId: "647158919272",
  appId: "1:647158919272:web:5760dee04384d016220bdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
