import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
  export const db = getFirestore();

  export const createUserDocumentAuth = async (userAuth) => {
    const userDocRef = doc(db, `users/${userAuth.uid}`);

    const userDocSnap = await getDoc(userDocRef);

    if(!userDocSnap.exists()) {
      
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
            await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            });
        } catch (error) {
            console.error('Error creating user', error.message);
        }
        }
        return userDocRef;
  }
  