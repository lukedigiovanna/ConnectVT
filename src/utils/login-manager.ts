
import firebase from '../constants/firebase';
import { useNavigate } from 'react-router-dom';
import Paths from '../constants/paths';

// responsible for indicating to us whether or not we are logged in.

let loggedIn = false;

// async function login(email: string, password: string): string {
//     const navigate = useNavigate();

//     try {
//         await firebase.auth().signInWithEmailAndPassword(email, password);  
//         // navigate to the home page
//         navigate(Paths.root);
//     }
//     catch (error) {
//         return error.message;
//     }
// }

export {loggedIn};