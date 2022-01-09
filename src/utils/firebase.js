// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP_VRqOt1qUdknAgVauysWLrnitYEw-98",
  authDomain: "airportfolio.firebaseapp.com",
  projectId: "airportfolio",
  storageBucket: "airportfolio.appspot.com",
  messagingSenderId: "358110132985",
  appId: "1:358110132985:web:3fb6965329ef7ebe944028",
  measurementId: "G-R54YWT4VV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);