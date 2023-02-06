import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { BsApple } from 'react-icons/bs'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function OtherFormOfAuth() {
  async function onGoogleClick (){
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const result = await si
  }
  return (
    <div className="flex space-x-4 mb-4">
        <button>
        <BsApple className="text-xl" />
        </button>
          <button>
          <AiFillFacebook className="text-blue-800 text-xl" />
          </button>
          <button>
          <FcGoogle className="text-xl" />
          </button>
          
        </div>
  )
}
