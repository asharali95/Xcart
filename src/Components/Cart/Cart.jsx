import React from "react";
import CartList from "../CartList/CartList";
import { connect } from "react-redux";
import { generateOrder } from "../../Redux/order/orderActions";
import "./Cart.css";
import Header from "./../Header/Header";
import Button from "./../Button/Button";
import { openModal } from './../../Redux/modal/modalActions';
const Cart = ({ generateOrder, cart, auth, openModal }) => {
  return (
    <div className="cart">
      <Header
        fontSize={20}
        fontWeight="bold"
        style={{ letterSpacing: "5px", color: "white" }}
      >
        Cart
      </Header>
      <CartList />
      <Button
        disabled={cart.length > 0 ? false : true}
        onClick={() =>{
          (auth ? generateOrder() : openModal({ modalType: "errorModal", modalProps:{error:"Checkout feature unavailable. Login to your account first!"} }))
        }}
        fontSize={20}
        background="rgba(0,0,0,0.6)"
        style={{ letterSpacing: "5px", width: "100%" }}
      >
        CHECKOUT
      </Button>
    </div>
  );
};
var mapState = (state) => ({
  cart: state.cart,
  auth: state.auth,
});
var actions = {
  generateOrder,
  openModal,
};
export default connect(mapState, actions)(Cart);
