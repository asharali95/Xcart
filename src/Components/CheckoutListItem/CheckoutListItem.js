import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart, removeItemFromCart, deleteAllProductsFromCart } from './../../Redux/cart/cartActions/cartActions';

const CheckoutListItem = ({addProductToCart,removeItemFromCart,deleteAllProductsFromCart,...product}) => {
    var {title="title",cost=50,quantity="0",id} = product;
    return (
        <div>
            <br/>
            <h2>{title} - {cost}   <button onClick={() => deleteAllProductsFromCart(id)}> X </button></h2>
            <h3> <button onClick={()=> addProductToCart(product)}> + </button>  {quantity}  <button onClick={() => removeItemFromCart(id)}> - </button> </h3>
        </div>
    )
}
var actions ={
    addProductToCart,
    removeItemFromCart,
    deleteAllProductsFromCart
}
export default connect(null, actions)(CheckoutListItem)
