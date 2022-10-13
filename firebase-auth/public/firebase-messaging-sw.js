// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDFxAKa8Gm5IguMxtCR_RlcnPXp0TaHUbg",
  authDomain: "fir-auth-jcwd2204.firebaseapp.com",
  projectId: "fir-auth-jcwd2204",
  storageBucket: "fir-auth-jcwd2204.appspot.com",
  messagingSenderId: "326420703381",
  appId: "1:326420703381:web:61d01ed6420f477b4a539c",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
firebase.messaging();
