// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXoS_5mh4uTZm4iZQroA9v7ohK3khXDVo",
    authDomain: "passive-2d3a5.firebaseapp.com",
    projectId: "passive-2d3a5",
    storageBucket: "passive-2d3a5.appspot.com",
    messagingSenderId: "1085457032906",
    appId: "1:1085457032906:web:0a1c33d38fdc05ec5e7633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Auth
const auth = getAuth(app);

export {auth}