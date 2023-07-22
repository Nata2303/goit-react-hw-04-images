import React, { useEffect } from 'react';
import style from './modal.module.css';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={style.overlay} onClick={handleClick}>
      <div className={style.modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};

export default Modal;
