import React, { Component } from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import ContactList from "../src/components/ContactList/ContactList";
import Filter from "../src/components/Filter/Filter";
import styles from "./App.module.css";
import { CSSTransition } from "react-transition-group";
// import Alert from "./components/Alert/Alert";

// const INITIAL_STATE = {
//   isVisible: false,
//   message: "",
// };
// const contactsList = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

export default class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: "",
  //   ...INITIAL_STATE,
  // };

  // componentDidMount() {
  //   const persistedTask = localStorage.getItem("contacts");
  //   if (persistedTask === null) {
  //     this.setState({
  //       contacts: contactsList,
  //     });
  //   } else if (persistedTask) {
  //     this.setState({
  //       contacts: JSON.parse(persistedTask),
  //     });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     this.state.contacts.length >= 1 && localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  // toAddContact = (el) => {
  //   const rule = this.state.contacts.some((contact) => contact.name === el.name);
  //   if (rule) {
  //     this.setState({
  //       isVisible: true,
  //       message: "Contact already exists!",
  //     });
  //     setTimeout(() => {
  //       this.setState({
  //         ...INITIAL_STATE,
  //       });
  //     }, 1500);
  //   } else if (el.name.length >= 1) {
  //     this.setState((prev) => {
  //       const updateState = [...prev.contacts, el];
  //       return { contacts: updateState };
  //     });
  //   }
  // };
  // filterRender = (filter) => {
  //   this.setState({ filter });
  // };
  // filterTask = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  // };
  // toDelete = (id) => {
  //   const { contacts } = this.state;
  //   const obj = contacts.find((el) => el.id === id);
  //   const index = contacts.indexOf(obj);
  //   this.setState((prevState) => ({
  //     contacts: [...prevState.contacts.slice(0, index), ...prevState.contacts.slice(index + 1)],
  //   }));
  //   if (contacts.length < 2) {
  //     localStorage.removeItem("contacts");
  //   }
  // };

  render() {
    // const { contacts, filter, isVisible, message } = this.state;
    // const filterText = this.filterTask();
    return (
      <>
        <div className={styles.container}>
          <CSSTransition in={true} appear={true} timeout={5000} classNames={styles}>
            <h1 className={styles.title}>Phonebook</h1>
          </CSSTransition>
          <ContactForm />
          {/* <CSSTransition in={isVisible} timeout={250} unmountOnExit classNames="alert">
            <Alert />
          </CSSTransition> */}
          <h2 className={styles.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}
