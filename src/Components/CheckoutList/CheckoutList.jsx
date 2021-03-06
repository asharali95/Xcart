import React from 'react'
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'
import { connect } from 'react-redux';
import "./CheckoutList.css"
import Paragraph from '../Paragraph/Paragraph';
const CheckoutList = ({cartItems}) => {

    return (
        <div className="checkout-list">
            <div className="checkout-list-item checkout-list-item-extends">
                <Paragraph fontSize={18} fontWeight="semi-bold">Product</Paragraph>
                <Paragraph fontSize={18} fontWeight="semi-bold">Quantity</Paragraph>
                <Paragraph fontSize={18} fontWeight="semi-bold">Price</Paragraph>
            </div>
            {cartItems.map((item) => <CheckoutListItem key={item.id} {...item}/>)}
        </div>
    )
}
var mapState = (state) =>({
    cartItems: state.cart
})


export default connect(mapState)(CheckoutList)
