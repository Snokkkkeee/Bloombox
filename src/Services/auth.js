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

    // Create a document in Firestore with the user's data
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: data.email,
      nickname: data.nickname,
    });

    // Return the user object
    return userCredential.user;
  } catch (error) {
    return new Error("Unable to signup");
  }
};

export const getUserById = async (id) => {
  const query = doc(db, "users", id);
  const user = await getDoc(query);

  return user.data();
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return { user, errorMessage: null };
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      const errorMessage = "This email address is not valid";
      // document.querySelector('#error-message').textContent = errorMessage
      return { user: null, errorMessage };
    } else {
      const errorMessage = "Unable to sign in. Please try again later.";
      // document.querySelector('#error-message').textContent = errorMessage
      return { user: null, errorMessage };
    }
  }
};
