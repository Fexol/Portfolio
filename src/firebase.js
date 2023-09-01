// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // Your Firebase config settings
  apiKey: "AIzaSyDDgYg7ThUK2QBr6mN-9lAwHJqhKEjFiwQ",
  authDomain: "gw2raffle-4dfa3.firebaseapp.com",
  projectId: "gw2raffle-4dfa3",
  storageBucket: "gw2raffle-4dfa3.appspot.com",
  messagingSenderId: "183517006620",
  appId: "1:183517006620:web:370505c7fe510c004788d9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const firestore = firebase.firestore;

export default firebase;
