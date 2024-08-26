import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
   alert("Colour was changed")
  }, [color])
  
  return (
    <div>
      im a navbar of {color} colour
    </div>
  )
}

export default Navbar
