import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { BsApple } from 'react-icons/bs'

export default function OtherFormOfAuth() {
  return (
    <div className="flex space-x-4 mb-4">
          <BsApple className="text-xl" />
          <AiFillFacebook className="text-blue-800 text-xl" />
          <FcGoogle className="text-xl" />
        </div>
  )
}
