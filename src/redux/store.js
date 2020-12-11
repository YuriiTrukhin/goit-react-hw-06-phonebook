import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";
import contactReducer from "./contacts/contactsReducer";
// import listReducer from "./contacts/contactsReducer";

// Используем редюсер-болванку
// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

// const store = createStore(
//   rootReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export default store;
