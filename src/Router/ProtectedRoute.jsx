import React from 'react'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const [cookies] =useCookies (["accesstoken"])

  return cookies.accesstoken ? children: <Navigate to="/login" replace />
}

export default ProtectedRoute;