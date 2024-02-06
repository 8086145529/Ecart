import React, { useState } from 'react'
import logo from '../assests/Ecom-logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='className="text-gray-600 body-font shadow-md bg-blue-300 mx-auto flex flex-wrap  w-full items-center justify-between'>
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className='w-16 p-1' src={logo} alt="" />
          <span className="ml-3 text-xl">SnapShop</span>
        </a>

        <nav className=' flex justify-end '>
          <div className=' hidden w-full  md:flex md:mr-16 '>
            <div className='flex items-center'>
              <a href="/home" className='text-gray-700 hover:text-amber-700 duration-500 md:mx-2' >Home</a>
              <a href="/about" className='text-gray-700 hover:text-amber-700 duration-500 md:mx-2' >About</a>
              <a href="/blog" className='text-gray-700 hover:text-amber-700 duration-500 md:mx-2' >Blog</a>
              <a href="/contact" className='text-gray-700 hover:text-amber-700 duration-500 md:mx-2 ' >Contact</a>
            </div>
            <button className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0 py-1 px-3 md:pr-8 focus:outline-none hover:bg-amber-500 rounded text-base w-20 mt-4 ml-5  md:mt-0">
              <img className='w-5 mr-1 ' src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png" alt="" />
              Cart
            </button>
          </div>
          <div className="md:hidden mr-6">
            <button onClick={toggleNavbar}>{isOpen ? <i className="fa-solid fa-xmark "></i> : <i className="fa-solid fa-bars"></i>}</button>
          </div>
        </nav>
        {isOpen && (
          <div className='md:hidden flex flex-col items-center basis-full'>
            <a href="/home" className='text-gray-700 hover:text-amber-700 duration-500 my-3' >Home</a>
            <a href="/about" className='text-gray-700 hover:text-amber-700 duration-500 my-3' >About</a>
            <a href="/blog" className='text-gray-700 hover:text-amber-700 duration-500 my-3' >Blog</a>
            <a href="/contact" className='text-gray-700 hover:text-amber-700 duration-500 my-3' >Contact</a>

            <button className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-amber-500 rounded text-base mt-4 mr-4 md:mt-0 my-6 ms-5" >
              <img className='w-5 mr-1' src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png" alt="" />
              Cart
            </button>
          </div>
        )}

      </header>

    </>



  )
}

export default Header