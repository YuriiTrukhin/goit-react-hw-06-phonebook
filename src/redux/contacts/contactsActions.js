import actionTypes from "./contactsActionTypes";
import { v4 as uuid4 } from "uuid";

const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    contact: {
      name,
      number,
      id: uuid4(),
    },
  },
});
const removeContact = (id) => ({
  type: actionTypes.DELETE,
  payload: {
    id,
  },
});
const filterRender = (filter) => ({
  type: actionTypes.FILTER_RENDER,
  payload: {
    filter,
  },
});
export default { addContact, removeContact, filterRender };
