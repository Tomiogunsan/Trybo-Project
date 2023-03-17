import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { getAuth, signInWithPopup,signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



export default function OtherFormOfAuth() {
  const navigate = useNavigate()
  async function onGoogleClick (){
   try {
    const auth = getAuth()
    // console.log(auth);
    const provider = new GoogleAuthProvider();
    const result = await signInWith(auth, provider);
    // console.log(result)
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

   function onFacebookClick(){
    const auth = getAuth()
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider).then((re) => {
      const user = re.user
      console.log(user);
      const credential = FacebookAuthProvider.credentialFromResult(re)
      const accessToken = credential.accessToken;
      // console.log(accessToken);
    }).catch((err) => {
      console.log(err.message);
    })
    // try {
    //   const auth = getAuth()
    //   // console.log(auth);
    // const provider = new FacebookAuthProvider()
    // const result = await signInWithPopup(auth, provider)
    // const user = result.user
    // console.log(result);

    // // console.log(result);
    // // // check for user
    // const docRef = doc(db, 'users', user.uid)
    // const docSnap = await getDoc(docRef);

    // if(!docSnap.exists()){
    //   await setDoc(docRef,{
    //     name: user.displayName,
    //     email: user.email,
    //     timestamp: serverTimestamp(),
    //   })
    // }
    // navigate('/')
    // } catch (error) {
    //   toast.error('Could not authorize with Facebook');
      
    // }
    
  }

  
  return (
    <div className="flex space-x-4 mb-4">
        <button>
        <BsTwitter className="text-xl text-blue-800" />
        </button>
        <button onClick={onGoogleClick} type='button'>
          <FcGoogle className="text-xl" />
          </button>
          <button onClick={onFacebookClick}>
          <AiFillFacebook className="text-blue-800 text-xl" />
          </button>
          
          
        </div>
  )
}
