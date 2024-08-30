// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfc1EDcAC4DvtXNSO3VaGn9sncYMMIto0",
  authDomain: "react-backend-6a9d6.firebaseapp.com",
  projectId: "react-backend-6a9d6",
  storageBucket: "react-backend-6a9d6.appspot.com",
  messagingSenderId: "765651430559",
  appId: "1:765651430559:web:4878e8cbd028d2c8b046aa",
  measurementId: "G-7YDKKPN5P6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
