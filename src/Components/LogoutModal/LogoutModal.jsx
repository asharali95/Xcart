import React from "react";
import "./LogoutModal.css";
import { signOut } from "./../../Redux/auth/authAction/authAction";
import { closeModal } from "./../../Redux/modal/modalActions";
import ModalContainer from "./../ModalContainer/ModalContainer";
import { connect } from "react-redux";
import Button from "./../Button/Button";
import Header from "./../Header/Header";

const LogoutModal = ({ signOut, closeModal }) => {
  return (
    <ModalContainer>
      <div className="logout-modal flex" style={{ flexFlow: "column" }}>
        <Header>Are you sure you want to log out?</Header>
        <div className="btns">
          <Button
            to="/authentication"
            onClick={() => {
              signOut();
              closeModal();
            }}
          >
            Yes
          </Button>
          <Button onClick={() => closeModal()}>No</Button>
        </div>
      </div>
    </ModalContainer>
  );
};
var actions = {
  signOut,
  closeModal,
};
export default connect(null, actions)(LogoutModal);
