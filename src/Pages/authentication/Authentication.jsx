import React from "react";
import SignupForm from "../../Components/SignupForm/SignupForm";
import SigninForm from "../../Components/SigninForm/SigninForm";
import SignInWithGoogle from "../../Components/SignInWithGoogle/SignInWithGoogle";
import "./Authentication.css"
import AuthForm from './../../Components/AuthForm/AuthForm';

const authentication = () => {
  return (
    <div className="authentication">
      <div className="auth-left">

      </div>
      <div className="auth-right flex" style={{alignItems:"start"}}>
      <AuthForm/>
      </div>
      {/* <h1>Auth Page</h1>
      <SigninForm />
      <SignupForm />
      <SignInWithGoogle /> */}
    </div>
  );
};

export default authentication;
