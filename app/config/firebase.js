// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB02piWr54U00ymkW_xslyzbJD6BL5REes",
  authDomain: "expence-tracker-a0df0.firebaseapp.com",
  projectId: "expence-tracker-a0df0",
  storageBucket: "expence-tracker-a0df0.appspot.com",
  messagingSenderId: "4846892782",
  appId: "1:4846892782:web:e35691c030a298673ae5ff",
  measurementId: "G-C95DK5LLJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const provider = new GoogleAuthProvider()
export const auth =getAuth(app)
export const db =getFirestore(app)