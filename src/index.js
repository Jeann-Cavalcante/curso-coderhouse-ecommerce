import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import { Flowbite } from 'flowbite-react';
import { CartProvider } from './components/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Flowbite>
      <CartProvider>
        <App />
      </CartProvider>
    </Flowbite>
  </React.StrictMode>
);