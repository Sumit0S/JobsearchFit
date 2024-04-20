// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrN8ALFUh6DqXdzH0X34d7th0CDxRMLjs",
  authDomain: "online-job-portal-5a1e2.firebaseapp.com",
  projectId: "online-job-portal-5a1e2",
  storageBucket: "online-job-portal-5a1e2.appspot.com",
  messagingSenderId: "152471066540",
  appId: "1:152471066540:web:ccc65648bf68b6e5344c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export{db};