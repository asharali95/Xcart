import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import ModalContainer from "./../ModalContainer/ModalContainer";
import "./ErrorModal.css";
import { FaMinusCircle } from "react-icons/fa";

const ErrorModal = ({error}) => {
  return (
    <ModalContainer>
      <div className="error-modal flex">
        <FaMinusCircle size="50" color="rgb(217, 83, 79)"/>
        <Paragraph fontWeight="bold" style={{textAlign: "center", padding:"2em"}}>
        {error}
        </Paragraph>
      </div>
    </ModalContainer>
  );
};

export default ErrorModal;
