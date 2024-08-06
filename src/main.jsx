import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let data = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={data}>
    <App/>
  </RouterProvider>
)
