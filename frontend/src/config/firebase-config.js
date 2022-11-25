
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRg7puMFfH-SNSHZkg6NRk2lwrB01zldM",
  authDomain: "netflix-clone-full-201d6.firebaseapp.com",
  projectId: "netflix-clone-full-201d6",
  storageBucket: "netflix-clone-full-201d6.appspot.com",
  messagingSenderId: "755613973660",
  appId: "1:755613973660:web:a858eb24796cedf5018159",
  measurementId: "G-WSB771B02M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);