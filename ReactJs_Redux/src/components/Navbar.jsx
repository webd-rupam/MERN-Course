import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// const Navbar = ({count}) => {
const Navbar = () => {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      im a navbar & Count is {count}
    </div>
  )
}

export default Navbar
