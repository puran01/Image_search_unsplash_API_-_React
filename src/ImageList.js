// src/ImageList.js
import React from 'react';
import { useImage } from './ImageContext';
import {Link} from 'react-router-dom'
import './ImageList.css'

function ImageList() {
  const { images, loading, error } = useImage();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Unable to fetch images. Please try again later.</div>;
  }

  if (images.length === 0) {
    return <div>
      <h3>No images found.</h3>
      <Link to="/">Back to Search</Link>
      </div>;
  }

  return (
    <div className='image-list-container'>
      <Link to="/">Back to Search</Link>
      <div className='image-grid'>
      {images.map((image) => (
        <Image key={image.id} data={image} />
      ))}
    </div>
    </div>
  );
}

function Image({ data }) {
  return (
    <div className='image-item'>
      <a href={data.urls.full} target="_blank" rel="noopener noreferrer">
        <img src={data.urls.small} alt={data.description} />
      </a>
    </div>
  );
}

export default ImageList;
