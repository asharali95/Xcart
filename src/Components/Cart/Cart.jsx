import React from "react";
import CartList from "../CartList/CartList";
import { connect } from "react-redux";
import { generateOrder } from "../../Redux/order/orderActions";
import "./Cart.css"
import Header from './../Header/Header';
import Button from './../Button/Button';
const Cart = ({ generateOrder, cart }) => {
  return (
    <div className="cart">
      <Header fontSize={20} fontWeight="bold" style={{letterSpacing: "5px",color:"white"}}>Cart</Header>
      <CartList/>
      {/* <button onClick={generateOrder}>CHECKOUT</button> */}
      <Button disabled={cart.length >0 ? false : true} onClick={generateOrder} fontSize={20} background="rgba(0,0,0,0.6)" style={{letterSpacing: "5px", width:"100%"}}>CHECKOUT</Button>
    </div>
  );
};
var mapState = (state) => ({
  cart: state.cart,
});
var actions = {
  generateOrder,
};
export default connect(mapState, actions)(Cart);
