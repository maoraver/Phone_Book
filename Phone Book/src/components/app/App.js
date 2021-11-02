/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

// react libraries
import React from "react";

// import css
import "./app.css";

// import components
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

/*****************************************
 * * COMPONENT
 *****************************************/

const App = () => {
  const date = new Date();
  return (
    // Calling Header,Main and Footer Components
    <div className="app">
      <Header text="Phone Book" />
      <Main />
      <Footer year={date.getFullYear()} name="Ofek and Maor 45-1" />
    </div>
  );
};

export default App;
