import React, { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [menuIsOpen, _setMenuIsOpen] = useState(false)


  const setMenuIsOpen = (val) => {
    if (val) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    _setMenuIsOpen(val)
  }

  const value = {menuIsOpen, setMenuIsOpen}

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
