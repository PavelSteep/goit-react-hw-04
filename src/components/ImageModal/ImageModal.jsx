import React from 'react';
import PropTypes from 'prop-types';
import './ImageModal.module.css';

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div className="ImageModal-overlay" onClick={onClose}>
      <div className="ImageModal-content">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
