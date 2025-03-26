import React, { use } from 'react'
import {useParams,useNavigate, useLoaderData,useNavigation} from 'react-router-dom'
import axios from 'axios'

export const productLoader = async ({params}) => {
    const response = await 
    axios.get(`https://www.dummyjson.com/products/${params.productId}`)
    return response.data
}

// Retrieve route params as props
const Product = () => {


    // Object destructuring
    const {productId} = useParams()
    const navigate  = useNavigate()
    const result = useLoaderData()
    const navigation = useNavigation()

    if (productId > 194){
        throw new Error('Product not found')
    }
    if (navigation.state === 'loading'){
        return <div>Loading...</div>
    }

    const navigateHome = () => {
        // Navigate to Home Page
        navigate('/')
    }
  return (
    <div>
       <h1> Product Page for id {productId} </h1>
         <h2>{result.title}</h2>
            <p>{result.description}</p>
            <img src={result.thumbnail} alt={result.title} />
            <p>{result.price} - {result.category}</p>
        <button onClick={navigateHome}>Navigate Home</button>
        
        </div>
  )
}

export default Product