import { addDoc, setDoc,  collection, Timestamp, doc } from "firebase/firestore";
import { db } from './firebaseConfig';

export const createNewGrow = async (gardenData, userId) => {
  try {
    const userRef = collection(db, "users", userId, "gardens");
    const newGardenRef = await addDoc(userRef, {
      ...gardenData,
      createdAt: Timestamp.fromDate(new Date()),
    });
    console.log("New garden added with ID: ", newGardenRef.id);
  } catch (e) {
    console.error("Error adding garden: ", e);
  }
};



export const addGarden = async (userId, gardenData) => {
  await setDoc(doc(db, "users", userId, "gardens", gardenData.id), gardenData);
};
