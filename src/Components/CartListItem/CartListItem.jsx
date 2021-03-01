import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeItemFromCart,
  deleteAllProductsFromCart,
} from "../../Redux/cart/cartActions/cartActions";
import "./CartListItem.css";
import Paragraph from './../Paragraph/Paragraph';
import Button from './../Button/Button';

const CartListItem = ({
  addProductToCart,
  removeItemFromCart,
  deleteAllProductsFromCart,
  ...product
}) => {
  var { title, cost, quantity, id, coverPhoto } = product;
  return (
    <div className="cart-list-item">
        <div className="cartItemImage" style={{background: `url(${coverPhoto})`, backgroundSize: "100% 100%, cover"}}></div>
        <div className="cartItemDescription">
            <Paragraph fontSize={16} fontWeight="semi-bold">{title}</Paragraph>
            <div style={{display:"flex", alignItems:"center"}}>
                <Paragraph fontSize={15} style={{color:""}} fontWeight="regular">${cost*quantity}</Paragraph><Paragraph fontSize={13} style={{paddingLeft:"10px", color:"grey"}} fontWeight="semi-bold">Quantity:{quantity}</Paragraph>
                <Button onClick={()=> addProductToCart(product)} fontSize={15} background="" style={{color:"red",padding:"4px 10px"}}>+</Button>
                <Button onClick={() => removeItemFromCart(id)} fontSize={15} background="" style={{color:"red",padding:"4px 10px"}}>-</Button>
            </div>
        </div>
      {/* <br/>
            <h2>{title} - {cost}   <button onClick={() => deleteAllProductsFromCart(id)}> X </button></h2>
            <h3> <button onClick={() => removeItemFromCart(id)}> - </button>  {quantity}  <button onClick={()=> addProductToCart(product)}> + </button> </h3> */}
    </div>
  );
};
var actions = {
  addProductToCart,
  removeItemFromCart,
  deleteAllProductsFromCart,
};
export default connect(null, actions)(CartListItem);
