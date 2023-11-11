// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ImageProvider } from './ImageContext';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';
function App() {
  return (
    <Router>
      <ImageProvider>
        <Routes>
          <Route exact path="/" element={<SearchBar />} />
          <Route path="/search" element={<ImageList />} />
        </Routes>
      </ImageProvider>
    </Router>
  );
}

export default App;
