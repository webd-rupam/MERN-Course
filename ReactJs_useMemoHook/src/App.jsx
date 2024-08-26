import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_, i)=> {
return {
  index: i,
  isMagical: i===29_000_000
}
})

function App() {
  const [count, setCount] = useState(0)

  const [numbers, setnumbers] = useState(nums)

  // by this computation, as the array is very complicated, long and heave due to rerendering of the count of the useState when we click that, the app will become very laggy.
  // const magical =numbers.find(item=>item.isMagical===true) //expensive computation

  // and to prevent it we use useMemo
  // to memoise the computation and save it, and not to perform computation again and again during each rerendering

                                                                            // will only compute once again when numbers are changed or else not
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])

  return (
    <>
      <div>
        <span>Magical Number is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1)
          if(count == 10) {
            setnumbers(new Array(30_000_000).fill(0).map((_, i)=> {
              return {
                index: i,
                isMagical: i===29_000_000
              }
              }))
          }
        }}>
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
