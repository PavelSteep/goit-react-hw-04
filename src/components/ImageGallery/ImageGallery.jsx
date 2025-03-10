import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <li key={image.id} className={css.ImageGalleryItem}>
        <ImageCard
          src={image.urls.small}
          alt={image.alt_description || 'No description'}
          onClick={() => onImageClick(image)}
        />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
