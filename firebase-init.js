
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);