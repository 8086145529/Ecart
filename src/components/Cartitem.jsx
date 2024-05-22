import React, { useContext } from 'react'
// import Link
import { Link } from 'react-router-dom'
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';


function Cartitem({ item}) {
    // destructure item 
    const { id, title, image, price, amount } = item || {}
    console.log(item);
    const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext)

    return (
        item && (
            <div key={id} className=' w-full flex  gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light text-gray-500'>
            <div className='w-full min-h-[160px] flex items-center gap-x-4'>
                {/* image */}
                <Link to={`/product/${id}`}>
                    <img className='max-w-[80px]' src={image} alt="" />
                </Link>
                <div className='w-full flex flex-col'>
                    {/* title & remove icon */}
                    <div className='flex justify-between mb-2'>
                        {/* title */}
                        <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-black hover:underline'>
                            {title}
                        </Link>
                        {/* remove icon */}
                        <div className='text-xl cursor-pointer'>
                            <IoMdClose onClick={()=>removeFromCart(id)} className='text-gray-500 hover:text-red-500 transition'/>
                        </div>
                    </div>
                    <div className='flex gap-x-[1rem] h-[36px] text-sm '>
                        {/* quantity factors */}
                        <div className='flex flex-1 max-w-[100px] justify-start items-center h-full border text-black font-medium'>
                         {/* minus icon */}
                         <div onClick={()=>decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                         <IoMdRemove/>
                         </div>
                          {/* amount */}
                          <div className='px-2'>
                            {amount}
                          </div>
                          {/* plus icon */}
                          <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                            <IoMdAdd/>
                          </div>
                        </div>
                        {/* item price */}
                        <div className='flex-1 flex justify-around items-center '>
                            ${price}
                        </div>
                        {/* final price */}
                        {/* Make the price at 2 decimals */}
                        <div  className='flex-1 flex justify-end items-center font-medium'>
                            {`$${parseFloat(price * amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            )
       


    )
}

export default Cartitem