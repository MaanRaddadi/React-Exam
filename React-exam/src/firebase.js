import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDExlxWx7uM-K9A0TyYUh0FE7se5NEU_bg",
  authDomain: "twitter-clone-4fb2f.firebaseapp.com",
  projectId: "twitter-clone-4fb2f",
  storageBucket: "twitter-clone-4fb2f.appspot.com",
  messagingSenderId: "415544779671",
  appId: "1:415544779671:web:9ea168d5a60359c0e49ad2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
//citySnapshot.docs.map(doc => doc.data());
