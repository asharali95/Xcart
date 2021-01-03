import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart, removeItemFromCart, deleteAllProductsFromCart } from './../../Redux/cart/cartActions/cartActions';

const CartListItem = ({addProductToCart,removeItemFromCart,deleteAllProductsFromCart,...product}) => {
    var {title="title",cost=50,quantity="0",id} = product;
    return (
        <div>
            <br/>
            <h2>{title} - {cost}   <button onClick={() => deleteAllProductsFromCart(id)}> X </button></h2>
            <h3> <button onClick={() => removeItemFromCart(id)}> - </button>  {quantity}  <button onClick={()=> addProductToCart(product)}> + </button> </h3>
        </div>
    )
}
var actions ={
    addProductToCart,
    removeItemFromCart,
    deleteAllProductsFromCart
}
export default connect(null, actions)(CartListItem)
