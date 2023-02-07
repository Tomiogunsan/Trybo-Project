import React from 'react'

export default function Settings() {
    const [email, setEmail] = useStat('')
  function onChange (e){
    setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth()
    
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent')

    } catch (error) {
      toast.error('Could not send reset password')
    }
  }
  return (
    <div>

    </div>
  )
}
