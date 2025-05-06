import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAIhpFcLw8Rwjyih20uHBFXnD3pbDfxPwo",
    authDomain: "entregafinalreact-f9617.firebaseapp.com",
    projectId: "entregafinalreact-f9617",
    storageBucket: "entregafinalreact-f9617.firebasestorage.app",
    messagingSenderId: "294583572023",
    appId: "1:294583572023:web:5dedac90bb48fdffb911b2",
    measurementId: "G-G05H4T8T3Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
