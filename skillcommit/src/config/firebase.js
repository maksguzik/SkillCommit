import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBanbGWydYGd3YRZwYvYLRSmLFaDLAERBw",
  authDomain: "skillcommit-6971c.firebaseapp.com",
  projectId: "skillcommit-6971c",
  storageBucket: "skillcommit-6971c.firebasestorage.app",
  messagingSenderId: "1056880317992",
  appId: "1:1056880317992:web:806de132b03eab9491071d",
  measurementId: "G-SB482JE8SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };