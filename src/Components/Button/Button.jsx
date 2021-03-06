import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import "./Button.css";
const Button = ({
  children,
  background = "purple",
  style = {},
  color = "white",
  fontWeight,
  fontSize=12,
  disabled=false,
  ...restProps
}) => {
  return (
    <button
      disabled={disabled}
      className="button"
      style={{ background: disabled ? "lightgrey": background, color, ...style }}
      {...restProps}
    >
      <Paragraph color fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Paragraph>
    </button>
  );
};

export default Button;
