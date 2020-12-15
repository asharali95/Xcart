import React from "react";
import SignupForm from "../../Components/SignupForm/SignupForm";
import SigninForm from "./../../Components/SigninForm/SigninForm";
import Signout from "./../../Components/Signout/Signout";
import SignInWithGoogle from "./../../Components/SignInWithGoogle/SignInWithGoogle";
const authentication = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <SigninForm />
      <SignupForm />
      <Signout />
      <SignInWithGoogle />
    </div>
  );
};

export default authentication;
