/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

// react libraries
import React, { Component } from "react";

// import css
import "./contactInfo.css";

class ContactInfo extends Component {
  render() {
    return (
      <div className="divForms">
        <div className="showContact">
          <p>
            <span>Name: {this.props.name}</span>
          </p>
          <p>
            <span>Tel: {this.props.phone}</span>
          </p>
          <p>
            <span>Address: {this.props.address}</span>
          </p>
          <p>
            <span>Age:{this.props.age} </span>
          </p>
          <span className="closeShow" onClick={this.props.showInfoComp}>
            &times;
          </span>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
