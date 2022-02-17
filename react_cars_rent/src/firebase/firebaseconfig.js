// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3JxONiVhzXLWPzYsZPjMxJuj7k-0Cwhw",
  authDomain: "rentcar-ad28d.firebaseapp.com",
  projectId: "rentcar-ad28d",
  storageBucket: "rentcar-ad28d.appspot.com",
  messagingSenderId: "645362730068",
  appId: "1:645362730068:web:20cd7b92fa4a485909d9c1",
  measurementId: "G-P9M09R79D4"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// este servira para crea una base datos como el array de coches
export const db = getFirestore(app);
// ests la const que sirvira para autenticar usuarios
export const auth = getAuth(app);





/* Registra usuarios nuevos */
// createUserWithEmailAndPassword 

/* Acceso de usuarios existentes */
// signInWithEmailAndPassword

/* 
  apiKey: "AIzaSyD3JxONiVhzXLWPzYsZPjMxJuj7k-0Cwhw",
  authDomain: "rentcar-ad28d.firebaseapp.com",
  projectId: "rentcar-ad28d",
  storageBucket: "rentcar-ad28d.appspot.com",
  messagingSenderId: "645362730068",
  appId: "1:645362730068:web:20cd7b92fa4a485909d9c1",
  measurementId: "G-P9M09R79D4" 
*/