// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFxAKa8Gm5IguMxtCR_RlcnPXp0TaHUbg",
  authDomain: "fir-auth-jcwd2204.firebaseapp.com",
  projectId: "fir-auth-jcwd2204",
  storageBucket: "fir-auth-jcwd2204.appspot.com",
  messagingSenderId: "326420703381",
  appId: "1:326420703381:web:61d01ed6420f477b4a539c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
