import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import LikedItemsProvider from './components/context/AddToCart';
import { AppProvider } from './components/context/AllProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LikedItemsProvider>
      <AppProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AppProvider>
    </LikedItemsProvider>
  </BrowserRouter>
);

reportWebVitals();
