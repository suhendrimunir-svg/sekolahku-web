// Import fungsi yang dibutuhkan dari Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Ganti dengan Firebase SDK Config Anda dari Firebase Console
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIwS3TfnomxPq6bw3173OVzwD_gvJ-qsg",
  authDomain: "sekolahku-a2cf6.firebaseapp.com",
  projectId: "sekolahku-a2cf6",
  storageBucket: "sekolahku-a2cf6.firebasestorage.app",
  messagingSenderId: "285921284769",
  appId: "1:285921284769:web:f2042b5bd2647d8989d6e0",
  measurementId: "G-0NB6100FEY"
};

// Initialize Cloud Firestore dan export agar bisa dipakai di file lain
export const db = getFirestore(app);
