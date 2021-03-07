import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeItemFromCart,
  deleteAllProductsFromCart,
} from "./../../Redux/cart/cartActions/cartActions";
import "./CheckoutListItem.css";
import Paragraph from "./../Paragraph/Paragraph";
import Button from "./../Button/Button";
const CheckoutListItem = ({
  addProductToCart,
  removeItemFromCart,
  deleteAllProductsFromCart,
  ...product
}) => {
  var { title = "title", cost = 0, quantity = "0", id, coverPhoto } = product;
  return (
    <div className="checkout-list-item">
      <div className="checkout-item-product">
        <div
          className="checkout-item-product-image"
          style={{
            backgroundImage: `url(${coverPhoto})`,
            backgroundSize: "100% 100% ,cover",
          }}
        ></div>
        <Paragraph fontSize={18} fontWeight="semi-bold">
          {title}
        </Paragraph>
      </div>
      <div className="checkout-item-quantity flex" style={{ flexFlow: "row" }}>
        <Button
          onClick={() => addProductToCart(product)}
          fontWeight="bold"
          color="black"
          background="white"
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            transform: "translateX(7px)",
            boxShadow: "0 5px 2px -2px rgba(180, 179, 179, 0.993)",
          }}
        >
          +
          
        </Button>
        <Button
          fontWeight="bold"
          color="black"
          background="white"
          style={{
            transform: "translateY(0px)",
            boxShadow: "0 5px 2px -2px rgba(180, 179, 179, 0.993)",
          }}
        >
          {quantity}
        </Button>
        <Button
          onClick={() => removeItemFromCart(id)}
          fontWeight="bold"
          color="black"
          background="white"
          style={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            transform: "translateX(-7px)",
            boxShadow: "0 5px 2px -2px rgba(180, 179, 179, 0.993)",
          }}
        >
          -
        </Button>
      </div>
      <div className="checkout-item-price flex" style={{ flexFlow: "row" }}>
        <Paragraph fontSize={20} fontWeight="semi-bold">
          {cost * quantity}$
        </Paragraph>
      </div>
      <div className="checkout-item-cross flex" style={{ flexFlow: "row" }}>
        <Button
          onClick={() => deleteAllProductsFromCart(id)}
          fontWeight="bold"
          fontSize={18}
          color="black"
          background="none"
          style={{ transform: "translateY(0px)" }}
        >
          X
        </Button>
      </div>
      {/* <br/>
            <h2>{title} - {cost}   <button onClick={() => deleteAllProductsFromCart(id)}> X </button></h2>
        <h3> <button onClick={() => removeItemFromCart(id)}> - </button>  {quantity}  <button onClick={()=> addProductToCart(product)}> + </button></h3> */}
    </div>
  );
};
var actions = {
  addProductToCart,
  removeItemFromCart,
  deleteAllProductsFromCart,
};
export default connect(null, actions)(CheckoutListItem);
