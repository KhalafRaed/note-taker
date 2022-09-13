import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'services/cookies'
import isEmpty from 'lodash/isEmpty'

const ProtectedRoute: React.FC<{ children: any }> = ({ children }) => {
  const token = Cookies.get('token')
  return isEmpty(token) ? children : <Navigate to="/login" />
}

export default ProtectedRoute
