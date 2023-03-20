import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAX8VlC-gFG3OGqt0_GulKnUQhzAU22cDE",
  authDomain: "next-facebook-next.firebaseapp.com",
  projectId: "next-facebook-next",
  storageBucket: "next-facebook-next.appspot.com",
  messagingSenderId: "584343904478",
  appId: "1:584343904478:web:6ea5e0e926c20dea9a624f",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export default app;
export { db, storage };
