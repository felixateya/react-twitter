// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPOOVfbJ4KilKuNfpD4TtNgC4HqBgAbGc",
  authDomain: "mytwitter-920c6.firebaseapp.com",
  projectId: "mytwitter-920c6",
  storageBucket: "mytwitter-920c6.appspot.com",
  messagingSenderId: "790717390028",
  appId: "1:790717390028:web:a9d852583b38318592b669",
  measurementId: "G-Y4JD2NG08B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}
export{analytics}