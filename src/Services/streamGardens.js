import { db } from "./firebase";
import { collection, query, onSnapshot, orderBy, } from "firebase/firestore";



export const streamGardens = (snapshot, error) => {
  const gardensColRef = collection(db, "gardens");
  const gardensQuery = query(gardensColRef, orderBy("createdAt")); // Assuming you have a 'createdAt' field
  return onSnapshot(gardensQuery, snapshot, error);
};
