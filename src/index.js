import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the BrowserRouter
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> {/* Wrap your entire app with the Router */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
);

reportWebVitals();
