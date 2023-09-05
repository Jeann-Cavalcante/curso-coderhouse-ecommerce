// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHuQ9cuZyXs5KYipxuhF_HKu0pDhlVPrw",
  authDomain: "minhas-financas-2558c.firebaseapp.com",
  projectId: "minhas-financas-2558c",
  storageBucket: "minhas-financas-2558c.appspot.com",
  messagingSenderId: "430091470020",
  appId: "1:430091470020:web:48ac4d0123be3bf950b591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);