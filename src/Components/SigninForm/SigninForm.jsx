import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../Redux/auth/authAction/authAction";
import "./SigninForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "./../Button/Button";

const SigninForm = ({ signIn }) => {
  var [email, setemail] = useState("");
  var [password, setPassword] = useState("");
  var handleFormSubmit = (e) => {
    e.preventDefault();
    var cred = {
      email,
      password,
    };
    signIn(cred);
  };
  return (
    <form className="signin-form" onSubmit={handleFormSubmit}>
      <TextField
        value={email}
        onChange={(e) => setemail(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="Email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="Password"
        type="password"
      />
      <Button
      fontSize={14}
        type="submit"
        background="rgb(95, 95, 226)"
        style={{ width: "50%", marginTop: "2em", transform: "translateY(0px)" }}
      >
        sign in
      </Button>
    </form>
  );
};

var actions = {
  signIn,
};
export default connect(null, actions)(SigninForm);
