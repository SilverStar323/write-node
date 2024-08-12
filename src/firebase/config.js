import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK1WcmlTLCHHsQFeqrXnbBqtkbaH0hBV4",
  authDomain: "writenode-b9d88.firebaseapp.com",
  projectId: "writenode-b9d88",
  storageBucket: "writenode-b9d88.appspot.com",
  messagingSenderId: "362464121148",
  appId: "1:362464121148:web:2c3f8bf7c33d5ef729ce39"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
