// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKfiTF6G-_i08nlqC6O0NsFEl2496ZPRQ",
  authDomain: "connectvt-4821a.firebaseapp.com",
  projectId: "connectvt-4821a",
  storageBucket: "connectvt-4821a.appspot.com",
  messagingSenderId: "84130214107",
  appId: "1:84130214107:web:98f845e6bac5a1869a5cfe",
  measurementId: "G-PQNN2GSNJT"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;