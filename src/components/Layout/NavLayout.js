import React from 'react'
import Navbar from '../NavBar/Navbar'

const NavLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}

      </div>
    </div>
  )
}

export default NavLayout