import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import css from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const API_KEY = '7ONfI7UAT2PSN72enwnwIF_Hz9RWzxRm5xMYrdv1n-4';
  const BASE_URL = 'https://api.unsplash.com/search/photos';

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            query: searchQuery,
            page,
            per_page: 12,
            client_id: API_KEY,
          },
        });
        const newImages = response.data.results;

        if (newImages.length === 0 && page === 1) {
          toast.error('No results found for your query.');
          return;
        }

        setImages(prevImages => [...prevImages, ...newImages]);

        toast.success(`Found ${newImages.length} images.`);
      } catch (error) {
        setError('An error occurred while loading images.');
        toast.error('Failed to load images.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearchSubmit = query => {
    if (query.trim() === '') {
      toast.error('Please enter a search query.');
      return;
    }
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.App}>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader size={100} color="#ff5733" />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          src={selectedImage.urls.full}
          alt={selectedImage.alt_description}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
