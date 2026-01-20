import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, deleteDoc, onSnapshot, query, where, getDocs, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK4ofL00jycE0o6R-G80AqSUK-UjOXZDY",
    authDomain: "nasra-voting-system.firebaseapp.com",
    projectId: "nasra-voting-system",
    storageBucket: "nasra-voting-system.firebasestorage.app",
    messagingSenderId: "856470484144",
    appId: "1:856470484144:web:c8f1596b794d66cd387775",
    measurementId: "G-7CWZ0LBJXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore functions for use in other files
export { db, collection, doc, setDoc, getDoc, updateDoc, deleteDoc, onSnapshot, query, where, getDocs, increment };

