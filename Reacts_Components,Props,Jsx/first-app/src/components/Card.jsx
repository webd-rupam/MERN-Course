import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card' style={{overflow:'hidden'}}>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" width={50} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
