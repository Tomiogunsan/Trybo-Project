// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTj1fT-vYkKat5zYeEwkXZ98fxGSMBBiY",
  authDomain: "trybo-project.firebaseapp.com",
  projectId: "trybo-project",
  storageBucket: "trybo-project.appspot.com",
  messagingSenderId: "265798683743",
  appId: "1:265798683743:web:b1676ec7ecacb8d6ec9fea"
};

// Initialize Firebase

const firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()