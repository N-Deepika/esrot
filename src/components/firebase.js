import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOzlqpqykjYQS6vIC10zuI2xb60ka7dnw",
  authDomain: "the-pool-funders.firebaseapp.com",
  projectId: "the-pool-funders",
  storageBucket: "the-pool-funders.appspot.com",
  messagingSenderId: "977096633483",
  appId: "1:977096633483:web:1ea3a0c8e88c27edd6788e",
  measurementId: "G-CVQGXXC6J1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const storageRef = firebase.storage().ref();

export { db, auth, storage, storageRef };
