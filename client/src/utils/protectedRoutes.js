import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes() {
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    user ? <Outlet/> : <Navigate to='/' />
  )
}

export default ProtectedRoutes