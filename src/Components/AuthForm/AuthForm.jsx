import React, { useState } from "react";
import SigninForm from "../SigninForm/SigninForm";
import SignInWithGoogle from "../SignInWithGoogle/SignInWithGoogle";
import SignupForm from "../SignupForm/SignupForm";
import Button from "./../Button/Button";
import "./AuthForm.css";

const AuthForm = () => {
  var [formType, setFormType] = useState("sign-in")
  return (
    <div className="auth-form">
      <div className="auth-form-switcher">
        <Button
          onClick={() => setFormType("sign-in")}
          style={{ position: "relative", transform: "translateY(0px)" }}
          background="white"
          color="black"
        >
          SIGN IN
          <div className="underliner"></div>
        </Button>

        <Button
         onClick={() => setFormType("sign-up")}
          background="white"
          color="black"
          style={{
            position: "relative",
            justifySelf: "end",
            transform: "translateY(0px)",
          }}
        >
          SIGN UP
          <div className="underliner"></div>
        </Button>
      </div>
      <div className="auth-form-fields flex">
        {formType =="sign-in" ? <SigninForm/> : <SignupForm/> }
      </div>
      <div className="auth-form-btn">
        <div className="seperator-OR">OR</div>
          <SignInWithGoogle/>
      </div>
    </div>
  );
};

export default (AuthForm);
