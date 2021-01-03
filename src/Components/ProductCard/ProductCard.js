import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "./../../Redux/cart/cartActions/cartActions";

const ProductCard = ({addProductToCart,...product}) => {
    var {title, cost} = product;
  return (
    <div>
      <h4>
        {title} - {`$${cost}`} - <button onClick={() =>{addProductToCart(product)}}>Add to cart</button>  
      </h4>
    </div>
  );
};

var actions = {
  addProductToCart,
};
export default connect(null, actions)(ProductCard);
