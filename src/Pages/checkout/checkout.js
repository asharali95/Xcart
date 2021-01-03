import React from 'react'
import CheckoutList from './../../Components/CheckoutList/CheckoutList';
import { calculateTotalCost } from './../../Utility/Utility-Products/Utility-checkout';
import { connect } from 'react-redux';

const checkout = ({total}) => {
    return (
        <div>
            <h1>checkout Page</h1>
            <CheckoutList/>
            <br/>
            <h2>Total Cost : {total}</h2> <br/>
            <button>PAY NOW</button>
        </div>
    )
}
var mapState = (state) =>({
    total: calculateTotalCost(state.cart)
})
   
export default connect(mapState)(checkout)
