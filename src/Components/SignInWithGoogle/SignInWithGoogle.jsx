import React from "react";
import { connect } from "react-redux";
import { googleSignIn } from "../../Redux/auth/authAction/authAction";
import Button from "../Button/Button";
import { FaGoogle } from "react-icons/fa";
const SignInWithGoogle = ({ googleSignIn }) => {

  return <Button
        onClick={() => googleSignIn()}
        fontSize={14}
          background="rgb(217, 83, 79)"
          style={{
            width: "60%",
            marginTop: "2em",
            transform: "translateY(0px)",
          }}
        >
          <FaGoogle size={15}/> Signin with Google
        </Button>
};

var actions = {
  googleSignIn,
};
export default connect(null, actions)(SignInWithGoogle);
