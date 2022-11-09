// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGu9nUjzim1Nbjd5jc_mU8aPeYwa9KA10",
  authDomain: "netflix-clone-39306.firebaseapp.com",
  projectId: "netflix-clone-39306",
  storageBucket: "netflix-clone-39306.appspot.com",
  messagingSenderId: "676171983662",
  appId: "1:676171983662:web:3f78e6f9a34a6c831768bf",
  measurementId: "G-Z8EJYLE46L",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
