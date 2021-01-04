import React from 'react'
import CartList from './../CartList/CartList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateOrder } from './../../Redux/order/orderActions';

const Cart = ({generateOrder}) => {
    return (
        <div>
            <h1>Cart Page</h1>
            <CartList/>
            <button onClick={generateOrder}>CHECKOUT</button>
        </div>
    )
}
var actions = {
    generateOrder,
}
export default connect(null, actions)(Cart)
