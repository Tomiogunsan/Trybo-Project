import React, { useState } from 'react'
import SignUpComponent from '../components/SignUp/SignUpComponent'
import SubHeader from '../components/SubHeader'



export default function SignUp() {
  const [formData, setFormData] = useState({})
  return (
    <div>
      <SubHeader />
     <SignUpComponent />
     
    </div>
  )
  }