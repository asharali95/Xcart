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
  ...restProps
}) => {
  return (
    <button
      className="button"
      style={{ background, color, ...style }}
      {...restProps}
    >
      <Paragraph color fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Paragraph>
    </button>
  );
};

export default Button;
