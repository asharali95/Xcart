import React from 'react'
import CartListItem from './../CartListItem/CartListItem';
import { connect } from 'react-redux';

const CartList = ({cartItems}) => {
    return (
        <div>
            <h2>Cart List</h2>
            {cartItems.map((item) => <CartListItem key={item.id} {...item}/>)}
        </div>
    )
}
var mapState = (state) =>({
    cartItems: state.cart
})


export default connect(mapState)(CartList)
