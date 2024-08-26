import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Hooks are the functions which let us use different React features from our components
//  State is an object that holds information that may change over the lifetime of the component. The count count variable is the state which holds data

function App() {               
//       state                hook
  const [count, setCount] = useState(0)

  // if we use this instead of setcount then the value will not get updated in react
let a = 100;
  return (
    <>
    <div>The count is {count}</div>
    <button onClick={()=> {setCount(count+1)}}>Click</button>
    </>
  )
}

export default App
