import React from 'react'
import {outlet, Navigate} from 'react-router-dom'

export default function PrivateRoute() {
    const {loggedIn, loading} = use
  return (
    <div>PrivateRoute</div>
  )
}
