// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";

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
const messaging = getMessaging(app);

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      getToken(messaging, {
        vapidKey:
          "BGjABKzpiYir-uiKB6mXdqk4ZsMtyJXzgAEMgmKa-vr-4j0i4z484908Fag7xwga6nS3KPrJj3-MW7Ks2z7MKjI",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("current token : ", currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
