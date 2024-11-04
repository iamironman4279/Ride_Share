import { initializeApp } from "firebase/app";

const FIREBASE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const firebaseConfig = {
  apiKey: "AIzaSyCe3u6-Z3WKhOWqLwFPt25E180S-iwWAgU",
  authDomain: "ubar-a715c.firebaseapp.com",
  projectId: "ubar-a715c",
  storageBucket: "ubar-a715c.appspot.com",
  messagingSenderId: "787347920243",
  appId: "1:787347920243:web:2b043445210f6ce2b8e106",
  measurementId: "G-MZ5DSFG02F"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 
