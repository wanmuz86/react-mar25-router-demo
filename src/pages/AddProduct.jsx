import React from 'react'
import { Form } from 'react-router-dom'
const AddProduct = () => {
  return (
    <div>
        <Form action="/add-product" method="POST">
            <input type="text" id="title" name="title" placeholder='Enter product name'/>
            <input type="text" id="description" name="description" placeholder='Enter product description'/>
            <input type="number" id="price" name="price" placeholder='Enter product price'/>
            <input type="text" id="category" name="category" placeholder='Enter product category'/>
            <button>Add new item</button>
        </Form>
    </div>
  )
}

export default AddProduct