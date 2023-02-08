import React, { useState } from 'react'

export default function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    
  return (
    <div>useAuthStatus</div>
  )
}

