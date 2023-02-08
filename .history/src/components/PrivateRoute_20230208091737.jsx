import React from 'react'
import {outlet, Navigate} from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from '../components/Spinner'

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus()
    if(checkingStatus){
        return <Spinner />
    }
  return (
    <loggedIn</div>
  )
}
