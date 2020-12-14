import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "./../../Redux/auth/authAction/authAction";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          name="fullname"
          type="text"
          placeholder="full name"
        />
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          type="text"
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
var actions = {
  signup,
};
export default connect(null, actions)(SignupForm);
