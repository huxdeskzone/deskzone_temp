// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsx_otJI1Z-D9oNYa72ctI78HoAGYQvd4",
  authDomain: "deskzone-9250b.firebaseapp.com",
  databaseURL: "https://deskzone-9250b-default-rtdb.firebaseio.com",
  projectId: "deskzone-9250b",
  storageBucket: "deskzone-9250b.appspot.com",
  messagingSenderId: "1063124759246",
  appId: "1:1063124759246:web:411c1b33e13c8ed13fd69f",
  measurementId: "G-W679S9GNWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getStorage(app);
const db = getFirestore(app);

export default db;
