import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let a = 0;

  // // the value of a is going 2 and then again becoming 1 and not increasing beacuse of rerendering the variable is unable to retain the current value
  // useEffect(() => {
  //   a=a+1;
  //   console.log(`Rerendering... and the value of a is ${a}`)
  // })
  

  // 1st use of useRef
  // to retain the current value of a variable even after getting re rendered, use use useRef in react

  const a = useRef(0)

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rerendering... and the value of a is ${a.current}`)
  })


  // 2nd use of useRef
  // to access any DOM element anyway and anywhere

  const btnRef = useRef()

  useEffect(() => {
    console.log(`First Rendering`)

    btnRef.current.style.backgroundColor = "red"
  }, [])
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        {/* using ref to access this dom element in useRef case 2 */}
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>

          count is {count}
        </button>

        <button onClick={()=> {btnRef.current.style.display = "none"}}>Vanish the Count button</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
