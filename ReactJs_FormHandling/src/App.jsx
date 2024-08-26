import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// using React-Hook form Library, and referring to reactct hook form website

import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,            
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

const delay = (d)=> {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve()
    }, d * 1000);
  })
}

  const onSubmit = async (data) => {
    // await delay(4)

    // now connecting to backend
    let r= await fetch("http://localhost:3000/", {method: "POST", headers: {
      "Content-Type": "application/json",
    }, body: JSON.stringify(data)})
    let res = await r.text()

    console.log(data, res)

    // if(data.username !== "shubham") {
    //   setError("myform", {message: "Username or Password is incorrect"})
    // }

    // if(data.username === "kirmada") {
    //   setError("blocked", {message: "You are blocked"})
    // }
  }

  

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
     <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='username' {...register("username", {required: {value: true, message:"Cannot leave this field empty"}, minLength: {value:3, message: "Minimum length should be 3"}, maxLength: {value: 10, message: "Maximum length should be 10"}})} type="text"/>
      {/* {errors.username && <div className="red">There is some error in Username</div>} */}
      {errors.username && <div className="red">{errors.username.message}</div>}
      
      <br />
      <input placeholder='password' {...register("password",{required: {value: true, message:"Cannot leave this field empty"}, minLength: {value: 8, message: "Minimum length should be 8"}})} type="password"/>
      {errors.password && <div className="red">{errors.password.message}</div>}
      <br />
      <input disabled={isSubmitting} type="submit" value="Submit"/>
      {errors.myform && <div className="red">{errors.myform.message}</div>}
      {errors.blocked && <div className="red">{errors.blocked.message}</div>}
      </form>
     </div>
     </>
     )
     }

     export default App
  

