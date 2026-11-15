import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider, Routes } from 'react-router-dom'
import './styles.css'
import {Offres} from './pages/Offres.jsx'

const route = createBrowserRouter(
  [
    {
      path:'/',
      element:<Offres/>

    },
  ]
  
)

createRoot(document.getElementById('root')).render(
   <StrictMode>
     <RouterProvider router={route}/>
   </StrictMode>
)

