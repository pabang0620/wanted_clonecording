// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJAUSF5ak3cSNJap5VhOc2nM8dQqhdMgU",
  authDomain: "practice-aa1c9.firebaseapp.com",
  projectId: "practice-aa1c9",
  storageBucket: "practice-aa1c9.appspot.com",
  messagingSenderId: "539208433054",
  appId: "1:539208433054:web:85c832c0d85620c5f26a8f",
  measurementId: "G-4SRS4CJ8PJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
