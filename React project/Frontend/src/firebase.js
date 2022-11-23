// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvu047tXfwKLHIIMEAIYX3k5DTJWwPhgU",
  authDomain: "selfservice-system.firebaseapp.com",
  projectId: "selfservice-system",
  storageBucket: "selfservice-system.appspot.com",
  messagingSenderId: "539051877476",
  appId: "1:539051877476:web:1f42099ec01be290f2ab71",
  measurementId: "G-5DBR8TMY25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);