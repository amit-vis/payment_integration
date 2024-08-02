import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB10RYaoQfNz1f80cmfCwg89_qvhFt_Qxg",
    authDomain: "edtechproject-e009b.firebaseapp.com",
    projectId: "edtechproject-e009b",
    storageBucket: "edtechproject-e009b.appspot.com",
    messagingSenderId: "166084173255",
    appId: "1:166084173255:web:468367f48a9a1162cf0de2",
    measurementId: "G-MEG4KLSHGN"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
