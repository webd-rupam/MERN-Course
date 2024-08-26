import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// we use React Router beacuse in tradition anchor tags the site gets reload. 
// But to avoid the page getting reloaded as well as going to another page, we use react router

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />

    </>
  )
}

export default App
