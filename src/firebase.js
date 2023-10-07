import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Import getStorage

const firebaseConfig = {
  apiKey: "AIzaSyB1VeqFqsn9gXwmtkTtEcG0qfsxuM6GJgo",
  authDomain: "disney-e43d7.firebaseapp.com",
  projectId: "disney-e43d7",
  storageBucket: "disney-e43d7.appspot.com",
  messagingSenderId: "464805010520",
  appId: "1:464805010520:web:195eadc000f0b300443e2d",
  measurementId: "G-6F10Z6FX2V"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new  GoogleAuthProvider(); // Remove 'firebase' and 'auth'
const storage = getStorage(firebaseApp); // Initialize Firebase Storage

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export { auth, provider, storage };
export default db;
