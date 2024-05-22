import React, { useContext, useEffect, useState } from 'react'
import logo from '../assests/Ecom-logo.png'
import { SidebarContext } from '../contexts/SidebarContext';
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { HeaderContext } from '../contexts/HeaderContext';

function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const toggleNavbar = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  
   const {isOpen,setIsOpen} = useContext(SidebarContext)
   const {cart,totalNum} = useContext(CartContext)
   const [isActive,setIsActive] = useState(false);
   const {isProductPage,setIsProductPage} = useContext(HeaderContext)

   


  //  event listener
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  



   
  


   

  return (
    <>
    {isProductPage?(
      // Header of product page
           <header className='bg-gray-900  shadow-md text-gray-50 opacity-95 mx-auto flex flex-wrap w-full items-center justify-between fixed z-20 transition-all '>
           {/* cart icon */}
           {/* <div className='text-xl' onClick={()=>setIsOpen(!isOpen)}>
           <IoBagHandleOutline />
           </div> */}
            {/* Logo */}
           <Link to={'/'} className="flex title-font font-medium items-center mb-4 md:mb-0">
             <img className='w-16 p-1' src={logo} alt="" />
             <span className="ml-3 text-xl">SnapShop</span>
           </Link>
   
           <nav className=' flex justify-end '>
             <div className=' hidden w-full  md:flex md:mr-16 relative '>
               <div className='flex items-center cursor-pointer '>
                 <Link to={'/'} className=' hover:text-amber-700 duration-500 md:mx-2' >Home</Link>
                 <Link to={'/'} className=' hover:text-amber-700 duration-500 md:mx-2' >About</Link>
                 <Link to={'/'} className=' hover:text-amber-700 duration-500 md:mx-2' >Blog</Link>
                 <Link to={'/'} className=' hover:text-amber-700 duration-500 md:mx-2 ' >Contact</Link>
               </div>
               {/* Cart icon */}
               {/* <button onClick={()=>setIsOpen(!isOpen)} className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0 py-1 px-3 md:pr-8 focus:outline-none hover:bg-amber-500 rounded text-base w-20 mt-4 ml-5  md:mt-0"> */}
               <button onClick={()=>setIsOpen(!isOpen)} className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0  focus:outline-none hover:bg-amber-500 text-base w-[30px] h-[30px] rounded-full justify-center ml-4">
                 {/* mr-1 */}
                 <img className='w-5' src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png" alt="" />
                 
               </button>
               <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                {totalNum}
               </div>
             </div>
             <div className="md:hidden mr-6">
               <button onClick={toggleNavbar}>{isToggleOpen ? <i className="fa-solid fa-xmark "></i> : <i className="fa-solid fa-bars"></i>}</button>
             </div>
   
           </nav>
           {isToggleOpen && (
             <div className='md:hidden flex flex-col items-center basis-full cursor-pointer'>
               <Link to={'/'} className='text-gray-700 hover:text-amber-700 duration-500 my-3' >Home</Link>
               <Link to={'/'} className='text-gray-700 hover:text-amber-700 duration-500 my-3' >About</Link>
               <Link to={'/'} className='text-gray-700 hover:text-amber-700 duration-500 my-3' >Blog</Link>
               <Link to={'/'} className='text-gray-700 hover:text-amber-700 duration-500 my-3' >Contact</Link>
   
               {/* <button className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-amber-500 rounded text-base mt-4 mr-4 md:mt-0 my-6 ms-5" > */}
              {/* cart icon */}
               <button onClick={()=>setIsOpen(!isOpen)} className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0  focus:outline-none hover:bg-amber-500 text-base w-[30px] h-[30px] rounded-full justify-center ml-4">
                 <img className='w-5' src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png" alt="" />
               </button>
   
               <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                {totalNum}
               </div>
                
             </div>
           )}
   
         </header>
    ):( // Header of Home page
      <header className={`${isActive ? 'bg-slate-600  shadow-md text-gray-50 opacity-95' : 'bg-none py-2 shadow-none text-gray-200 hover:text-white '}  shadow-md mx-auto flex flex-wrap w-full items-center justify-between fixed z-20 transition-all `}>
      {/* cart icon */}
      {/* <div className='text-xl' onClick={()=>setIsOpen(!isOpen)}>
      <IoBagHandleOutline />
      </div> */}
       {/* Logo */}
      <Link to={'/'} className="flex title-font font-medium items-center mb-4 md:mb-0">
        <img className='w-16 p-1' src={logo} alt="" />
        <span className="ml-3 text-xl">SnapShop</span>
      </Link>

      <nav className=' flex justify-end '>
        <div className=' hidden w-full  md:flex md:mr-16 relative '>
          <div className='flex items-center cursor-pointer'>
            <Link to={'/'} className=' hover:text-amber-700 duration-500 md:mx-2' >Home</Link>
            <Link to={'/'} className=' hover:text-amber-700 duration-500 md:mx-2' >About</Link>
            <Link to={'/'} className=' hover:text-amber-700 duration-500 md:mx-2' >Blog</Link>
            <Link to={'/'} className=' hover:text-amber-700 duration-500 md:mx-2 ' >Contact</Link>
          </div>
          {/* Cart icon */}
          {/* <button onClick={()=>setIsOpen(!isOpen)} className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0 py-1 px-3 md:pr-8 focus:outline-none hover:bg-amber-500 rounded text-base w-20 mt-4 ml-5  md:mt-0"> */}
          <button onClick={()=>setIsOpen(!isOpen)} className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0  focus:outline-none hover:bg-amber-500 text-base w-[30px] h-[30px] rounded-full justify-center ml-4">
            {/* mr-1 */}
            <img className='w-5' src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png" alt="" />
            
          </button>
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
           {totalNum}
          </div>
        </div>
        <div className="md:hidden mr-6">
          <button onClick={toggleNavbar}>{isToggleOpen ? <i className="fa-solid fa-xmark "></i> : <i className="fa-solid fa-bars"></i>}</button>
        </div>

      </nav>
      {isToggleOpen && (
        <div className='md:hidden flex flex-col justify-center items-center basis-full cursor-pointer'>
          <Link to={'/'} className='text-gray-300 hover:text-amber-700 duration-500 my-3' >Home</Link>
          <Link to={'/'} className='text-gray-300 hover:text-amber-700 duration-500 my-3' >About</Link>
          <Link to= {'/'} className='text-gray-300 hover:text-amber-700 duration-500 my-3' >Blog</Link>
          <Link to= {'/'} className='text-gray-300 hover:text-amber-700 duration-500 my-3' >Contact</Link>

          {/* <button className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-amber-500 rounded text-base mt-4 mr-4 md:mt-0 my-6 ms-5" > */}
         {/* cart icon */}
          <button onClick={()=>setIsOpen(!isOpen)} className="inline-flex items-center bg-amber-300 text-slate-700 font-bold border-0  focus:outline-none hover:bg-amber-500 text-base w-[30px] h-[30px] rounded-full justify-center ml-4">
            <img className='w-5' src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png" alt="" />
          </button>

          <div className='bg-red-500 ml-11 -mt-2  text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>
           {totalNum}
          </div>
           
        </div>
      )}

    </header>
    )}


    </>



  )
}

export default Header