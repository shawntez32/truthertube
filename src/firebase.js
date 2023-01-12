// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxZJyVI2itkfJbOvAwKSbXXpJF-WCXkDE",
  authDomain: "truthtube-3a35f.firebaseapp.com",
  projectId: "truthtube-3a35f",
  storageBucket: "truthtube-3a35f.appspot.com",
  messagingSenderId: "971884240784",
  appId: "1:971884240784:web:2572d2443ae9fcd0fb1d15",
  measurementId: "G-NGDB9BSDJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);