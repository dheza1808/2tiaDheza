import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/tailwind.css';
import './index.css'; // pastikan ini diimpor di `main.jsx`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
