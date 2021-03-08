import React from "react";
import CheckoutList from "./../../Components/CheckoutList/CheckoutList";
import { calculateTotalCost } from "./../../Utility/Utility-Products/Utility-checkout";
import { connect } from "react-redux";
// import OrderForm from "./../../Components/OrderForm/OrderForm";
import "./Checkout.css";
import Header from "./../../Components/Header/Header";
import Button from "./../../Components/Button/Button";
import Paragraph from "../../Components/Paragraph/Paragraph";
import { openModal } from "./../../Redux/modal/modalActions";

const checkout = ({ total, openModal }) => {
  return (
    <div className="checkoutPageContainer">
      <div className="checkout">
        <Header fontWeight="bold" fontSize={35}>
          Shopping Cart
        </Header>
        <CheckoutList />
        <div className="checkout-bottom-content">
          <Paragraph fontSize={25} fontWeight="semi-bold">
            Total: {total}$
          </Paragraph>
          <Button
            onClick={() => openModal({ modalType: "addressFormModal" })}
            background="white"
            color="black"
            fontSize={20}
            style={{
              transform: "translateY(0px)",
              borderRadius: "5px",
              boxShadow: "0px 5px 5px 2px rgba(180, 179, 179, 0.993)",
            }}
          >
            Proceed!
          </Button>
        </div>
      </div>
    </div>
  );
};
var actions = {
  openModal,
};
var mapState = (state) => ({
  total: calculateTotalCost(state.cart),
});

export default connect(mapState, actions)(checkout);
