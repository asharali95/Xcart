import React from "react";
import "./ModalContainer.css";
import { connect } from "react-redux";
import { closeModal } from "./../../Redux/modal/modalActions";

const ModalContainer = ({ children, closeModal }) => {
  return (
    <div
      className="modal-container flex"
      onClick={(e) => {
        if (e.target === e.currentTarget)  closeModal();
      }}
    >
      {children}
    </div>
  );
};
var actions = {
  closeModal,
};

export default connect(null, actions)(ModalContainer);
