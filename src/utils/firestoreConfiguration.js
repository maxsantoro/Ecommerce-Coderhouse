import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCSnynA-Jg8vy9RccK9DlJPi6xRDsRmqKs",
  authDomain: "ecommerce-b01e5.firebaseapp.com",
  projectId: "ecommerce-b01e5",
  storageBucket: "ecommerce-b01e5.appspot.com",
  messagingSenderId: "89627408876",
  appId: "1:89627408876:web:f325a7835b6f2b5466e8c9"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)