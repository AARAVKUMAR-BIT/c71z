import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

//
firebase.initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtUtmRxliMKwkBwPY64KhQ8LQMecVtu3g",
  authDomain: "c71cdxbvd.firebaseapp.com",
  projectId: "c71cdxbvd",
  storageBucket: "c71cdxbvd.appspot.com",
  messagingSenderId: "963170068024",
  appId: "1:963170068024:web:2f58149e6103db090228cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.firestore();
