import React from 'react'
import CartListItem from './../CartListItem/CartListItem';
import { connect } from 'react-redux';
import "./CartList.css"
const CartList = ({cartItems}) => {
    return (
        <div className="cart-list">
            {cartItems.map((item) => <CartListItem key={item.id} {...item}/>)}
        </div>
    )
}
var mapState = (state) =>({
    cartItems: state.cart
})


export default connect(mapState)(CartList)
