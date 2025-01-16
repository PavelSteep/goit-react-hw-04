import React from 'react';
import PropTypes from 'prop-types';
import './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button className="LoadMoreBtn" type="button" onClick={onClick}>Load more</button>
);

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
