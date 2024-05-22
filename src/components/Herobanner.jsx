import React from 'react'
import img1 from '../assests/women-1.jpg'
import img2 from '../assests/men-1.jpg'
import img3 from '../assests/special-2.jpg'


function Herobanner() {
  
  return (

      <div id='banner' className='banner relative w-full h-screen py-0 px-[100px] flex justify-between items-center overflow-hidden sm:py-0 sm:px-20px'>
    
        <div className='women absolute top-0 left-0 h-full w-2/5 transition duration-100 flex justify-center items-center '>
        {/* Make the shade for the images using this seperate div as the content of a div (women) that is positioned absolute and giving zero to top,left,bottom,right to div with classname women*/}
        <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-50 transition duration-75 hover:bg-transparent'></div>
          <img className='absolute top-0 left-0 w-full h-full object-cover object-center duration-[0.5s]' src={img1} alt="" />
          <a href="#" className='relative no-underline text-white uppercase text-[3em] font-light mt-[35%] z-[1000] duration-[0.5s] scale-100 hover:scale-125'>Women</a> 
        </div>
        <div className='men absolute top-0 left-[30%] h-full w-2/5 transition duration-100 flex justify-center items-center '>
        <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-50 transition duration-75 hover:bg-transparent'></div>
          <img className='absolute top-0 left-0 w-full h-full object-cover object-center duration-[0.5s]' src={img2} alt="" />
          <a href="#" className='relative no-underline text-white uppercase text-[3em] font-light mt-[35%] z-[1000] duration-[0.5s] scale-100 hover:scale-125 '>Men</a>
        </div>
        <div className='special  absolute top-0 left-[60%] h-full w-2/5 transition duration-100 flex justify-center items-center '>
        <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-50 transition duration-75 hover:bg-transparent'></div>
          <img className='absolute top-0 left-0 w-full h-full object-cover object-center duration-[0.5s]' src={img3} alt="" />
          <a href="#" className='relative no-underline text-white uppercase text-[3em] font-light mt-[35%] z-[1000] duration-[0.5s] scale-100 hover:scale-125 '>Special</a>
        </div>
   
      </div>
    
      

  )
}

export default Herobanner