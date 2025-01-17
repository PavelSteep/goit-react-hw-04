import React from "react";
import PropTypes from "prop-types";
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return <p className={css.ErrorMessage}>{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
