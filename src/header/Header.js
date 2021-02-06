import React from "react";
import "./Header.css";
import PZJImg from "../assets/imgs/ZarrarPic.png";

const Header = () => {
  return (
    <div id="header">
      <img className="proimg" src={PZJImg} alt="Zarrar-Pro-Img" />
      <div className="prodesc">
        <h1>Zarrar</h1>
        <h2>Palekar</h2>
      </div>
    </div>
  );
};

export default Header;
