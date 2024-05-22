import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { HeaderContext } from '../contexts/HeaderContext';

function ProductDetails() {
  // get the product id from the url
  const {id} = useParams()
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext)
  const {setIsProductPage} = useContext(HeaderContext)
  const [isScrollBottom,setIsScrollBottom] = useState(false);
  const [isScrollBtm,setIsScrollBtm] = useState(false);

  // //
  // const [scrollBotttom, setscrollBotttom] = useState(0);
  // const [marginTop, setMarginTop] = useState('100px'); // Initial margin top value
  // //
  //   //
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const newscrollBotttom = window.scrollY;
  //       setscrollBotttom(newscrollBotttom);
  
  //       // Define the margin reduction logic based on your requirements
  //       const newMarginTop = newscrollBotttom === 0 ? '50px' : '100px'; // Adjust these values as needed
  //       setMarginTop(newMarginTop);
  //     };
  
  //     window.addEventListener('scroll', handleScroll);
  
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);
  //   //

  
  //  event listener
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsScrollBottom(true) : setIsScrollBottom(false)
    })
  })
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsScrollBtm(true) : setIsScrollBtm(false)
    })
  })

  useEffect(()=>{
    // Update context to indicate that it's a product page
    setIsProductPage(true)
  
    // Cleanup: Reset the context when component unmounts
    return () => {
      setIsProductPage(false);
    }
   },[setIsProductPage])

   useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // get the single product based on the id
  const product = products.find(item => {
    return item.id === parseInt(id);//The parameters retrieved from the URL using useParams are always returned as strings. Even if the parameter in the URL is intended to represent a number, it will still be returned as a string by useParams.If you need the parameter as a number, you can convert it explicitly using JavaScript methods like parseInt() or parseFloat():
  })

  // if product is not found
  if(!product){
    return <section className="h-screen flex justify-center items-center font-bold">
      Loading...
    </section>
  }
 
  // destructure product
  const {title,price,description,image} = product


 

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center '>
      {/* <div className='container  mt-44 -mb-16 mx-auto xl:px-32 scale-100'> */}
      <div  className={`${isScrollBottom?'container xl:pt-20 xl:mt-40 mx-auto xl:px-32':'container pt-0 mt-0 mx-auto xl:px-32'} transition-all duration-75 xs:scale-90`}>

        {/* image & text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
        {/* image */}
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
        <img className='max-w-[200px] lg:max-w-[280px] lg:max-h-[400px] ' src={image} alt="" />
        </div>
        {/* text */}
        <div className='flex-1 text-center lg:text-left'>
         <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
        <div className='text-xl text-red-500 font-medium mb-6'>
          $ {price}
        </div>
        <p className='mb-8 text-lg'>{description} </p>
        <button onClick={()=> addToCart(product,id)} className='bg-black py-4 px-8 text-white xs:-mt-10 '>
        Add to cart
        </button>
        </div>
        </div>
      </div>
      
    </section>
  )
}

export default ProductDetails



// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { CartContext } from '../contexts/CartContext';
// import { ProductContext } from '../contexts/ProductContext';
// import { HeaderContext } from '../contexts/HeaderContext';

// function ProductDetails() {
//   // get the product id from the url
//   const {id} = useParams()
//   const {products} = useContext(ProductContext);
//   const {addToCart} = useContext(CartContext)
//   const {setIsProductPage} = useContext(HeaderContext)
//   const [isScrollBottom,setIsScrollBottom] = useState(false);
//   const [isScrollBtm,setIsScrollBtm] = useState(false);

//   // //
//   // const [scrollBotttom, setscrollBotttom] = useState(0);
//   // const [marginTop, setMarginTop] = useState('100px'); // Initial margin top value
//   // //
//   //   //
//   //   useEffect(() => {
//   //     const handleScroll = () => {
//   //       const newscrollBotttom = window.scrollY;
//   //       setscrollBotttom(newscrollBotttom);
  
//   //       // Define the margin reduction logic based on your requirements
//   //       const newMarginTop = newscrollBotttom === 0 ? '50px' : '100px'; // Adjust these values as needed
//   //       setMarginTop(newMarginTop);
//   //     };
  
//   //     window.addEventListener('scroll', handleScroll);
  
//   //     return () => {
//   //       window.removeEventListener('scroll', handleScroll);
//   //     };
//   //   }, []);
//   //   //

  
//   //  event listener
//   useEffect(()=>{
//     window.addEventListener('scroll',()=>{
//       window.scrollY > 60 ? setIsScrollBottom(true) : setIsScrollBottom(false)
//     })
//   })
//   useEffect(()=>{
//     window.addEventListener('scroll',()=>{
//       window.scrollY > 60 ? setIsScrollBtm(true) : setIsScrollBtm(false)
//     })
//   })

//   useEffect(()=>{
//     // Update context to indicate that it's a product page
//     setIsProductPage(true)
  
//     // Cleanup: Reset the context when component unmounts
//     return () => {
//       setIsProductPage(false);
//     }
//    },[setIsProductPage])

//    useEffect(() => {
//     // Scroll to the top of the page when the component mounts
//     window.scrollTo(0, 0);
//   }, []);

//   // get the single product based on the id
//   const product = products.find(item => {
//     return item.id === parseInt(id);//The parameters retrieved from the URL using useParams are always returned as strings. Even if the parameter in the URL is intended to represent a number, it will still be returned as a string by useParams.If you need the parameter as a number, you can convert it explicitly using JavaScript methods like parseInt() or parseFloat():
//   })

//   // if product is not found
//   if(!product){
//     return <section className="h-screen flex justify-center items-center font-bold">
//       Loading...
//     </section>
//   }
 
//   // destructure product
//   const {title,price,description,image} = product


 

//   return (
//     <section className='pt-32 pb-12  lg:py-32 h-screen flex items-center'>
//       {/* <div className='container  mt-44 -mb-16 mx-auto xl:px-32 scale-100'> */}
//       <div  className={`${isScrollBottom?'container pt-20 mt-40 mx-auto xl:px-32':'container pt-0 mt-0 mx-auto xl:px-32'} transition-all duration-75`}>

//         {/* image & text wrapper */}
//         <div className='flex flex-col lg:flex-row items-center'>
//         {/* image */}
//         <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
//         <img className='max-w-[200px] lg:max-w-[280px] lg:max-h-[400px] ' src={image} alt="" />
//         </div>
//         {/* text */}
//         <div className='flex-1 text-center lg:text-left'>
//          <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
//         <div className='text-xl text-red-500 font-medium mb-6'>
//           $ {price}
//         </div>
//         <p className='mb-8'>{description} </p>
//         <button onClick={()=> addToCart(product,id)} className='bg-black py-4 px-8 text-white'>
//         Add to cart
//         </button>
//         </div>
//         </div>
//       </div>
      
//     </section>
//   )
// }

// export default ProductDetails