import React, {useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() =>{
        console.log(searchParams.get('category'))
        console.log(searchParams.get('lang'))
    },[])
  return (
    <div>ProductList</div>
  )
}

export default ProductList