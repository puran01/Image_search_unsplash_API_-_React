// src/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImage } from './ImageContext';
import './SeacrhBar.css'

function SearchBar() {
  const { fetchImages } = useImage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    await fetchImages(query);
    navigate('/search');
  };

  return (
    <div className='search-container'>
      <input 
      type='text' 
      value={query} 
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Enter a search term..." 
      className='search-input'/>
      <button onClick={handleSearch} className='search-button'>Search</button>
    </div>
  );
}

export default SearchBar;
