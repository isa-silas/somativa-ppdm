// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3wt1NOH9x3MSUJ9vbTwxd-7awnc94vug",
  authDomain: "somativa-ppdm.firebaseapp.com",
  projectId: "somativa-ppdm",
  storageBucket: "somativa-ppdm.appspot.com",
  messagingSenderId: "622575862927",
  appId: "1:622575862927:web:8d73f230aefa7c52685cfa",
  measurementId: "G-Y6JZFW1B2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);