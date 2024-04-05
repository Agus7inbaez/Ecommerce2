
import { initializeApp } from "firebase/app";
import {getFirestore }   from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyCjP859hyWKcetxq5Ce17_LDIMhQbtAgpw",
  authDomain: "backend54045-e4187.firebaseapp.com",
  projectId: "backend54045-e4187",
  storageBucket: "backend54045-e4187.appspot.com",
  messagingSenderId: "1009176750757",
  appId: "1:1009176750757:web:45b8ab9749c32ad40a7b4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)