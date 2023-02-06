import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { BsApple } from 'react-icons/bs'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';

export default function OtherFormOfAuth() {
  const navigate = useNavigate()
  async function onGoogleClick (){
   try {
    
   } catch (error) {
    
   }
    

  }
  return (
    <div className="flex space-x-4 mb-4">
        <button>
        <BsApple className="text-xl" />
        </button>
          <button>
          <AiFillFacebook className="text-blue-800 text-xl" />
          </button>
          <button onClick={onGoogleClick}>
          <FcGoogle className="text-xl" />
          </button>
          
        </div>
  )
}
