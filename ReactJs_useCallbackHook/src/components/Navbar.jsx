import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      Im a {adjective} Navbar

      <button onClick={()=> {getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default  memo(Navbar)
