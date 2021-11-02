/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

// react libraries
import React from "react";

// import css
import "./footer.css";

const Footer = (props) => {
  return (
    <footer>
      &copy; {props.year} {props.name}
    </footer>
  );
};

export default Footer;
