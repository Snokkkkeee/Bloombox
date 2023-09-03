import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

export const signUp = async (data) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: data.email,
      nickname: data.nickname,
    });
    return { user: userCredential.user, errorMessage: null };
  } catch (error) {
    console.error("Signup Error:", error);
    return { user: null, errorMessage: error.message };
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user, errorMessage: null };
  } catch (error) {
    console.error("SignIn Error:", error);
    return { user: null, errorMessage: error.message };
  }
};
