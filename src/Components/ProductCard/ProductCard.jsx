import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../Redux/cart/cartActions/cartActions";
import './productCard.css'
import Header from './../Header/Header';
import Button from './../Button/Button';
const ProductCard = ({addProductToCart,...product}) => {
    var {title, cost,id, coverPhoto} = product;
  return (
    <div className="product_card flex">
        {/* <Link to= {`/productDetail/${id}`}><h3>{title}</h3></Link><h4> - {`$${cost}`} - <button onClick={() =>{addProductToCart(product)}}>Add to cart</button> </h4> */}
    <div className="product_card_hover flex">
      <Button onClick={() =>{addProductToCart(product)}} fontSize={12} fontWeight="bold" background="black">Add to cart</Button>
    </div>
    <div style={{background: `url(${coverPhoto})`,backgroundSize: "100% 100%, cover"}} className="product_card_img"></div>
    <Header style={{alignSelf:"flex-start", marginTop:"0.5em"}} fontSize={18} >{title}</Header>
    <Header style={{alignSelf:"flex-start"}} fontSize={20} fontWeight="regular" >{cost}$</Header>
    </div>
  );
};

var actions = {
  addProductToCart,
};
export default connect(null, actions)(ProductCard);
