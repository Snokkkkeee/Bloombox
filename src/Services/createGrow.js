import { Checkbox } from 'antd'
import { db } from './firebase'
import {
	collection,
	addDoc,
	doc,
	getDocs,
	query,
} from 'firebase/firestore'

export const createNewGrow = async (data, userId) => {
	try {
		// Check if the user already has a Garden
		const userGardensQuery = query(collection(db, 'users', userId, 'Gardens'))
		const userGardensSnapshot = await getDocs(userGardensQuery)

		// If User does not have a Garden, create a new one
		if (userGardensSnapshot.empty) {			
			const userDocRef = doc(db, 'users', userId)
			const gardenDocRef = await addDoc(collection(userDocRef, 'Gardens'), {
				gardenName: data.gardenName,
				potQuantity: data.potQuantity,
				sowingDate: data.sowingDate,
				autoLightCheckbox: data.autoLightCheckbox,
				lightHoursPerDay: data.lightHoursPerDay,
				autoWaterCheckbox: data.autoWaterCheckbox,
				description: data.description,				
			})

			return gardenDocRef.id // Return the ID of the new document
		} else {
			// If the User already has a Garden, handle the case accordingly
			console.log('User already has a Garden')
			return null
		}
	} catch (error) {
		console.error('Error adding document: ', error)
	}
}
