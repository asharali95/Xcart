import React from "react";
import './Home.css'
const home = () => {
  return (
    <div className="home">
      <div className="homeLeft flex"> <h2>left</h2></div>
      <div className="homeRight flex"><h2>right</h2></div>
    </div>
  );
};

export default home;
