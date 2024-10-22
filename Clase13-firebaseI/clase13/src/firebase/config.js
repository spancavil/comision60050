// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHCXExyUaUEImDjOgFp7DV7cAKgvGgGQA",
    authDomain: "ecommerce-60050-c225d.firebaseapp.com",
    projectId: "ecommerce-60050-c225d",
    storageBucket: "ecommerce-60050-c225d.appspot.com",
    messagingSenderId: "178963455221",
    appId: "1:178963455221:web:7c1fe6a7b2c4914f82b9bc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
