/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const UserContext = createContext();



export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('Firebase User:', firebaseUser);
      if (firebaseUser) {
        const uid = firebaseUser.uid;
        try {
          const db = getFirestore();
          const userRef = doc(db, 'users', uid);
          const userDoc = await getDoc(userRef);
          console.log('Firestore User Data:', userDoc.data());

          if (userDoc.exists()) {
            const userData = userDoc.data();
            const lastLoginTimestamp = userData.lastLogin?.toDate();
            console.log('Last Login Timestamp:', lastLoginTimestamp);
            setUser({
  ...userData,
  lastLogin: userData.lastLogin.toDate(), // Use 'lastLogin' instead of 'lastLoginDate'
});
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUser(null); // User is logged out, clear user data
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
