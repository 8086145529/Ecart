import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Products from '../components/Products'
import Herobanner from '../components/Herobanner'

function Home() {
 const {products} = useContext(ProductContext)
  return (
    <>
       <Herobanner/>
            {
          products.length > 0 ?
            <Products products={products} />
            :
            <div className='h-screen flex justify-center items-center font-bold '>Loading....</div>
        }
    </>
  )
}

export default Home