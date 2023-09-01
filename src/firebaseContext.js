import { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Create a Firebase context
const FirebaseContext = createContext();

// Custom hook to use Firebase context
export const useFirebase = () => {
  return useContext(FirebaseContext);
};

// Firebase context provider component
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const contextValue = {
    user,
    // You can add other Firebase services here, like Firestore, Realtime Database, etc.
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
