import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcmNmGZaOeYR_cwVQLkHaJBARuJ5dBWcU",
  authDomain: "netflix-clone-8d6f0.firebaseapp.com",
  projectId: "netflix-clone-8d6f0",
  storageBucket: "netflix-clone-8d6f0.appspot.com",
  messagingSenderId: "618371430555",
  appId: "1:618371430555:web:4539954eeed8dd519f6e3e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
