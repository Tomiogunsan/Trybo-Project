import React from 'react'
import {outlet, Navigate} from 'react-router-dom'
import useAuthStatus from '../hooks/useAuthStatus'

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus()
    if(checkingStatus){}
  return (
    <div>PrivateRoute</div>
  )
}
