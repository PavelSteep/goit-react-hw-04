import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const API_KEY = '091343ce13c8ae780065ecb3b13dc903475dd22cb78a05503c2e0c69c5e98044';
  const BASE_URL = 'https://api.unsplash.com/search/photos';

  // useEffect для инициализации SimpleLightbox
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionDelay: 250,
    });

    return () => {
      lightbox.destroy(); // Уничтожаем экземпляр при размонтировании
    };
  }, [images]);

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
          toast.error('Ничего не найдено по вашему запросу.');
          return;
        }

        setImages(prevImages => [...prevImages, ...newImages]);

        iziToast.show({
          title: 'Successfully!',
          message: `Found ${newImages.length} Images.`,
          position: 'topRight',
          color: 'green',
        });
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
      toast.error('Enter text to search.');
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
    <div className="App">
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
