// firebase-config.js
// Make sure this is loaded on every page using Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5PutZn5DYeuMcs9Z2AbflaYGxUpD-XFw",
  authDomain: "placement-cell-7b2ec.firebaseapp.com",
  projectId: "placement-cell-7b2ec",
  storageBucket: "placement-cell-7b2ec.firebasestorage.app",
  messagingSenderId: "17277112372",
  appId: "1:17277112372:web:a9a8f3513633c3c3243a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
