import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Constants } from "../constants"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


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