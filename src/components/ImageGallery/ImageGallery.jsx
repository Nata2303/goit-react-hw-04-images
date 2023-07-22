import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from './imageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={style.gallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
