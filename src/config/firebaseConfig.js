// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId*/
  apiKey: "AIzaSyCEIM8y5YhLmnnpw9MxR5MoTajMPF8NTmw",
  authDomain: "landing-cesar.firebaseapp.com",
  projectId: "landing-cesar",
  storageBucket: "landing-cesar.firebasestorage.app",
  messagingSenderId: "650027195369",
  appId: "1:650027195369:web:ada5fa1364234b729c8978",
  measurementId: "G-R5Q93LV1Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  // se cambia por el getFirestore para manejar base de datos firestore