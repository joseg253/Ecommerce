import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "e-commerce-56b0d.firebaseapp.com",
  databaseURL: "https://e-commerce-56b0d.firebaseio.com",
  projectId: "e-commerce-56b0d",
  storageBucket: "e-commerce-56b0d.appspot.com",
  messagingSenderId: "436664663894",
  appId: "1:436664663894:web:665623532605727ba660f7",
  measurementId: "G-5CG06HNFC3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
