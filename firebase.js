import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBOTXrX13hClW271AaG1dYhqhpkKfw7Xqw",
  authDomain: "my-portfolio-2ee5e.firebaseapp.com",
  databaseURL: "https://my-portfolio-2ee5e-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-2ee5e",
  storageBucket: "my-portfolio-2ee5e.appspot.com",
  messagingSenderId: "654068601707",
  appId: "1:654068601707:web:912deabcc1dd66adba722e",
  measurementId: "G-TJ94HQ5DR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Expose for use in script.js
window.firebaseDB = db;
window.firebaseRef = ref;
window.firebasePush = push;
window.firebaseOnValue = onValue;
