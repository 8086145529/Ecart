import React, { createContext, useState } from 'react'

export const SidebarContext = createContext()
function SidebarProvider({children}) {
  // sidebar controlling state
  const [isOpen,setIsOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{isOpen,setIsOpen}}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider