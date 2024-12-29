// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS50B7hiVsYRnFsybD2mFDItGgOqfL0gY",
  authDomain: "auth-testing-be7ae.firebaseapp.com",
  projectId: "auth-testing-be7ae",
  storageBucket: "auth-testing-be7ae.firebasestorage.app",
  messagingSenderId: "149052050556",
  appId: "1:149052050556:web:ac946d73af978f48d8cdf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;