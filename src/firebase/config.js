// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZvieukXr7fP7SNkDLi0up2V-9gKBs3CM",
  authDomain: "entrega-reactjs-aguero.firebaseapp.com",
  projectId: "entrega-reactjs-aguero",
  storageBucket: "entrega-reactjs-aguero.appspot.com",
  messagingSenderId: "440852178702",
  appId: "1:440852178702:web:29929555c5c4731102595f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);