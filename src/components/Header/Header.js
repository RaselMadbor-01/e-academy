import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";

import "./Header.css";

const Header = () => {
  return (
    <div style={{backgroundColor:"#072A5F" ,color:"#fff"}}>
      <NavBar></NavBar>
      <Banner/>
    </div>
  );
};

export default Header;
