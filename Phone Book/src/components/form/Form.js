/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

// react libraries
import React, { Component } from "react";

// import css
import "./form.css";

/*****************************************
 * * COMPONENT
 *****************************************/

class Form extends Component {
  state = {
    name: this.props.name,
    phone: this.props.phone,
    age: this.props.age,
    address: this.props.address,
    image: this.props.image,
    description: this.props.description,
    id: this.props.id,
  };

  //function to handle change of inputs
  handleChange = (e) => {
    const { name, phone, age, address, image, description } = e.target;
    this.setState({
      [name]: e.target.value,
      [phone]: e.target.value,
      [age]: e.target.value,
      [address]: e.target.value,
      [image]: e.target.value,
      [description]: e.target.value,
    });
  };

  //function to handle submit and call the onSubmit function passed in props
  handleSubmit = (e) => {
    e.preventDefault();
    let { name, phone, age, address, image, description, id } = this.state;
    if (image === "")
      image =
        "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
    this.props.onSubmit(name, phone, age, address, image, description, id);
  };

  //sending default props in case we are using this component as Create Contact Form
  static defaultProps = {
    name: "",
    phone: "",
    age: "",
    address: "",
    image: "",
    description: "",
  };

  //render function
  render() {
    return (
      <div className="divForms">
        <form onSubmit={this.handleSubmit}>
          <h2>{this.props.title}</h2>
          <p>
            Name *
            <input
              name="name"
              type="text"
              placeholder="letters only up to 15 characters"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            Phone *
            <input
              name="phone"
              type="text"
              placeholder="050-1234567"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            Age
            <input
              name="age"
              type="number"
              onChange={this.handleChange}
              value={this.state.age}
            />
          </p>
          <p>
            Address
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </p>
          <p>
            Image
            <input
              name="image"
              type="url"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </p>
          <p>
            Description:
            <textarea
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            ></textarea>
          </p>
          <button type="submit" onClick={this.handleSubmit}>
            Send
          </button>
          <span onClick={this.props.showComp}>&times;</span>
        </form>
      </div>
    );
  }
}

export default Form;
