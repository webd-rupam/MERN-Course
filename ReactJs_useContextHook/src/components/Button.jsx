import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { counterContext } from '../context/context'

// const Button = ({count}) => {
const Button = () => {
  const value = useContext(counterContext)

  return (
    <div>
      {/* <button><span><Component1 count={count}/></span>Im a button</button> */}

      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1/></span>Im a button</button>
    </div>
  )
}

export default Button
