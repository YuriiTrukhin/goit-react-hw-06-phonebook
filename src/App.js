import React, { Component } from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import ContactList from "../src/components/ContactList/ContactList";
import Filter from "../src/components/Filter/Filter";
import styles from "./App.module.css";
import { CSSTransition } from "react-transition-group";

export default class App extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <CSSTransition in={true} appear={true} timeout={5000} classNames={styles}>
            <h1 className={styles.title}>Phonebook</h1>
          </CSSTransition>
          <ContactForm />
          <h2 className={styles.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}
