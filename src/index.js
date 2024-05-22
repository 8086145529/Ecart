import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// ProductProvider
import ProductProvider from './contexts/ProductContext';
// SidebarProvider
import SidebarProvider from './contexts/SidebarContext';
// CartProvider
import CartProvider from './contexts/CartContext';
import HeaderProvider from './contexts/HeaderContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <HeaderProvider>
      <CartProvider>
         <SidebarProvider>
            <ProductProvider>
               <React.StrictMode>
                  <App />
               </React.StrictMode>
            </ProductProvider>
         </SidebarProvider>
      </CartProvider>
   </HeaderProvider>

);


