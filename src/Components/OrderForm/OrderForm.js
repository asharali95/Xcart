import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

const OrderForm = ({user}) => {
    var [receiverFullName, setReceiverFullName] = useState("");
    var [receiverEmail, setReceiverEmail] = useState("");
    var [receiverPhone, setReceiverPhone] = useState("");
    var [receiverCompleteAddress, setReceiverCompleteAddress] = useState("");
    useEffect(() =>{
        //cdm
        var {fullName, userEmail, phone, address} = user
        setReceiverFullName(fullName ? fullName:"")
        setReceiverEmail(userEmail ? userEmail:"")
    },[])

  var handleSubmit = (e) => {
    e.preventDefault();
    var shippingInfo = {
      receiverFullName,
      receiverEmail,
      receiverPhone,
      receiverCompleteAddress,
    };
    console.log(shippingInfo)
  };
  return (
    <div>
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setReceiverFullName(e.target.value)}
          type="text"
          placeholder="Full name"
          value={receiverFullName}
        />
        <input
          onChange={(e) => setReceiverEmail(e.target.value)}
          type="text"
          placeholder="Email"
          value={receiverEmail}
        />
        <input
          onChange={(e) => setReceiverPhone(e.target.value)}
          type="text"
          placeholder="Phone"
          value={receiverPhone}
        />
        <input
          onChange={(e) => setReceiverCompleteAddress(e.target.value)}
          type="text"
          placeholder="Complete Address" 
          value={receiverCompleteAddress}
        />
        <br/>
        <button type="submit">PAY</button>
      </form>
    </div>
  );
};
var mapState = (state) => ({
    user: state.auth 
})
export default connect(mapState)(OrderForm);
