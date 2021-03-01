import React,{useState} from "react";
import "./Navbar.css";
import Header from "./../Header/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from './../../Redux/auth/authAction/authAction';
import Cart from './../Cart/Cart';

const MenuItem = ({ children, to = "#", ...restProps }) => (
  <div>
    <Link to={to}>
      <div {...restProps} className="menuItem">
        <Header
          fontSize={24}
          fontWeight="bold"
          style={{ cursor: "pointer", display: "inline", color:"white"}}
        >
          {children}
        </Header>
      </div>
    </Link>
  </div>
);

const Navbar = ({ auth, signOut }) => {
  var [isNavbarVisible, setNavbarVisibility] = useState(false);
  return (
    <div className="navbar">
      <MenuItem to="/">Logo</MenuItem>
      <MenuItem to="/categories">Shop</MenuItem>
      <div>
      <Header
          fontSize={24}
          fontWeight="bold"
          style={{ cursor: "pointer", display: "inline",color:"white"}}
          onClick={()=> setNavbarVisibility(!isNavbarVisible)}
        >
          Cart
        </Header>
        {isNavbarVisible? <Cart/>: null}
      </div>
      <MenuItem to={"/test"}>Test</MenuItem>
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
