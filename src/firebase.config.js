// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtqrCB-aF5Ssy0EfuOetfL7cnbBthBXsM",
    authDomain: "fir-ed713.firebaseapp.com",
    projectId: "fir-ed713",
    storageBucket: "fir-ed713.appspot.com",
    messagingSenderId: "960034376274",
    appId: "1:960034376274:web:91cbc20a534c74a10ded8b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
