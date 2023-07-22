import React from 'react';
import style from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };

  return (
      <li className={style.galleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageGalleryItem;