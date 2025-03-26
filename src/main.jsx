import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductList,{loaders} from './pages/ProductList' // {}-> import the named export
import Product, {productLoader} from './pages/Product' 
import ErrorPage from './pages/ErrorPage'
import ProductErrorPage from './pages/ProductErrorPage.jsx'
import AddProduct from './pages/AddProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>, // Follows App Layout/Template
    errorElement:<ErrorPage/>,
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
        element:<ProductList/>,
        loader:loaders
      },
      {
        path:'/products/:productId',
        element:<Product/>,
        errorElement:<ProductErrorPage/>,
        loader:productLoader
      },
      {
        path:'/add-product',
        element:<AddProduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
