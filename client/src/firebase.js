// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-fa0bf.firebaseapp.com",
  projectId: "blog-app-fa0bf",
  storageBucket: "blog-app-fa0bf.appspot.com",
  messagingSenderId: "211378589143",
  appId: "1:211378589143:web:13f06fbb8580884f9dcf92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);