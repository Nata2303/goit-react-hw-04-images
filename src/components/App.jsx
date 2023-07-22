import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import style from './app.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=37017406-53d78b8b42616f89f9425447d&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data.hits]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={style.app}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {isLoading && <Loader />}
      {!!images.length && images.length % 12 === 0 && (
        <Button onClick={handleLoadMore} images={images} />
      )}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
