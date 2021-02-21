import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../Redux/cart/cartActions/cartActions";

const ProductCard = ({addProductToCart,...product}) => {
    var {title, cost,id} = product;
  return (
    <div>
        <Link to= {`/productDetail/${id}`}><h3>{title}</h3></Link><h4> - {`$${cost}`} - <button onClick={() =>{addProductToCart(product)}}>Add to cart</button>
    </h4>
    </div>
  );
};

var actions = {
  addProductToCart,
};
export default connect(null, actions)(ProductCard);
