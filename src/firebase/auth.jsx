/* eslint-disable no-undef */
import { message } from 'antd'
import { getAuth,signOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { setDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import {  ref, uploadBytes } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import { db } from './firebaseConfig'
import { useState, useEffect } from 'react';
import {  onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return { user, loading, auth };
};

// Adjust the path based on

const auth = getAuth()

const userHasGarden = async (uid) => {
  const gardenDoc = await getDoc(doc(db, 'gardens', uid))
  return gardenDoc.exists()
}

export const useGoogleSignup = () => {
  const navigate = useNavigate()
  const googleProvider = new GoogleAuthProvider()

  const googleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      })
      message.success('Successfully signed up with Google!')

      if (await userHasGarden(user.uid)) {
        navigate('/Dashboard')
      } else {
        navigate('/GardenFormSetup')
      }
    } catch (error) {
      message.error('An error occurred while signing up with Google.')
    }
  }
  return googleSignup
}

export const useGithubSignup = () => {
  const navigate = new useNavigate()
  const githubProvider = new GithubAuthProvider()

  const githubSignup = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider)
      const user = result.user
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      })

      message.success('Successfully signed up with GitHub!')

      if (await userHasGarden(user.uid)) {
        navigate('/Dashboard')
      } else {
        navigate('/GardenFormSetup')
      }
    } catch (error) {
      message.error('An error occurred while signing up with GitHub.')
    }
  }
  return githubSignup
}


export const setProfile = async (uid, profileData, file) => {
  const filePath = `profilePics/${uid}`
  const storageRef = ref(storage, filePath)

  await uploadBytes(storageRef, file)
  await setDoc(doc(db, 'profiles', uid), profileData)
}

export const createNewGarden = async (uid, gardenData) => {
  await setDoc(doc(db, 'gardens', uid), gardenData)
}

export const signUp = async (data) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email: data.email,
      username: data.nickname,
    })
    await sendEmailVerification(userCredential.user)
    return { user: userCredential.user, errorMessage: null }
  } catch (error) {
    
    return { user: null, errorMessage: error.message }
  }
}

export const updateProfile = async (userId, data) => {
  try {
    await updateDoc(doc(db, 'users', userId), { ...data })
    return { errorMessage: null }
  } catch (error) {
    
    return { errorMessage: error.message }
  }
}

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { user: userCredential.user, errorMessage: null }
  } catch (error) {
    
    return { user: null, errorMessage: error.message }
  }
}

export const getCurrentUser = async (uid) => {
  const userDoc = await getDoc(doc(db, 'users', uid))
  if (userDoc.exists()) {
    return userDoc.data()
  } else {
    
    return null
  }
}

export const fetchUserData = async (uid) => {
  const userDoc = await getDoc(doc(db, 'users', uid))
  if (userDoc.exists()) {
    return userDoc.data()
  } else {
    
    return null
  }
}

export const fetchUsername = async (uid) => {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (userDoc.exists()) {
    return userDoc.data().username;
  } else {
    
    return null;
  }
};


export const logoutUser = async () => {
  await signOut(auth);
};




