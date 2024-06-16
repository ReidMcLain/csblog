import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);