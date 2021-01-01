import React from "react";
import { connect } from "react-redux";
import { addProductToCart,removeItemFromCart,deleteAllProductsFromCart } from "./../../Redux/cart/cartActions/cartActions";

const ProductCard = ({addProductToCart,removeItemFromCart,deleteAllProductsFromCart,...product}) => {
    var {title, cost} = product;
  return (
    <div>
      <h4>
        {title} - {`$${cost}`} - <button onClick={() =>{addProductToCart(product)}}>Add to cart</button>  
          <button onClick={() =>{removeItemFromCart(product.id)}}>Remove from cart</button>   
          <button onClick={() =>{deleteAllProductsFromCart(product.id)}}>Remove all</button>   

      </h4>
    </div>
  );
};

var actions = {
  addProductToCart,
  removeItemFromCart,
  deleteAllProductsFromCart
};
export default connect(null, actions)(ProductCard);
