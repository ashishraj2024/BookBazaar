// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbwtHAUNhSgALvuTIfJ33jDCzONN1YqV8",
  authDomain: "mern-book-cf17e.firebaseapp.com",
  projectId: "mern-book-cf17e",
  storageBucket: "mern-book-cf17e.appspot.com",
  messagingSenderId: "864434476725",
  appId: "1:864434476725:web:4743cf2a6f6f5e259d90fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;