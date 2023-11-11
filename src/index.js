import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <h1 className='whiteText' >Hi, this works on React and Unsplash APIs</h1>
    <App />
  </React.StrictMode>
);
