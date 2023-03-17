import React from 'react'
import { FcGoogle } from 'react-icons/fc'

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { db } from '../firebase'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function OtherFormOfAuth() {
  const navigate = useNavigate()
  async function onGoogleClick() {
    try {
      const auth = getAuth()
      // console.log(auth);
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      // console.log(result)
      const user = result.user

      // check for user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
    } catch (error) {
      toast.error('Could not authorize with Google')
    }
  }

  return (
    <button onClick={onGoogleClick} type="button" >
      <FcGoogle className="text-2xl p" />
    </button>
  )
}
