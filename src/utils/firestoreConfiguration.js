import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Constants } from "../constants"
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: `${Constants.apiKey}`,
  authDomain: `${Constants.authDomain}`,
  projectId: `${Constants.projectId}`,
  storageBucket: `${Constants.storageBucket}`,
  messagingSenderId: `${Constants.messagingSenderId}`,
  appId: `${Constants.appId}`
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)