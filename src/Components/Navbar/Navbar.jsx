import React,{useState} from "react";
import "./Navbar.css";
import Header from "./../Header/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Cart from './../Cart/Cart';
import { openModal } from './../../Redux/modal/modalActions';

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

const Navbar = ({ auth, openModal }) => {
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
      {auth ? <MenuItem onClick={() => openModal({ modalType: "logoutModal" })}>Logout</MenuItem>:
      <MenuItem to="/authentication">Login</MenuItem>}
    </div>
  );
};
var mapState = (state) => ({
  auth: state.auth,
});
var actions ={
  openModal,
}
export default connect(mapState,actions)(Navbar);
