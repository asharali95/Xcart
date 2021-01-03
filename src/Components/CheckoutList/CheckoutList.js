import React from 'react'
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'
import { connect } from 'react-redux';

const CheckoutList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div>
            {cartItems.map((item) => <CheckoutListItem key={item.id} {...item}/>)}
        </div>
    )
}
var mapState = (state) =>({
    cartItems: state.cart
})


export default connect(mapState)(CheckoutList)
