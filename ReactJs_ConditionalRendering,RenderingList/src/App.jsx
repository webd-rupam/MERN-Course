import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showbtn, setshowbtn] = useState(false)

  const [todos, settodos] = useState([
  {
    title: "Hey",
    desc:"Todo 1"
  },
  {
    title: "oyee",
    desc:"Todo 2"
  },
  {
    title: "yo",
    desc:"Todo 3"
  },
 ])

  // const Todo = ({todo}) => {
  //   return (
  //     <>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>

  //     </>
  //   )
  // }

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

      {/* conditional rendering */}
      {/* render things as per conditions ie, if else */}
      {showbtn?<button>Showbtn is true</button>: <button>Showbtn is false</button>}
      {/* another way of doing this */}

      {/* {showbtn && <button>Showbtn is true</button>} */}


      {/* list rendering */}
      {/* to render a list of things */}
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>

        // or we can directly use without creating a component
        return <div key={todo.title}>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
        </div> 

      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
         Click to open or close the first button
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
