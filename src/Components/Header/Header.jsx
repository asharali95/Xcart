import React from "react";
import './Header.css'
var fontWeightEstimater = (weightStr) => {
  switch (weightStr) {
    case "light":
      return 300;
    case "regular":
      return 400;
    case "semi-bold":
      return 500;
    case "bold":
      return 700;
    default:
      return 400;
  }
};
const Header = ({
  children,
  fontSize = 16,
  fontWeight = "bold",
  style = {},
  color="black"
}) => {
  var fontSizeValue = fontSize/10;
  var fontWeightValue = fontWeightEstimater(fontWeight);
  return <div className="header" style={{ fontWeight: fontWeightValue,
                    fontSize:`${fontSizeValue}em`,color,...style}}>{children}</div>;
};

export default Header;
