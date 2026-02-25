// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: // ✅ your API key
  authDomain:
  projectId: ,
  storageBucket:  // ✅ fixed: should end with .appspot.com
  messagingSenderId:            // ✅ your messaging sender ID
  appId:                // ✅ your app ID
  measurementId: 
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Analytics
const analytics = getAnalytics(app);

// ✅ Initialize Firebase Auth, Firestore, and Storage
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

enableIndexedDbPersistence(db).catch((err) => {
  console.warn("Offline persistence error:", err);
});
// ✅ Export for use in other files
export { app, auth, db, storage, analytics };
