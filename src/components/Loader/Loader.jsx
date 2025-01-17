import React from 'react';
import PropTypes from 'prop-types';
import css from './Loader.module.css';

const Loader = ({ size = 50, color = '#3498db' }) => {
  return (
    <div className={css.Loader}>
      <div 
        className={css.LoaderSpinner} 
        style={{
          width: size, 
          height: size,
          borderTopColor: color,
        }}
      ></div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Loader;
