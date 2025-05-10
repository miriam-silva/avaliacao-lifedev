import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbEjEk-IX4MXfaZ-yG-UVRh1QlDORiM0g",
  authDomain: "lifedev-avaliacaomiriam.firebaseapp.com",
  projectId: "lifedev-avaliacaomiriam",
  storageBucket: "lifedev-avaliacaomiriam.firebasestorage.app",
  messagingSenderId: "893447949844",
  appId: "1:893447949844:web:ed619f2d3ade54d43f2101",
  measurementId: "G-25JX23BHJK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);