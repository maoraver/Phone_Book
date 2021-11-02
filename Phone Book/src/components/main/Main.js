/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

// react libraries
import React from "react";
import uuid from "react-uuid";
import { AiFillDelete, AiFillEdit, AiFillInfoCircle } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";

// import css
import "./main.css";

// import components
import Form from "../form/Form";
import { contactsArr } from "../contacts/Contacts";
import ContactInfo from "../contactInfo/ContactInfo";
import Empty from "../empty/Empty";

/*****************************************
 * * COMPONENT
 *****************************************/

class Main extends React.Component {
  state = {
    showCreateComp: false,
    showInfoComp: false,
    showEditComp: false,
    contactsArr,
    copyArr: contactsArr,
    i: 4,
    search: "",
    name: "",
    phone: "",
    address: "",
    age: "",
    image: "",
    description: "",
    id: -1,
  };

  //function to handle change of input search box
  handleChange = (e) => {
    const t = e.target.value.toLowerCase();
    this.setState((prevState) => {
      const resultArr = prevState.contactsArr.filter((contact) =>
        contact.name.toLowerCase().includes(t)
      );
      return {
        copyArr: resultArr,
        search: t,
      };
    });
  };

  //function to submit the create contact form and insert the new contact into the array
  createSub = (name, phone, age, address, image, description, id) => {
    let flag = true;
    for (let i = 0; i < this.state.contactsArr.length; i++) {
      //for-loop to go over all array's cells
      if (name === this.state.contactsArr[i].name) {
        //if the fullname's value of current cell is equals to the input's value
        flag = false; //setting flag as false because we found a contact with the same name in the array
        window.alert("Contact name already in use, please try again"); //alerting the user
        break;
      }
    }
    if (!/^[a-zA-Z\s]{1,15}$/.test(name)) {
      window.alert("Name with letters and spaces only");
      flag = false;
    }
    if (!/^\d{3}[-]\d{7}$/.test(phone)) {
      window.alert("Phone example format: 054-1234567");
      flag = false;
    }
    if (flag) {
      this.setState((prev) => ({
        contactsArr: [
          ...prev.contactsArr,
          { name, phone, age, address, image, description, id },
        ],
        copyArr: [
          ...prev.contactsArr,
          { name, phone, age, address, image, description, id },
        ],
        i: this.state.i + 1,
      }));
      this.changeCreateComp();
    }
  };

  //function to return a new array with the updated details
  forEditSub = (name, phone, age, address, image, description, id) => {
    const newArr = this.state.contactsArr;
    for (let i = 0; i < this.state.contactsArr.length; i++)
      if (this.state.contactsArr[i].id === id) {
        newArr[i].name = name;
        newArr[i].phone = phone;
        newArr[i].age = age;
        newArr[i].address = address;
        newArr[i].image = image;
        newArr[i].description = description;
      }
    return newArr;
  };

  //function to submit the edit contact form and update the contact
  editSub = (name, phone, age, address, image, description, id) => {
    this.setState({
      contactsArr: this.forEditSub(
        name,
        phone,
        age,
        address,
        image,
        description,
        id
      ),
      copyArr: this.forEditSub(
        name,
        phone,
        age,
        address,
        image,
        description,
        id
      ),
    });
    this.changeEditComp();
  };

  /*Function to change the boolean variables in order to load the form components*/
  changeCreateComp = () => {
    this.setState({
      showCreateComp: !this.state.showCreateComp,
    });
  };

  changeInfoComp = () => {
    this.setState({
      showInfoComp: !this.state.showInfoComp,
    });
  };

  changeEditComp = () => {
    this.setState({
      showEditComp: !this.state.showEditComp,
    });
  };
  /***************************************************************************** */

  //function to delete all contacts from the array
  deleteAllContact = () => {
    this.setState({
      copyArr: [],
      contactsArr: [],
    });
  };

  //function to delete a specific contact from the array
  deleteContact = (id) => {
    const newArr = this.state.contactsArr.filter((el) => el.id !== id);
    this.setState((prev) => ({
      contactsArr: newArr,
      copyArr: newArr.filter((el) =>
        el.name.toLowerCase().includes(prev.search)
      ),
    }));
  };

  //function to update this state contact variables
  changeVar = (id) => {
    let index = -1;
    for (let i = 0; i < this.state.contactsArr.length; i++)
      if (this.state.contactsArr[i].id === id) {
        index = i;
      }
    this.setState({
      name: this.state.contactsArr[index].name,
      phone: this.state.contactsArr[index].phone,
      age: this.state.contactsArr[index].age,
      address: this.state.contactsArr[index].address,
      image: this.state.contactsArr[index].image,
      description: this.state.contactsArr[index].description,
      id: this.state.contactsArr[index].id,
    });
  };

  //function to update this state contact variables and load edit component
  updateEdit = (id) => {
    this.changeVar(id);
    this.changeEditComp();
  };

  //function to update this state contact variables and load info component
  updateInfo = (id) => {
    this.changeVar(id);
    this.changeInfoComp();
  };

  //render function
  render() {
    if (this.state.copyArr)
      //sorting the array
      this.state.copyArr.sort(function (a, b) {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    return (
      <main>
        <div className="container">
          <div className="upper">
            <span className="contactsLength">
              {this.state.copyArr.length} people{" "}
            </span>
            <input
              className="search"
              type="text"
              required
              onChange={this.handleChange}
            />
            <div className="upperLogos">
              <IoIosCreate id="createContact" onClick={this.changeCreateComp} />
              <AiFillDelete id="deleteAll" onClick={this.deleteAllContact} />
            </div>
          </div>
          <div className="middle">
            <ul>
              {this.state.copyArr.map((contact) => (
                <li key={uuid()}>
                  <img
                    className="profileImg"
                    src={contact.image}
                    alt="Profile pic"
                    onClick={() => this.updateInfo(contact.id)}
                  ></img>
                  <span className="fullNameSpan">{contact.name}</span>
                  <AiFillDelete
                    className="deleteImg"
                    onClick={() => this.deleteContact(contact.id)}
                  />
                  <AiFillEdit
                    className="editImg"
                    onClick={() => this.updateEdit(contact.id)}
                  />
                  <AiFillInfoCircle
                    className="infoImg"
                    onClick={() => this.updateInfo(contact.id)}
                  />
                </li>
              ))}
              <Empty arrLength={this.state.copyArr.length} />
            </ul>
          </div>
        </div>
        {this.state.showCreateComp ? (
          //if this state show create component is true, load Form component with the right onSubmit and showComp functions
          <Form
            title="Create Contact"
            onSubmit={this.createSub}
            showComp={this.changeCreateComp}
            id={this.state.i}
          />
        ) : null}
        {this.state.showEditComp ? (
          /*if this state show edit component is true, load Form component with the right onSubmit and showComp functions
            and sends all this state contact variables */
          <Form
            title="Edit Contact"
            onSubmit={this.editSub}
            showComp={this.changeEditComp}
            name={this.state.name}
            phone={this.state.phone}
            age={this.state.age}
            address={this.state.address}
            image={this.state.image}
            description={this.state.description}
            id={this.state.id}
          />
        ) : null}
        {this.state.showInfoComp ? (
          /*if this state show info component is true, load ContactInfo component with the right showComp functions
            and sends the needed this state contact variables */
          <ContactInfo
            showInfoComp={this.changeInfoComp}
            name={this.state.name}
            phone={this.state.phone}
            age={this.state.age}
            address={this.state.address}
          />
        ) : null}
      </main>
    );
  }
}

export default Main;
