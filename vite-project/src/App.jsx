import React from 'react';
import Navbar from "./assets/components/Navbar"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hook from "./assets/components/Hook";

function App  ()  {
  const router = createBrowserRouter([
    {
      path:'/',
      element :<><Navbar /><Hook /></>
    },
  ])

  return (
    <>

    <RouterProvider router = {router}/></>
  )
}

export default App
