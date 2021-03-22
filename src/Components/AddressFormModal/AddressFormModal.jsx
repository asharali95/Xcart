import React, { useState } from "react";
import "./AddressFormModal.css";
import ModalContainer from "./../ModalContainer/ModalContainer";
import TextField from "@material-ui/core/TextField";
import Button from "./../Button/Button";
import Header from "./../Header/Header";
import { connect } from "react-redux";
import {updateOrderInfo} from "../../Redux/order/orderActions"

const AddressFormModal = ({updateOrderInfo,orderId}) => {

  var [address, setAddress] = useState("");
  var [name, setName] = useState("");
  var [contact, setContact] = useState("");
  var [email, setEmail] = useState("");
  var handleSubmit = (e) =>{
    e.preventDefault();
    var addressInfo = {
      name,
      email,
      address,
      contact
    }
    
    updateOrderInfo({orderId,addressInfo});
  }
  return (
    <ModalContainer>
      <form onSubmit={handleSubmit} className="address-form-modal flex">
        <Header fontSize={18} style={{ alignSelf: "start" }}>
          ADDRESS FORM
        </Header>
        <div className="address-form-fields">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%" }}
            id="standard-basic"
            label="Your Name"
          />
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: "100%" }}
            id="standard-basic"
            label="Your Address"
          />
        </div>
        <div className="address-form-fields">
          <TextField
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={{ width: "100%" }}
            id="standard-basic"
            label="Phone"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
            id="standard-basic"
            label="Your Email Address"
          />
        </div>

        <Button type="submit" style={{ marginTop: "2em" }}>
          Proceed and pay
        </Button>
      </form>
    </ModalContainer>
  );
};
var actions ={
  updateOrderInfo
}
export default connect(null,actions)(AddressFormModal);
