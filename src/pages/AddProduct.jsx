import React from 'react'
import { Form, redirect } from 'react-router-dom'
import axios from 'axios'

export const createProduct = async ({request}) => {
    const data = await request.formData()
    const submissionData = {
        // Retrieving the data from the form (through the name attribute) - data.get
        // And create in an object
        title: data.get('title'),
        description: data.get('description'),
        price: data.get('price'),
        category: data.get('category')
    }

    // POST request to the API
    const response = await axios.post('https://dummyjson.com/products/add', submissionData)
    if (response.status !== 201){
        throw new Error('Failed to create product')
    }
    // If you are calling from react-router-dom, you can use the redirect function
    // If you call from browser action, eg button click use useNavigate
    console.log(response.data)
    return redirect('/products')

}
const AddProduct = () => {
  return (
    <div>
        <Form action="/add-product" method="POST">
            <input type="text" id="title" name="title"
             placeholder='Enter product name'/>
            <input type="text" id="description" name="description"
             placeholder='Enter product description'/>
            <input type="number" id="price" name="price" 
            placeholder='Enter product price'/>
            <input type="text" id="category" name="category" 
            placeholder='Enter product category'/>
            <button>Add new item</button>
        </Form>
    </div>
  )
}

export default AddProduct