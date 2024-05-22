
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import Products from './components/Products';
import Herobanner from './components/Herobanner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
function App() {


  return (

    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/product/:id'} element={<ProductDetails />} />
        </Routes>
        
        <Sidebar/>
        <Footer />
      </BrowserRouter>
    </>




  );
}

export default App;
