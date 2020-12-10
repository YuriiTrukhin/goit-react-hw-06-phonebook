import { combineReducers } from "redux";
import actionTypes from "./contactsActionTypes";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload.contact];
    case actionTypes.DELETE:
      return state.filter((contact) => contact.id !== payload.id);
    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_RENDER:
      return payload.filter;

    default:
      return state;
  }
};
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
