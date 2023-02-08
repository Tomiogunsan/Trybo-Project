import React from 'react'
import {outlet, Navigate} from 'react-router-dom'
import useAuthStatus from '../hooks/useAuthStatus'

export default function PrivateRoute() {
    const {loggedIn, loading} = useAuthStatus()
  return (
    <div>PrivateRoute</div>
  )
}
