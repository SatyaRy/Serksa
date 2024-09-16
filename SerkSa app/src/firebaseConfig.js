import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "serksaapp.firebaseapp.com",
  projectId: "serksaapp",
  databaseURL: "https://serksaapp-default-rtdb.firebaseio.com/",
  storageBucket: "serksaapp.appspot.com",
  messagingSenderId: "779181962403",
  appId: "1:779181962403:web:ec0fe7d66392c936623b16",
  measurementId: "G-L7M1E8DBLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);