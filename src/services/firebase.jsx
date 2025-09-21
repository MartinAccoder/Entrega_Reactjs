// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaX3Rjoo2K-Ud54rwXIuXqfW5xnHOC8Bs",
  authDomain: "seguridad-ca3d9.firebaseapp.com",
  projectId: "seguridad-ca3d9",
  storageBucket: "seguridad-ca3d9.firebasestorage.app",
  messagingSenderId: "599570985175",
  appId: "1:599570985175:web:f18892ad421c870d95c092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fs = getFirestore(app);