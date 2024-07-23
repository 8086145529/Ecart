import React, { useContext, useState } from 'react'
import { BsCartPlus } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

// Destructuring the products key gets from Home page
function Products({ products }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchType, setSearchType] = useState("name")

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSearchType(e.target.value);
    };

    const parsePrice = (priceString) => {
        // Remove non-numeric characters and parse the string to a float
        return parseFloat(priceString.replace(/[^0-9.]/g, ''));

    };

    const {cart,setCart,addToCart} = useContext(CartContext)
    return (



        <section className="text-gray-600 body-font">
            <div className="flex flex-col max-w-7xl justify-center items-center p-2 mt-10 lg:ml-32">
                <div className="flex flex-col w-[90%] md:w-3/4  text-center items-center justify-center space-y-3">
                    <div className="md:text-4xl text-2xl lg:mx-20 font-semibold  text-gray-400 ">
                        Discover More, Shop More: Your Gateway to Limitless Selections
                    </div>
                </div>
            </div>


            <div className="container px-5 py-24 mx-auto">
                <div className=" flex flex-wrap ">
                    
                    {/* Search box  */}
                    <div className="flex justify-center w-full mb-16 -mt-8">
                        <input
                            type={searchType === 'price' ? 'number' : 'text'}
                            placeholder={`Search ${searchType === 'name' ? 'Product Name/Category' : 'by Price'}`}
                            className="w-64 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={handleInputChange}
                        />
                        <select
                            className="w-6 py-2 bg-blue-300 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={searchType}
                            onChange={handleSelectChange}
                        >
                            <option value="name">Search product name or category</option>
                            <option value="price">Search by Price</option>
                        </select>
                    </div>


                    {
                        products.filter((product) => {
                            if (searchTerm === "") {
                                return product
                            } else {
                                if (searchType === "name") {
                                    const term = searchTerm.toLowerCase();
                                    return (
                                        product.title.toLowerCase().includes(term) ||
                                        product.category.toLowerCase().includes(term)
                                    )
                                } else if (searchType === "price") {
                                    // Parse the user input price to a float
                                    const price = parseFloat(searchTerm);

                                    // Compare the parsed user input price with the product price
                                    return product.price === price;
                                }

                            }
                        }).map((product) => {
                            const { id, title, price, category, image } = product;
                            return (
                                <div key={id} className="group relative lg:w-1/4 md:w-1/2 p-4 w-96 rounded-md mx-auto sm:w-full border border-gray-200 shadow-md mb-4  ">
                                    {/* buttons */}
                                    <div className= ' z-10 opacity-0 group-hover:opacity-100 group-hover:right-5 transition-all duration-300 absolute top-0 -right-2 p-2 flex flex-col justify-center items-center gap-y-2  '>
                                        
                                            <button onClick={()=>addToCart(product,id)} className=' bg-red-500 text-white text-[1.5rem] w-10 h-10 flex justify-center items-center'>
                                            <div ><BsCartPlus /></div>
                                            </button>

                                            <Link to={`/product/${id}`}  className=' bg-white drop-shadow-md text-[1.7rem] w-10 h-10 flex justify-center items-center'>
                                            <GrFormView />
                                            </Link>

                                    </div>
                                    <a href= {`/product/${id}`} className="block relative h-48 rounded overflow-hidden">
                                        <img alt={title} className="scale-90 group-hover:scale-100 transition duration-700 object-contain object-center  w-full h-full block" src={image} />
                                    </a>
                                    <div className="mt-4 ">
                                        <h3 className="text-gray-500 text-lg uppercase tracking-widest title-font mb-1">{category}</h3>
                                        <Link to={`/product/${id}`}><h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2></Link>
                                        <p className="mt-1">${price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Products 