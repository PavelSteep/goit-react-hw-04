import React from "react";
import PropTypes from "prop-types";
import './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return <p className="ErrorMessage">{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
