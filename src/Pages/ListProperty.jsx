import React, { useEffect, useState } from 'react'
import house from '../Assets/house-illustration.png'
import SubHeader from '../components/SubHeader'

import PhoneInput from 'react-phone-number-input'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from "uuid";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import Spinner from '../components/Spinner'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ListProperty() {
  const navigate = useNavigate()
  const auth = getAuth()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false);
  const [validationIsFired, setValidationIsFired] = useState(false)
  const[errors, setErrors] = useState({})
  const[formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    images: [],
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    parking: false,
    furnished: false,
    address: '',
    description: '',

  });
  const {
    name,
  email,
phoneNumber,
images,
price,
bedrooms,
bathrooms,
parking,
furnished,
address,
description} = formData

function onChange(e){
  const {id, value, checked} = e.target
  
  if(id === 'images'){
    const image = e.target.files
    const imageArray = []
    for (let index = 0; index < image.length; index++) {
      imageArray.push(image[index])
      
    }
    

    
    setFormData({
      ...formData,
      ['images']: imageArray
    })
   
  }else if(id === 'furnished'){
   setFormData({
    ...formData,
    [id]: checked
   })
  }else if(id === 'parking'){
    setFormData({
      ...formData,
      [id]: checked
    })
  }
  else {
    setFormData({
      ...formData,
      [id]: value
    })
  }


  
}

function validation(data){
  setValidationIsFired(true)
  let validated = true
  let error = {}
  Object.keys(data)?.forEach((field) => {
    if(data[field] === ''){
      error[field] = `${field} is required`
      validated = false
    }
    if(field === "images"){
      if(data[field].length === 0){
        error[field] = `${field} is required`
      validated = false
      }
    }
    // validation for price
    if(data[field] === 0){
      error[field] = `${field} is required`
      validated = false
    }
  
  })
  setErrors(error)
  
  return validated
}

useEffect(() => {
if (validationIsFired){
validation(formData)
}else{
return
}


}, [validationIsFired, formData])

async function onSubmit(){
setLoading(true);
if (images.length > 6) {
  setLoading(false);
  toast.error("maximum of 6 images are allowed");
  return;
}

async function storeImage(image){
return new Promise((resolve, reject) => {
  const storage = getStorage();
  const filename = `${auth?.currentUser?.uid}-${image?.name}-${uuidv4()}`
  const storageRef = ref(storage, filename);
  const uploadTask = uploadBytesResumable(storageRef, image);
  uploadTask?.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  
  }, 
  (error) => {
    // Handle unsuccessful uploads
    reject(error)
    
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask?.snapshot?.ref)?.then((downloadURL) => {
     resolve( downloadURL);
    
    });
  }
);

})

}

const imgUrls = await Promise?.all(
  [...images]?.map((image) => storeImage(image))
).catch((error) => {
  setLoading(false);
  toast.error("Images not uploaded");
  return;
  
});
console.log(imgUrls);

const formDataCopy = {
  ...formData,
  imgUrls,
  timestamp: serverTimestamp(),
  userRef: auth.currentUser.uid,
  vote: 0,
};
delete formDataCopy.images;
const docRef = await addDoc(collection(db, 'listings'), formDataCopy)
setLoading(false)
toast.success('Listing created');
navigate('/')


}








if(loading){
  return <Spinner />
}
  return (
    <>
      <SubHeader />
      <div className="relative w-full">
        <img
          src={house}
          alt="A house illustration"
          className="  w-[55%] h-full object-cover"
        />
        <div className="absolute w-full h-full left-0 top-0 bg-gray-500/30 ">
          {step === 1 ? (
            <div
              className="absolute top-[80px] md:right-[100px] lg:right-[300px] md:top-[10%] bg-white w-full md:w-[60%] lg:max-w-[35%] rounded-xl px-8 
          shadow-lg shadow-black"
            >
              <h2 className="text-lg py-4 font-semibold text-[#1a1e24]">
                Reach the guests you want—those who truly value your
                property—with Trybo. Becoming a host is free, fast, and easy.
              </h2>
              <div className="flex flex-col">
                <div className='mb-4'>
                <input
                id='name'
                value={name}
                onChange={onChange}
                  placeholder="Name"
                  type="text"
                  required
                  className="w-full  px-4 py-4 border-[1px] border-[#556987] rounded-md "
                />
                {errors.name && <span className='text-red-600 text-sm capitalize'>{errors.name }</span>}
                </div>
               <div className='mb-4'>
               <input
                 id='email'
                 value={email}
                 onChange={onChange}
                  placeholder="Email"
                  type="email"
                  required
                  className="w-full  px-4 py-4 border-[1px] border-[#556987] 
            rounded-md "
                />
                {errors.email && <span className='text-red-600 text-sm capitalize'>{errors.email }</span>}
               </div>
                <div className='mb-6'>
                <PhoneInput
                
                value={phoneNumber}
                  placeholder="Phone number"
                  
                  onChange={(phone)=> {
                   const e = {
                      target:{
                        id : 'phoneNumber',
                        value: phone
                      }
                    }
                    onChange(e)
                    }}
                  international="true"
                  defaultCountry="US"
                  className="w-full  px-4 py-4 border-[1px] border-[#556987] 
            rounded-md "
                />
                {errors.phoneNumber && <span className='text-red-600 text-sm capitalize'>{errors.phoneNumber }</span>}
                </div>
                
          
                <p className="mb-2">
                  Add images that displays your home photos max(6)
                </p>
               <div className='mb-6'>
               <input
                id="images"
                onChange={onChange}
                accept=".jpg,.png,.jpeg"
                multiple
                required
                  type="file"
                  className="w-full  px-4 py-4 border-[1px] border-[#556987] 
      rounded-md"
                />
               {errors.images && <span className='text-red-600 text-sm capitalize'>{errors.images }</span>}
               </div>
                
              </div>
              <button
                onClick={() => {
                  const dataToValidate = {
                    email:formData.email,
                    name: formData.name,
                    images: formData.images,
                    id: formData.phoneNumber,
                  }
                  if(validation(dataToValidate)){
                    setStep(2)
                  }
                }}
                className="bg-blue-600 text-white px-6  py-4 mb-2 mt-4 rounded-xl
          text-lg hover:bg-blue-800 shadow-md  active:bg-blue-900 active:shadow-lg 
          transition duration-150 ease-in-out"
              >
                Next
              </button>
            </div>
          ) : (
            <>
              <div
                className="absolute top-[80px] md:right-[300px] md:top-[10%] bg-white w-full md:max-w-[35%] rounded-xl px-8 
          shadow-lg shadow-black"
              >
                <div className="mt-6">
                  <p className="text-lg font-semibold text-[#1a1e24]">Price</p>
                  <div className='mb-2'>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={onChange}
                    min="100"
                    max="500"
                    required
                    className="w-full  px-4 py-4 text-xl text-gray-700 bg-white border-[1px] border-[#556987]  rounded-md"
                  />
                  {errors.price && <span className='text-red-600 text-sm capitalize'>{errors.price }</span>}
                  </div>
                 
                </div>
                <div className="flex w-full space-x-6 mb-6 ">
                  <div className="w-1/2">
                    <p className="text-lg font-semibold text-[#1a1e24]">Beds</p>
                    <input
                      type="number"
                      id="bedrooms"
                      value={bedrooms}
                      onChange={onChange}
                      min="1"
                      max="50"
                      required
                      className=" w-full px-4 py-2 text-xl   border-[1px] border-[#556987]  rounded-md"
                    />
                    {errors.bedrooms && <span className='text-red-600 text-sm capitalize'>{errors.bedrooms }</span>}
                  </div>
                  <div className="w-1/2">
                    <p className="text-lg font-semibold text-[#1a1e24]">
                      Baths
                    </p>
                    <input
                      type="number"
                      id="bathrooms"
                      value={bathrooms}
                      onChange={onChange}
                      min="1"
                      max="50"
                      required
                      className="  w-full px-4 py-2 text-xl   border-[1px] border-[#556987]  rounded-md"
                    />
                    {errors.bathrooms && <span className='text-red-600 text-sm capitalize'>{errors.bathrooms }</span>}
                  </div>
                </div>
                <div>
                <div className='flex justify-between mb-4'>
                  <div>
                  <div className='flex gap-2'>
               <input type='checkbox' 
               id='parking'
               value={parking}
               onChange={onChange}
              
               />
                  <p className="text-lg font-semibold text-[#1a1e24]">Parkings</p>
                  
                  
                </div>
                
                  </div>
               
                <div>
                <div className='flex gap-2'>
                <input type='checkbox'
                id='furnished'
                value={furnished} 
                onChange={onChange}
                />
                  <p className="text-lg font-semibold text-[#1a1e24]">Furnished</p>
                 
                
                </div>
                
                </div>
                
                
               </div>
               
                
              
                </div>
          
               
                <p className="text-lg  font-semibold">Address</p>
                <div className='mb-2'>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={onChange}
                  placeholder="Address"
                  required
                  className="w-full px-4 py-4  text-xl text-gray-700 bg-white border-[1px] border-[#556987]  rounded-md"
                />
                {errors.address && <span className='text-red-600 text-sm capitalize'>{errors.address }</span>}
                </div>
             
                <p className="text-lg font-semibold mb-2">Description</p>
                <div className='mb-4'>
                <textarea
                  type="text"
                  id="description"
                  value={description}
                  onChange={onChange}
                  placeholder="Description"
                  required
                  className="w-full  px-4 py-2 text-xl text-gray-700 bg-white  border-[1px] border-[#556987]  rounded-md"
                />
                {errors.description && <span className='text-red-600 text-sm capitalize'>{errors.description }</span>}
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      
                      setStep(1)}}
                    className="bg-blue-600 text-white px-6  py-4 mb-2 mt-4 rounded-xl
          text-lg hover:bg-blue-800 shadow-md  active:bg-blue-900 active:shadow-lg 
          transition duration-150 ease-in-out"
                  >
                    Previous
                  </button>
                  <button
                  onClick={() => {
                    const dataToValidate = {
                      price: formData.price,
                      beds: formData.beds,
                      baths: formData.baths,
                      parking: formData.parking,
                      furnished: formData.furnished,
                      address: formData.address,
                      description: formData.description,

                    }
                    if(validation(dataToValidate)){
                      onSubmit()
                    }
                    console.log(errors)
                    }}
                    type="submit"
                    className="bg-blue-600 text-white px-6 capitalize py-4 mb-2 mt-4 rounded-xl
          text-lg hover:bg-blue-800 shadow-md  active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Be a host
                  </button>
                </div>
              </div>
            </>
          )}
          
           
          
        
              
         
        
            
            
        </div>
      </div>
    </>
  )
}
