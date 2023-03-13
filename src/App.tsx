import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> ,
    },
  ]); 

  return (
    <div className='bg-[#f2f3f7]'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
