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
            <Paragraph fontSize={15} fontWeight="semi-bold">{title}</Paragraph>
            <div style={{display:"flex", alignItems:"center"}}>
                <Paragraph fontSize={14}fontWeight="bold">{cost*quantity}$</Paragraph>
                <div className="flex" style={{flexFlow:"row",justifyContent:"end", marginRight:"1em",columnGap:"5px"}}>
                <Button fontWeight="bold" onClick={()=> addProductToCart(product)} fontSize={15} background="" style={{color:"red",padding:"4px 10px", transform:"translateY(0px)"}}>+</Button>
                <Paragraph fontSize={12}>{quantity}</Paragraph>
                <Button fontWeight="bold" onClick={() => removeItemFromCart(id)} fontSize={15} background="" style={{color:"red",padding:"4px 10px", transform:"translateY(0px)"}}>-</Button>
                </div>
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
