import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const Product = () => {
    
    // Object destructuring
    const {productId} = useParams()
    const navigate  = useNavigate()

    if (productId > 194){
        throw new Error('Product not found')
    }

    const navigateHome = () => {
        // Navigate to Home Page
        navigate('/')
    }
  return (
    <div>
       <h1> Product Page for id {productId} </h1>
       <button onClick={navigateHome}>Navigate Home</button>
        
        </div>
  )
}

export default Product