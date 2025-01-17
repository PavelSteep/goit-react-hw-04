import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageCard.module.css';

const ImageCard = ({ src, alt, onClick }) => (
  <img src={src} alt={alt} onClick={onClick} className={css.ImageCardImage} />
);

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
