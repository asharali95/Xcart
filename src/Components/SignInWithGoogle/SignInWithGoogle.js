import React from "react";
import { connect } from "react-redux";
import { googleSignIn } from "../../Redux/auth/authAction/authAction";
const SignInWithGoogle = ({ googleSignIn }) => {
  return <button onClick={googleSignIn}>Sign in with Google</button>;
};

var actions = {
  googleSignIn,
};
export default connect(null, actions)(SignInWithGoogle);
