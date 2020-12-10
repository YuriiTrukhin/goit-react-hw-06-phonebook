import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

const showCloseBtn = true;

const ContactList = function ({ list, toDelete }) {
  return (
    <>
      <TransitionGroup component="ul" className={styles.list}>
        {list.map((el) => {
          return (
            <CSSTransition key={el.id} classNames="showbutton" timeout={250}>
              <li key={el.id} className={styles.listItem}>
                {el.name} : {el.number}
                <button className={styles.btn} type="button" onClick={() => toDelete(el.id)}>
                  Удалить
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
};
ContactList.propTypes = {
  toDelete: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
const mapStateToProps = (state, props) => ({
  list: state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  ),
});
const mapDispatchToProps = { toDelete: contactsActions.removeContact };
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
