// import actionTypes from "./contactsActionTypes";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    contact: {
      name,
      number,
      id: uuidv4(),
    },
  },
}));

// const addContact = ({ name, number }) => ({
//   type: actionTypes.ADD,
//   payload: {
//     contact: {
//       name,
//       number,
//       id: uuidv4(),
//     },
//   },
// });

const removeContact = createAction("contacts/delete");
// const removeContact = (id) => ({
//   type: actionTypes.DELETE,
//   payload: {
//     id,
//   },
// });
const filterRender = createAction("contacts/filterRender");
// const filterRender = (filter) => ({
//   type: actionTypes.FILTER_RENDER,
//   payload: {
//     filter,
//   },
// });
// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, removeContact, filterRender };
