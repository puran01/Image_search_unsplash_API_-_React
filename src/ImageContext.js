// ImageContext.js
import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=FFdnEUnwiNVYXqWqw9NhGBeim1cJzFx_wp43rG3Ud1Q`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageContext.Provider value={{ images, loading, error, fetchImages }}>
      {children}
    </ImageContext.Provider>
  );
};

const useImage = () => {
  return useContext(ImageContext);
};

export { ImageProvider, useImage };
