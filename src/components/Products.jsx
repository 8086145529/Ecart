import React, { useState } from 'react'

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
                <div className="flex flex-wrap -m-4">
                    
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
                            if (searchTerm == "") {
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
                                <div key={id} className="lg:w-1/4 md:w-1/2 p-4 w-96 rounded-md mx-auto sm:w-full border border-gray-200  shadow-md mb-4">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt={title} className="object-contain object-center  w-full h-full block" src={image} />
                                    </a>
                                    <div className="mt-4 ">
                                        <h3 className="text-gray-500 text-lg uppercase tracking-widest title-font mb-1">{category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
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