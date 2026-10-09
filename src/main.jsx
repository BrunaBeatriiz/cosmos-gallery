import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Explore from './explore.jsx'
import Dashboard from './Dashboard.jsx'
import MostrarMais from './MostarMais.jsx'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    }, {
      path: '/explore',
      element: <Explore />
    }, {
      path: '/mostrarMais',
      element: <MostrarMais />
    }
  ])
 return <RouterProvider router={router}/>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
  </StrictMode>,
)
