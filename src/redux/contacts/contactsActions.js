import actionTypes from "./contactsActionTypes";
const addContact = (contact) => ({
  type: actionTypes.ADD,
  payload: {
    contact,
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
