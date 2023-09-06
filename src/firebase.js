// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu36qbBkKRs2FgRn5SEDaGLtzon9QmJBk",
  authDomain: "ripple-tech-advisors-website.firebaseapp.com",
  projectId: "ripple-tech-advisors-website",
  storageBucket: "ripple-tech-advisors-website.appspot.com",
  messagingSenderId: "583343718245",
  appId: "1:583343718245:web:2060c801620e5755286b8c",
  measurementId: "G-L1KN33JTH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);