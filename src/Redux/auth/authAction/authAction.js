import { REMOVE_USER, SET_USER } from "./../authConstants/authConstants";
import history from './../../../history/history';
import {
  firebaseAuth,
  firestore,
  serverTimeStamp,
  googleAuthProvider,
} from "../../../Firebase/Firebase";

export var setUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: SET_USER,
      payload: {
        user,
      },
    });
  } catch (error) {}
};
export var removeUser = () => ({
  type: REMOVE_USER,
});

export var signup = ({ fullName, email, password }) => async () => {
  try {
    // create user on firebase auth section
    var {
      user: { uid },
    } = await firebaseAuth.createUserWithEmailAndPassword(email, password);
    var userInfo = {
      fullName,
      email,
      createdAt: serverTimeStamp(),
    };
    //set user data to firestore
    await firestore.collection("users").doc(uid).set(userInfo);
    //navigate to home page
    history.push("/")
  } catch (error) {
    console.log(error);
  }
};

export var signIn = ({ email, password }) => async () => {
  try {
    // console.log(cred)
    await firebaseAuth.signInWithEmailAndPassword(email, password);
    //navigate to home page
    history.push("/")
  } catch (error) {
    console.log(error);
  }
};

export var signOut = () => async () => {
  try {
    // signout user from firebase auth
    await firebaseAuth.signOut();
  } catch (error) {
    console.log(error);
  }
};

export var googleSignIn = () => async () => {
  try {
    googleAuthProvider.setCustomParameters({
      prompt: "select_account",
    });
    var {
      user: { displayName, email, uid },
      additionalUserInfo: { isNewUser },
    } = await firebaseAuth.signInWithPopup(googleAuthProvider);
    if (isNewUser) {
      // if new user then add document in firestore
      var userInfo = {
        fullName: displayName,
        email,
        createdAt: serverTimeStamp(),
      };
      // else
      //set user data to firestore
      await firestore.collection("users").doc(uid).set(userInfo);

      //navigate to home page
      history.push("/")
    }
    history.push("/")
  } catch (error) {
    console.log(error);
  }
};

// this function works as a centralized auth manager for our app
export var firebaseAuthListener = () => async (dispatch) => {
  try {
    // firebase auth listener
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in.
        var { uid } = user;
        // console.log(uid)
        //fetch user data from firestore
        var query = await firestore.collection("users").doc(uid).get();
        var { fullName, email } = query.data();
        var userDataForState = {
          fullName,
          userEmail: email,
          uid,
        };
        dispatch(setUser(userDataForState));
      } else {
        // No user is signed in.
        //set state to null
        dispatch(removeUser());
      }
    });
  } catch (error) {
    console.log(error);
  }
};

/* onAuthStateChanged triggers when 
Right after the listener has been registered
When a user is signed in
When the current user is signed out
When the current user changes
*/