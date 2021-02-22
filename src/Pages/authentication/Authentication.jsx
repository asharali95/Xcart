import React from "react";
import SignupForm from "../../Components/SignupForm/SignupForm";
import SigninForm from "../../Components/SigninForm/SigninForm";
import SignInWithGoogle from "../../Components/SignInWithGoogle/SignInWithGoogle";
const authentication = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <SigninForm />
      <SignupForm />
      <SignInWithGoogle />
    </div>
  );
};

export default authentication;
