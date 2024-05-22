import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { IoMdArrowRoundForward } from "react-icons/io";
import { CartContext } from '../contexts/CartContext';
import Cartitem from './Cartitem'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Sidebar() {
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  const {cart,emptyCart,totalPrice,totalNum} = useContext(CartContext) 
  return (
    <div className={`${isOpen?'right-0 z-30':'-right-full'} h-full w-full top-0 fixed md:w-[43vw]  xl:max-w-[30vw] px-4 lg:px-[35px]  bg-white shadow-2xl transition-all duration-500 `} >
     <div className='flex justify-between items-center border-b py-4'>
        <div className='uppercase font-semibold text-sm'>Shopping Bag ({totalNum})</div>
        <div onClick={()=>setIsOpen(false)} className='cursor-pointer w-8 h-8 flex justify-center items-center '>
          <IoMdArrowRoundForward className='text-2xl'/>
        </div>
     </div>
     <div className='flex flex-col gap-y-2 h-[520px] md:h-[420px] lg:h-[420px]  overflow-y-auto overflow-x-hidden border-b'>
      {cart?.map((item)=>{
         return <Cartitem item={item} key={item?.id}/>
      })}
     </div>
<div className=' flex flex-col gap-y-3 py-4 mt-4 '>
       <div className="flex w-full pb-2 items-center justify-between">
        {/* total */}
        <div className='uppercase font-semibold '>
          <span className="mr-2">Total:</span>
          ${parseFloat(totalPrice).toFixed(2)}
        </div>
        {/* clear cart icon */}
        <div onClick={emptyCart} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
        <FaTrashAlt />
        </div>
       </div>
       <Link to={'/'} className='flex justify-center items-center p-4 bg-gray-200 text-black w-full font-medium '>
       View Cart
       </Link>
       <Link to={'/'} className='flex justify-center items-center p-4 bg-black text-white w-full font-medium'>
       Checkout
       </Link>

</div>
<div>
</div>
    </div>
  )
}

export default Sidebar