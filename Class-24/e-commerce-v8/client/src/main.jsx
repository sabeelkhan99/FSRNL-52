import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './store/user-context.jsx';
import { CartContextProvider } from './store/cart-context.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <UserContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserContextProvider>
  </BrowserRouter>
  // </StrictMode>,
)
