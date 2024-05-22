import React, { createContext, useEffect, useState } from 'react'


export const ProductContext = createContext()

function ProductProvider({children}) {

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
    <ProductContext.Provider value={{products,setProducts}}>
      {children}
    </ProductContext.Provider>
    </>
    
  )
}

export default ProductProvider