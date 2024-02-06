
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import Products from './components/Products';

function App() {

  const [products,setProducts] = useState([])

  // Fetching data from fakestore api

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
  
    fetchProducts();
  }, []);
  return (
   
      <>
        <Header/>
       {
        products.length>0?
        <Products products={products}/>
        :
        <div>Loading....</div>
       } 
        <Footer/>
        
        
      </>
      

   
    
  );
}

export default App;
