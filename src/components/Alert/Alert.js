import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message }) => <div className="alertBox">{message}</div>;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Alert;
