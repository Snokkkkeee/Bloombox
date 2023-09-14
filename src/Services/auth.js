import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  auth,
  db,
  storage,
} from "../Services/firebase.js"; // Import storage as well
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export const setProfile = async (uid, profileData, file) => {
  const filePath = `profilePics/${uid}`;
  const storageRef = ref(storage, filePath);

  await uploadBytes(storageRef, file);
  await setDoc(doc(db, "profiles", uid), profileData);
};

export const createNewGarden = async (uid, gardenData) => {
  await setDoc(doc(db, "gardens", uid), gardenData);
};

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
    await sendEmailVerification(userCredential.user);
    return { user: userCredential.user, errorMessage: null };
  } catch (error) {
    console.error("Signup Error:", error);
    return { user: null, errorMessage: error.message };
  }
};

export const updateProfile = async (userId, data) => {
  try {
    await updateDoc(doc(db, "users", userId), { ...data });
    return { errorMessage: null };
  } catch (error) {
    console.error("Update Error:", error);
    return { errorMessage: error.message };
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
