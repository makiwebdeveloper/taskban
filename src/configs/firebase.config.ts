import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbIt23M_mZRfIWxZDutmualcXyfzbt3gA",
  authDomain: "taskban-bbb9d.firebaseapp.com",
  projectId: "taskban-bbb9d",
  storageBucket: "taskban-bbb9d.appspot.com",
  messagingSenderId: "763915773192",
  appId: "1:763915773192:web:8e1f4c024afca4e7bbf8bd",
  measurementId: "G-DNLFCQLTKJ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
