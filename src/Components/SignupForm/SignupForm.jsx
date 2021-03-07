import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../Redux/auth/authAction/authAction";
import Button from "./../Button/Button";
import TextField from "@material-ui/core/TextField";
import "./SignupForm.css";

const SignupForm = ({ signup }) => {
  var [fullName, setFullName] = useState("");
  var [email, setemail] = useState("");
  var [password, setPassword] = useState("");
  var handleFormSubmit = (e) => {
    e.preventDefault();
    var cred = {
      fullName,
      email,
      password,
    };
    signup(cred);
  };
  return (
    <form className="signup-form" onSubmit={handleFormSubmit}>
      <TextField
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="Full name"
      />
      <TextField
        value={email}
        onChange={(e) => setemail(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="Email address"
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
        sign up
      </Button>
    </form>
    // <div>
    //   <form onSubmit={handleFormSubmit}>
    //     <input
    //       onChange={(e) => setFullName(e.target.value)}
    //       value={fullName}
    //       name="fullname"
    //       type="text"
    //       placeholder="full name"
    //     />
    //     <input
    //       onChange={(e) => setemail(e.target.value)}
    //       value={email}
    //       name="email"
    //       type="text"
    //       placeholder="email"
    //     />
    //     <input
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //       name="password"
    //       type="text"
    //       placeholder="password"
    //     />
    //     <button type="submit">submit</button>
    //   </form>
    // </div>
  );
};
var actions = {
  signup,
};
export default connect(null, actions)(SignupForm);
