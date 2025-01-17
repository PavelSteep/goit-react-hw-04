import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

ReactModal.setAppElement('#root');

const ImageModal = ({ src, alt, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (src && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [src]);

  return (
    <ReactModal
      isOpen={!!src}
      onRequestClose={onClose}
      className={css.ImageModalContent}
      overlayClassName={css.ImageModalOverlay}
      aria={{
        modal: true,
      }}
    >
      <button
        ref={closeButtonRef}
        className={css.ImageModalCloseButton}
        onClick={onClose}
      >
        &times;
      </button>
      <img src={src} alt={alt} className={css.ImageModalImage} />
    </ReactModal>
  );
};

ImageModal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
