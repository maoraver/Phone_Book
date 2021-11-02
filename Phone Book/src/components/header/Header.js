/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

// react libraries
import React from "react";

// import css
import "./header.css";

const Header = (props) => {
  return (
    <header>
      <h1>{props.text}</h1>
    </header>
  );
};

export default Header;
