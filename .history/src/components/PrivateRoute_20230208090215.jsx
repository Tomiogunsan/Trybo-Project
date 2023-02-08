import React from 'react'
import {outlet, Navigate} from 'react-router-dom'

export default function PrivateRoute() {
    const {loggedIn, loading} = useAuth
  return (
    <div>PrivateRoute</div>
  )
}
