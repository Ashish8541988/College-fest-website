// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5RKRuO6Cd9e-HKoZbnngIJzuxkOk6qc",
  authDomain: "sac1-d974c.firebaseapp.com",
  projectId: "sac1-d974c",
  storageBucket: "sac1-d974c.appspot.com",
  messagingSenderId: "814836322697",
  appId: "1:814836322697:web:100bd8b789eea2329c1158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {app};