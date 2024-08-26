import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'


function App() {
  // const [count, setCount] = useState(0)

  // its saying that bring count from the redux store and display it
  const count = useSelector((state) => state.counter.value)

  // to use dispatch hook in redux
  const dispatch = useDispatch()


  return (
    <>
      {/*without using redux we used a state by sending as a prop*/}
      {/* <Navbar count={count}/> */}

      <Navbar />

      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Current count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

    </>
  )
}

export default App
