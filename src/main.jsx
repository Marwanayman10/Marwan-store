import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css'
import 'swiper/css/pagination'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './components/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
