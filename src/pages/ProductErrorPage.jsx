import React from 'react'
import {useRouteError} from 'react-router-dom'
const ProductErrorPage = () => {
      // This is a custom hook that returns the error object from the route , 
    // 404,403,500 etc
    const error = useRouteError();
  return (
    <div>
        <h1>Product Error Page</h1>
        <p>Something is wrong while fetching the product</p>
        <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ProductErrorPage