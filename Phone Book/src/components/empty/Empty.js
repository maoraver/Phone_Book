/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

// react libraries
import React from "react";

// import css
import "./empty.css";

const Empty = (props) => {
  if (props.arrLength === 0) {
    return <h3>No result found.</h3>;
  } else return <h3></h3>;
};

export default Empty;
