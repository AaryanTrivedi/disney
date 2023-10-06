
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1VeqFqsn9gXwmtkTtEcG0qfsxuM6GJgo",
  authDomain: "disney-e43d7.firebaseapp.com",
  projectId: "disney-e43d7",
  storageBucket: "disney-e43d7.appspot.com",
  messagingSenderId: "464805010520",
  appId: "1:464805010520:web:195eadc000f0b300443e2d",
  measurementId: "G-6F10Z6FX2V"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.filestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const analytics = getAnalytics(app);

export { auth, provider, storage};
export default db;

