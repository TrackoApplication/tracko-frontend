import React from 'react'
import Navbar from '../NavBar/Navbar'

const NavLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      
    </div>
  )
}

export default NavLayout