import React from "react";
import CartList from "../CartList/CartList";
import { connect } from "react-redux";
import { generateOrder } from "../../Redux/order/orderActions";

const Cart = ({ generateOrder, cart }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      <CartList />
      {cart.length === 0 ? (
        <h3>Sorry you can't proceed. You don't add anything in cart yet</h3>
      ) : (
        <button onClick={generateOrder}>CHECKOUT</button>
      )}
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
