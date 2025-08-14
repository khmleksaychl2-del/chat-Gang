// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPZr1aivETzDN7AJoYJgLxdW-uk2q7oNI",
  authDomain: "chat-app-70717.firebaseapp.com",
  projectId: "chat-app-70717",
  storageBucket: "chat-app-70717.appspot.com",
  messagingSenderId: "710301365664",
  appId: "1:710301365664:web:3f6f0f8bc88e41bba7e0c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);