import { combineReducers } from "redux";
// import actionTypes from "./contactsActionTypes";
import contactsActions from "./contactsActions";
import { createReducer } from "@reduxjs/toolkit";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
const localList = JSON.parse(localStorage.getItem("contacts"));
const INITIAL_STATE = {
  contacts: localList || defaultContacts,
  filter: "",
};

const newContact = (state, action) => [...state, action.payload.contact];
const removeContact = (state, action) => state.filter((contact) => contact.id !== action.payload);
// const filter = ()
const items = createReducer(INITIAL_STATE.contacts, {
  [contactsActions.addContact]: newContact,
  [contactsActions.removeContact]: removeContact,
});

// const items = (state = INITIAL_STATE.contacts, { type, payload }) => {
//   switch (type) {
//     case contactsActions.addContact.type:
//       return [...state, payload.contact];
//     case contactsActions.removeContact.type:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };
const filter = createReducer(INITIAL_STATE.filter, {
  [contactsActions.filterRender]: (state, action) => action.payload,
});
// const filter = (state = INITIAL_STATE.filter, { type, payload }) => {
//   switch (type) {
//     case contactsActions.filterRender.type:
//       return payload;

//     default:
//       return state;
//   }
// };
export default combineReducers({ items, filter });
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
