
import { db } from "./firebaseConfig";
import { collection, addDoc, doc, getDocs, query } from "firebase/firestore";

export const createNewGrow = async (data, userId) => {
  try {
    // Check if the user already has a Garden
    const userGardensQuery = query(collection(db, "users", userId, "Gardens"));
    const userGardensSnapshot = await getDocs(userGardensQuery);

    // If User does not have a Garden, create a new one
    if (userGardensSnapshot.empty) {
      const userDocRef = doc(db, "users", userId);
      const gardenDocRef = await addDoc(collection(userDocRef, "Gardens"), {
        gardenName: data.gardenName,
        gardenType: data.gardenType,
        potQuantity: data.potQuantity,
        autoLightCheckbox: data.autoLightCheckbox,
        autoWaterCheckbox: data.autoWaterCheckbox,
      
        sowingDate: data.sowingDate,
        soilType: data.soilType,

        fertilizerType: data.fertilizerType,

        fertilizerSchedule: data.fertilizerSchedule,
        upload: data.upload,
        gardenNotes: data.gardenNotes, // Added this line
        emailNotifications: data.emailNotifications, // Added this line
        pushNotifications: data.pushNotifications, // Added this line
        smsAlerts: data.smsAlerts, // Added this line
      });

      return gardenDocRef.id; // Return the ID of the new document
    } else {
      // If the User already has a Garden, handle the case accordingly
      console.log("User already has a Garden");
      return null;
    }
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
