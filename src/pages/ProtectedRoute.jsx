import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Block or access user based on the token
const ProtectedRoute = () => {
    // const navigate = useNavigate()
    const localStorage = window.localStorage.getItem('token')
    return localStorage ? <Outlet/> : <Navigate to="/" replace="/"/>
 
}

export default ProtectedRoute