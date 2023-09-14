import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3-sTBw7o8bVeR8k7uY9YKZ8m0_sfg55Q",
  authDomain: "bloombox-730ae.firebaseapp.com",
  databaseURL: "https://bloombox-730ae-default-rtdb.firebaseio.com",
  projectId: "bloombox-730ae",
  storageBucket: "bloombox-730ae.appspot.com",
  messagingSenderId: "774732967458",
  appId: "1:774732967458:web:1558c22c8132860826a47b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
