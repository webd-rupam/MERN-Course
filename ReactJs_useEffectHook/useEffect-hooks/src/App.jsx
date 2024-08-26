import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

// useEffect Hooks are used to trigger any change in the website, that what to do when a change has happened in the website


function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  // will run on every chnage ie, run on every render
  useEffect(() => {
    alert("Run on every render)")
  })

  // triggered when website is reloaded and change happened because of that
  useEffect(() => {
    alert("Welcome, Comrade ;)")
  }, [])

// triggered when the value of count is changed
  useEffect(() => {
    alert("Count Changed")
    setColor(color+1)
  }, [count])

  // if a component is removed then what will be shown
  useEffect(() => {
    alert("Count Changed")
    setColor(color+1)
    return()=> {
      alert("no count")
    }
  }, [])


  return (
    <>
    <Navbar color={"cyan" + color}/>

    
    {/* if navbar is removed then return will work */}
    {/* <Navbar color={"cyan" + color}/> */}
    
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
