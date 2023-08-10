// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXkmnef5_KsfyV_-DXbX-ImX6F2XG3yWY",
  authDomain: "auth-firebase-context-ta-e6f9c.firebaseapp.com",
  projectId: "auth-firebase-context-ta-e6f9c",
  storageBucket: "auth-firebase-context-ta-e6f9c.appspot.com",
  messagingSenderId: "1089611646964",
  appId: "1:1089611646964:web:c65a25cc8e1ec2d5791ba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;