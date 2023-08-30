// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3-sTBw7o8bVeR8k7uY9YKZ8m0_sfg55Q",
  authDomain: "bloombox-730ae.firebaseapp.com",
  databaseURL: "https://bloombox-730ae-default-rtdb.firebaseio.com",
  projectId: "bloombox-730ae",
  storageBucket: "bloombox-730ae.appspot.com",
  messagingSenderId: "774732967458",
  appId: "1:774732967458:web:1558c22c8132860826a47b",
  databaseURL: "https://bloombox-730ae-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
