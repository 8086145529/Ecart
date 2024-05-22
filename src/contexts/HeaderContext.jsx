import React, { createContext, useState } from 'react'
export const HeaderContext = createContext()

function HeaderProvider({children}) {
    const [isProductPage,setIsProductPage] = useState(false)
    
  return (
    <HeaderContext.Provider value={{isProductPage,setIsProductPage}}>
        {children}
    </HeaderContext.Provider>
    
  )
}

export default HeaderProvider