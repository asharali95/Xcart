import { REMOVE_USER, SET_USER } from "./../authConstants/authConstants";
import {
  firebaseAuth,
  firestore,
  serverTimeStamp,
} from "./../../../Firebase/Firebase";

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
  type: REMOVE_USER
})

export var signup = ({ fullName, email, password }) => async (dispatch) => {
  try {
    // create user on firebase auth section
    var {
      user: { uid },
    } = await firebaseAuth.createUserWithEmailAndPassword(email, password);
    var userInfo = {
      fullName,
      email,
      password,
      createdAt: serverTimeStamp(),
    };
    //set user data to firestore
    var userData = await firestore.collection("users").doc(uid).set(userInfo);

    //setting up state
    var userDataForState = {
      fullName,
      email,
      uid,
    };
    dispatch(setUser(userDataForState));
    console.log("done");
  } catch (error) {
    console.log(error);
  }
};

export var signIn = ({ email, password }) => async (dispatch) => {
  try {
    // console.log(cred)
    var {
      user: { uid },
    } = await firebaseAuth.signInWithEmailAndPassword(email, password);
    //fetch user data from firestore
    var userData = await firestore.collection("users").doc(uid).get();
    // console.log(userData.data())
    var { fullName, email: userEmail } = userData.data();
    //set user data in auth state
    var userDataForState = {
      fullName,
      userEmail,
      uid,
    };
    dispatch(setUser(userDataForState));
  } catch (error) {
    console.log(error);
  }
};

export var signOut = () => async (dispatch) =>{
  try {
    // signout user from firebase auth
      await firebaseAuth.signOut()
      dispatch(removeUser())
      console.log("user Sign Out")
  } catch (error) {
    console.log(error)
  }
}