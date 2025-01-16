import React from 'react';
import PropTypes from 'prop-types';
import './ImageCard.module.css';

const ImageCard = ({ src, alt, onClick }) => ( 
  <li className="ImageCard" onClick={onClick}>
    <img src={src} alt={alt} />
  </li> 
);

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
