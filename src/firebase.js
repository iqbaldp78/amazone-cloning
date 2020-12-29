import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQsByBysySk6pfUDxbIemsV3t3q7DWQxk",
  authDomain: "e-challenge-6cc9a.firebaseapp.com",
  projectId: "e-challenge-6cc9a",
  storageBucket: "e-challenge-6cc9a.appspot.com",
  messagingSenderId: "957373024747",
  appId: "1:957373024747:web:4b76c88bbe27205bcbb1ae",
  measurementId: "G-KBSDMJ9X18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };