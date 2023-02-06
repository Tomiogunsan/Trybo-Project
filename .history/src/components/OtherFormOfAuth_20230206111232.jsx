import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { BsApple } from 'react-icons/bs'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from '../firebase';

export default function OtherFormOfAuth() {
  async function onGoogleClick (){
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user
   
    // check for user
    const docRef = <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>(db, 'users', user.uid)

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
