// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLRqWjUpQ8RvGqIqihEw5JLSZBzkCUKC8",
    authDomain: "testing-app-63e4d.firebaseapp.com",
    projectId: "testing-app-63e4d",
    storageBucket: "testing-app-63e4d.appspot.com",
    messagingSenderId: "5172518899",
    appId: "1:5172518899:web:663f73eb398849d4d2fc86"
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