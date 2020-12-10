import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuid4 } from "uuid";
import styles from "./ContactForm.module.css";
import newContact from "../../redux/contacts/contactsActions";

const INITIAL_STATE = {
  name: "",
  number: "",
  id: "",
};
class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    this.setState({
      id: uuid4(),
      [target.name]: target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <div>
          <form className={styles.form} action="" onSubmit={this.handleSubmit}>
            <label className={styles.label} htmlFor="name">
              {" "}
              Name
              <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                placeholder="name"
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} htmlFor="number">
              {" "}
              Number
              <input
                className={styles.input}
                type="tel"
                name="number"
                value={number}
                placeholder="number"
                onChange={this.handleChange}
              />
            </label>
            <input className={styles.inputBtn} type="submit" value="Add contuct" />
          </form>
        </div>
      </>
    );
  }
}
// const mapStateToProps = (state, props) => ({
//   contact: state.contact,
//   // currentFilter: state.filter,
// });
const mapDispatchToProps = { addContact: newContact.addContact };
export default connect(null, mapDispatchToProps)(ContactForm);
