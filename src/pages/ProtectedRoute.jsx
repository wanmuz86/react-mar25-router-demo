import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Block or access user based on the token
const ProtectedRoute = () => {
    const navigate = useNavigate()
    const localStorage = localStorage.getItem('token')
    return localStorage ? <Outlet/> : navigate('/')
 
}

export default ProtectedRoute