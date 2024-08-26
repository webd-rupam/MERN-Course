import React from 'react'

// use links instead of anchor tag
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

  return (
    <div>
      <nav>
        <ul>
          {/* <a href="/"><li>Home</li></a>
            <a href="/"><li>About</li></a>
            <a href="/"><li>Contact</li></a> */}

          <NavLink className={(e)=> {return e.isActive?"red": ""}} to="/"><li>Home</li></NavLink>
          <NavLink className={(e)=> {return e.isActive?"red": ""}} to="/about"><li>About</li></NavLink>
          <NavLink className={(e)=> {return e.isActive?"red": ""}} to="/login"><li>Login</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
