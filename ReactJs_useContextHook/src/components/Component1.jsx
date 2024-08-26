import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

// const Component1 = ({ count }) => {
const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
      {/* {count} */}

      {value.count}


    </div>
  )
}

export default Component1
