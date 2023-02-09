import React, { useState } from 'react'
import house from '../Assets/house-illustration.png'
import SubHeader from '../components/SubHeader'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function ListProperty() {
  const [step, setStep] = useState(1)
  
  const[formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    images: {},
    price: 0,
    bedrooms: 1,
    bathrooms: 1,
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
  let boolean = null;
  if(e.target.value === 'true'){
    boolean = true;
  }
  if(e.target.value)
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
              className="absolute top-[80px] md:right-[300px] md:top-[10%] bg-white w-full md:max-w-[35%] rounded-xl px-8 
          shadow-lg shadow-black"
            >
              <h2 className="text-lg py-4 font-semibold text-[#1a1e24]">
                Reach the guests you want—those who truly value your
                property—with Trybo. Becoming a host is free, fast, and easy.
              </h2>
              <div className="flex flex-col">
                <input
                id='name'
                value={name}
                  placeholder="Name"
                  type="text"
                  className="w-full  px-4 py-4 border-[1px] border-[#556987] rounded-md mb-6"
                />
                <input
                 id='email'
                 value={email}
                  placeholder="Email"
                  type="email"
                  className="w-full  px-4 py-4 border-[1px] border-[#556987] 
            rounded-md mb-6"
                />
                <PhoneInput
                id='phoneNumber'
                value={phoneNumber}
                  placeholder="Phone number"
                  onChange={() => console.log('change')}
                  international="true"
                  defaultCountry="US"
                  className="w-full  px-4 py-4 border-[1px] border-[#556987] 
            rounded-md mb-6"
                />
                {/* // value={value}
      // onChange={setValue} */}
                <p className="mb-2">
                  Add images that displays your home photos max(6)
                </p>
                <input
                id='images'
                accept='.jpg,.png,.jpeg'
                multiple
                required
                  type="file"
                  className="w-full  px-4 py-4 border-[1px] border-[#556987] 
      rounded-md mb-6"
                />
              </div>
              <button
                onClick={() => setStep(2)}
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
                  <input
                    type="number"
                    id="price"
                    value={price}
                    // onChange={onChange}
                    min="0"
                    max="50"
                    required
                    className="w-full mb-2 px-4 py-4 text-xl text-gray-700 bg-white border-[1px] border-[#556987]  rounded-md"
                  />
                </div>
                <div className="flex w-full space-x-6 mb-6 ">
                  <div className="w-1/2">
                    <p className="text-lg font-semibold text-[#1a1e24]">Beds</p>
                    <input
                      type="number"
                      id="bedrooms"
                      value={bedrooms}
                      // onChange={onChange}
                      min="1"
                      max="50"
                      required
                      className=" w-full px-4 py-2 text-xl   border-[1px] border-[#556987]  rounded-md"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="text-lg font-semibold text-[#1a1e24]">
                      Baths
                    </p>
                    <input
                      type="number"
                      id="bathrooms"
                      value={bathrooms}
                      // onChange={onChange}
                      min="1"
                      max="50"
                      required
                      className="  w-full px-4 py-2 text-xl   border-[1px] border-[#556987]  rounded-md"
                    />
                  </div>
                </div>
               <div className='flex justify-between mb-4'>
               <div className='flex gap-2'>
               <input type='checkbox' 
               id='parking'
               value={parking}
               
              
               />
                  <p className="text-lg font-semibold text-[#1a1e24]">Parkings</p>
                 
                </div>
                <div className='flex gap-2'>
                <input type='checkbox'
                id='furnished'
                value={furnished} />
                  <p className="text-lg font-semibold text-[#1a1e24]">Furnished</p>
                  
                </div>
               </div>
                <p className="text-lg  font-semibold">Address</p>
                <input
                  type="text"
                  id="address"
                  value={address}
                  // onChange={onChange}
                  placeholder="Address"
                  required
                  className="w-full px-4 py-4 mb-2 text-xl text-gray-700 bg-white border-[1px] border-[#556987]  rounded-md"
                />
                <p className="text-lg font-semibold mb-2">Description</p>
                <textarea
                  type="text"
                  id="description"
                  value={description}
                  // onChange={onChange}
                  placeholder="Description"
                  required
                  className="w-full mb-4 px-4 py-2 text-xl text-gray-700 bg-white  border-[1px] border-[#556987]  rounded-md"
                />
                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-blue-600 text-white px-6  py-4 mb-2 mt-4 rounded-xl
          text-lg hover:bg-blue-800 shadow-md  active:bg-blue-900 active:shadow-lg 
          transition duration-150 ease-in-out"
                  >
                    Previous
                  </button>
                  <button
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
          {/* <form className="absolute top-[80px] md:right-[300px] md:top-[10%] bg-white w-full md:max-w-[35%] rounded-xl px-8 
          shadow-lg shadow-black">
            <h2 className="text-lg py-4 font-semibold text-[#1a1e24]">
              Reach the guests you want—those who truly value your property—with
              Trybo. Becoming a host is free, fast, and easy.
            </h2>
            <div className='flex flex-col'>
            <input placeholder="Name" type='text'
            className='w-full  px-4 py-4 border-[1px] border-[#556987] rounded-md mb-6'/>
            <input placeholder='Email' type='email'
            className='w-full  px-4 py-4 border-[1px] border-[#556987] 
            rounded-md mb-6' />
            <PhoneInput
      placeholder="Phone number"
      
      international= 'true'
      defaultCountry='US'
      className='w-full  px-4 py-4 border-[1px] border-[#556987] 
            rounded-md mb-6'
      />
      {/* // value={value}
      // onChange={setValue} */}
          {/* <p className='mb-2'>Add images that displays your home photos max(6)</p>
      <input type='file' 
      className='w-full  px-4 py-4 border-[1px] border-[#556987] 
      rounded-md mb-6'
      />
            
      <div className="flex  space-x-6 mb-6 ">
          <div>
            <p className="text-lg font-semibold text-[#1a1e24]">Beds</p>
            <input
              type="number"
              id="bedrooms"
              // value={bedrooms}
              // onChange={onChange}
              min="1"
              max="50"
              required
              className=" w-full px-4 py-2 text-xl   border-[1px] border-[#556987]  rounded-md" />
          </div>
          <div>
            <p className="text-lg font-semibold text-[#1a1e24]">Baths</p>
            <input
              type="number"
              id="bathrooms"
              // value={bathrooms}
              // onChange={onChange}
              min="1"
              max="50"
              required
              className="  w-full px-4 py-2 text-xl   border-[1px] border-[#556987]  rounded-md"/>
          </div>
          
        </div>
        <div>
          <p className="text-lg font-semibold text-[#1a1e24]">Price</p>
          <input
              type="number"
              id="bathrooms"
              // value={bathrooms}
              // onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full mb-2 px-4 py-4 text-xl text-gray-700 bg-white border-[1px] border-[#556987]  rounded-md"/>
          </div>
        <p className="text-lg  font-semibold">Address</p>
        <input
          type="text"
          id="address"
          // value={address}
          // onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-4 mb-2 text-xl text-gray-700 bg-white border-[1px] border-[#556987]  rounded-md" />
        <p className="text-lg font-semibold mb-2">Description</p>
        <textarea
          type="text"
          id="description"
          // value={description}
          // onChange={onChange}
          placeholder="Description"
          required
          className="w-full mb-4 px-4 py-2 text-xl text-gray-700 bg-white  border-[1px] border-[#556987]  rounded-md"
        />
        
            
            </div>
            <button
          type="submit"
          className="bg-blue-600 text-white px-4 w-full  py-4 mb-2 mt-4 rounded-full
          text-lg hover:bg-blue-800 shadow-md  active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
            
          </form> */}
        </div>
      </div>
    </>
  )
}
