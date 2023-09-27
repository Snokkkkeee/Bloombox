import { useState, useEffect, useCallback } from 'react'; // Uncomment this line
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({ displayName: 'Guest' });
      }
    });

    // Properly return the unsubscribe function from within useEffect
    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [auth]); // Added dependency array

  // Moved logout and return outside of useEffect
  const logout = useCallback(async () => {
    await auth.signOut();
  }, [auth]);

  return { user, logout };
}
