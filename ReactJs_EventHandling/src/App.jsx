import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // 1
  // const [name, setname] = useState("Ben")

  // 2
  const [form, setform] = useState({email: "", phone: ""})

  const handleClick = ()=> {
    alert("Im clicked")
  }

  const handleMouseOver = ()=> {
    alert("Im a mouseOver")
  }

  const handleChange = (e)=> {
    // 1
    // setname(e.target.value)

    // 2
    setform({...form, [e.target.name]:e.target.value})
    console.log(form)
  }
  
  return (
    <>
     <div className="button">
      <button onClick={handleClick}>Click</button>
     </div>

     <div className="red" onMouseOver={handleMouseOver}>
      Im Red div
     </div>

{/* 1 */}
     {/* <input type="text" value={name} /> */}


     {/* 2 */}
     <input type="text" name="email" value={form.email} onChange={handleChange} />
     <input type="text" name="phone" value={form.phone} onChange={handleChange} />
    </>
  )
}

export default App
