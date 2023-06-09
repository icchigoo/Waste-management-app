// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDrc52WOsixc7Q3w2lfRHphFUvWCXyNTo",
    authDomain: "swms-e87cc.firebaseapp.com",
    projectId: "swms-e87cc",
    storageBucket: "swms-e87cc.appspot.com",
    messagingSenderId: "1006890003896",
    appId: "1:1006890003896:web:5a72ea122d2f2c1541334d"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyCLRqWjUpQ8RvGqIqihEw5JLSZBzkCUKC8",
//     authDomain: "testing-app-63e4d.firebaseapp.com",
//     databaseURL: "https://testing-app-63e4d-default-rtdb.firebaseio.com",
//     projectId: "testing-app-63e4d",
//     storageBucket: "testing-app-63e4d.appspot.com",
//     messagingSenderId: "5172518899",
//     appId: "1:5172518899:web:663f73eb398849d4d2fc86",
//     measurementId: "G-GWEFX0DQR8"
//   };
 
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const firestore = firebase.firestore(app);
const storage = firebase.storage(app);
 
export { firebase };
export { auth };
export { storage };
export { firestore };