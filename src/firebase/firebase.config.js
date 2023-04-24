// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwz5YRCX1KxS1PmF3Wbtn0CIIAKrMyMTk",
  authDomain: "ema-john-with-firebase-a-f8db2.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-f8db2",
  storageBucket: "ema-john-with-firebase-a-f8db2.appspot.com",
  messagingSenderId: "465082008819",
  appId: "1:465082008819:web:caaf22ec019d0c3c3d2386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;