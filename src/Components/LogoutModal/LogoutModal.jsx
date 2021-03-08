import React from "react";
import "./LogoutModal.css";
import { signOut } from "./../../Redux/auth/authAction/authAction";
import { closeModal } from "./../../Redux/modal/modalActions";
import ModalContainer from "./../ModalContainer/ModalContainer";
import { connect } from "react-redux";
import Button from "./../Button/Button";
import Header from "./../Header/Header";
import { Link } from "react-router-dom";

const LogoutModal = ({ signOut, closeModal }) => {
  return (
    <ModalContainer>
      <div className="logout-modal flex" style={{ flexFlow: "column" }}>
        <Header>Are you sure you want to log out?</Header>

        <div className="btns">
          <Link to={"/authentication"}>
            <Button
              background="rgb(217, 83, 79)"
              color="white"
              onClick={() => {
                signOut();
                closeModal();
              }}
            >
              Yes
            </Button>
          </Link>
          <Button
            background="rgb(131, 131, 243)"
            color="white"
            onClick={() => closeModal()}
          >
            No
          </Button>
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
