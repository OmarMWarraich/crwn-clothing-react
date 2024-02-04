import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
} from "firebase/firestore"

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCj9H2ydPagmvFUn8E43kZsDRqMhX3vVgc",
  
    authDomain: "crwn-clothes-5f2b1.firebaseapp.com",
  
    projectId: "crwn-clothes-5f2b1",
  
    storageBucket: "crwn-clothes-5f2b1.appspot.com",
  
    messagingSenderId: "362652873627",
  
    appId: "1:362652873627:web:bdd1e8384bf47c837d673e"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({ prompt: 'select_account' });

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  
  export const db = getFirestore();

  export const createUserDocumentAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };
  
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  }
  
  export const signOutUser = async () => {
    return await signOut(auth);
  };

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);