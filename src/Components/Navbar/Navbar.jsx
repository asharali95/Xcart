import React from "react";
import "./Navbar.css";
import Header from "./../Header/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from './../../Redux/auth/authAction/authAction';

const MenuItem = ({ children, to = "#", ...restProps }) => (
  <div>
    <Link to={to}>
      <div {...restProps} className="menuItem">
        <Header
          fontSize={24}
          fontWeight="bold"
          style={{ cursor: "pointer", display: "inline" }}
        >
          {children}
        </Header>
      </div>
    </Link>
  </div>
);

const Navbar = ({ auth, signOut }) => {
  return (
    <div className="navbar">
      <MenuItem to="/">Logo</MenuItem>
      <MenuItem to="/categories">Shop</MenuItem>
      <MenuItem>Cart</MenuItem>
      {auth ? <MenuItem to="/authentication" onClick={signOut}>Logout</MenuItem>:
      <MenuItem to="/authentication">Login</MenuItem>}
    </div>
  );
};
var mapState = (state) => ({
  auth: state.auth,
});
var actions ={
  signOut
}
export default connect(mapState,actions)(Navbar);
