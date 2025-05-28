// firebase-config.js
// IMPORTANT: This file should be added to .gitignore to keep your API keys private!

// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCkILRh29rF8vJx-KMrrbGSlLV1A0GaBAA",
  authDomain: "journal-searching.firebaseapp.com",
  projectId: "journal-searching",
  storageBucket: "journal-searching.appspot.com",
  messagingSenderId: "996311438235",
  appId: "1:996311438235:web:d470f7e343c47259f1873e",
  measurementId: "G-HQGR1KCNQC"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

