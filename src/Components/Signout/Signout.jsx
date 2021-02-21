import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../Redux/auth/authAction/authAction";

const Signout = ({ signOut }) => {
  return (
    <div>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};
var actions = {
  signOut,
};
export default connect(null, actions)(Signout);
