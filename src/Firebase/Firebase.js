import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDkFFZwKUCqhUk3H21NWWsWey-NuxEy_P8",
  authDomain: "xcart-react-js.firebaseapp.com",
  projectId: "xcart-react-js",
  storageBucket: "xcart-react-js.appspot.com",
  messagingSenderId: "712519711147",
  appId: "1:712519711147:web:2ba55f85a4c608f0093aee",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export var firebaseAuth = firebase.auth();
export var firestore = firebase.firestore();
export var serverTimeStamp = () => firebase.firestore.FieldValue.serverTimestamp()
export default firebase;
