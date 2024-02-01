// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBasurPI1phSZ6ujNUux9Bj7-5QLmc_E2U",
  authDomain: "chatapp-64635.firebaseapp.com",
  projectId: "chatapp-64635",
  storageBucket: "chatapp-64635.appspot.com",
  messagingSenderId: "232901457450",
  appId: "1:232901457450:web:7b04258d5ba6c9124c7553",
  measurementId: "G-KQ3KMY3RVQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);