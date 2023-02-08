import React, { useEffect, useState } from 'react'

export default function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const auth = getAuth()
    })
  return (
    <div>useAuthStatus</div>
  )
}

