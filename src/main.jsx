import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductList from './pages/ProductList'
import Product from './pages/Product' 

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>, // Follows App Layout/Template
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/products',
        element:<ProductList/>
      },
      {
        path:'/products/:productId',
        element:<Product/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
