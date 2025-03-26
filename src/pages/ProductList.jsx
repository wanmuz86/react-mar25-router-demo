import React, {useEffect} from 'react'
import {Link, useLoaderData, useNavigation, useSearchParams} from 'react-router-dom'

import axios from 'axios'

// loaders function that will fetch the data from the API and return the data
export const loaders = async () => {
    const response = await axios.get('https://www.dummyjson.com/products')
    return response.data.products
}

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const results = useLoaderData() // To retrieve the data from the API (loaders)
    const navigation = useNavigation() // To get the the navigation object and state

    useEffect(() =>{
        console.log(searchParams.get('category'))
        console.log(searchParams.get('lang'))
    },[])

    if (navigation.state === 'loading'){
        return <div>Loading...</div>
    }
  return (
    <div>
        <ul>
            {
            results.map((product)=>
            <li>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
            )
            }
        </ul>
    </div>
  )
}

export default ProductList