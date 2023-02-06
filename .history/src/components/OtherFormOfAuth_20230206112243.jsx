import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { BsApple } from 'react-icons/bs'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth"

export default function OtherFormOfAuth() {
  const navigate = useNavigate()
  async function onGoogleClick (){
   try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user
   
    // check for user
    const docRef = doc(db, 'users', user.uid)
    const docSnap = await getDoc(docRef);

    if(!docSnap.exists()){
      await setDoc(docRef,{
        name: user.displayName,
        email: user.email,
        timestamp: serverTimestamp(),
      })
    }
    navigate('/')
   } catch (error) {
    toast.error('Could not authorize with Google');
   }
    

  }

  async function onFacebookClick(){
    const auth = getAuth()
    const provider = new FacebookAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
  }
  return (
    <div className="flex space-x-4 mb-4">
        {/* <button>
        <BsApple className="text-xl" />
        </button> */}
          <button onClick={onFca}>
          <AiFillFacebook className="text-blue-800 text-xl" />
          </button>
          <button onClick={onGoogleClick}>
          <FcGoogle className="text-xl" />
          </button>
          
        </div>
  )
}
