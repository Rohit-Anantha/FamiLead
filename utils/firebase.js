// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDhtzd3AtUln5CG_N3PXysa1bBcJMcwyrY",

    authDomain: "familead-d41ef.firebaseapp.com",

    projectId: "familead-d41ef",

    storageBucket: "familead-d41ef.appspot.com",

    messagingSenderId: "988772516971",

    appId: "1:988772516971:web:5238ebb86a2260d1755d2e",

    measurementId: "G-PCM6L739PB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);