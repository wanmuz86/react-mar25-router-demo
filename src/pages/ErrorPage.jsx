import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    // This is a custom hook that returns the error object from the route , 
    // 404,403,500 etc
    const error = useRouteError();
  return (
    <div>
        <h1>Error Page</h1>
        <p>Something is wrong</p>
        <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage