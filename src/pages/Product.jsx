import React from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {
    
    // Object destructuring
    const {productId} = useParams()
    if (productId > 194){
        throw new Error('Product not found')
    }
  return (
    <div>Product Page for id {productId} </div>
  )
}

export default Product