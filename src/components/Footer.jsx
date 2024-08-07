import React, { useEffect, useState } from 'react'

function Footer() {

      // event listener
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsScrollBotttom(true) : setIsScrollBotttom(false)
    })
  })
    const [isScrollBotttom,setIsScrollBotttom] = useState(false);

    return (
        <footer className='bg-black body-font'>
            <div className="container px-5 py-8 pb-0 mx-auto xs:mt-36 md:mt-0">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">RESOURCES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Application</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Documentation</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Systems</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">FAQ</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">PRICING</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Overview</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Premium Plans</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Programs</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Press</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">SOCIAL</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Facebook</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Twitter</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">Instagram</a>
                            </li>
                            <li>
                                <a href='/' className="text-white hover:text-gray-400">LinkedIn</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label for="footer-field" className="leading-7 text-sm text-white">Placeholder</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                            <br className="lg:block hidden" />waistcoat green juice
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer

