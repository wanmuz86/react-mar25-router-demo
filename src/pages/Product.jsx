import React from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {
    
    // Object destructuring
    const {productId} = useParams()

  return (
    <div>Product Page for id {productId} </div>
  )
}

export default Product