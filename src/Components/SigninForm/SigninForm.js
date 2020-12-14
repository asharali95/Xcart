import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "./../../Redux/auth/authAction/authAction";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

var actions = {
  signIn,
};
export default connect(null, actions)(SigninForm);
