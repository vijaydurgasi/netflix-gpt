// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9sWTztoxblDodCnCiRwCY3_tgIf5VM9w",
    authDomain: "netflixgpt-bac16.firebaseapp.com",
    projectId: "netflixgpt-bac16",
    storageBucket: "netflixgpt-bac16.firebasestorage.app",
    messagingSenderId: "129413788147",
    appId: "1:129413788147:web:7f9e185a03630ea472a286",
    measurementId: "G-8GTS28C6JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();