import React from 'react'
import house from '../Assets/house-illustration.png'
import SubHeader from '../components/SubHeader'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function ListProperty() {
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
          <form className="absolute top-[80px] md:right-[300px] md:top-[10%] bg-white w-full md:max-w-[35%] rounded-xl px-8 shadow-lg shadow-black">
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
      <p className='mb-4'>Add images that displays your home photos</p>
      <input type='file' 
      className='w-full  px-4 py-4 border-[1px] border-[#556987] 
      rounded-md mb-6'
      />
      <div className="flex space-x-6 mb-6 ">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              // value={bedrooms}
              // onChange={onChange}
              min="1"
              max="50"
              required
              className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounde
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              // value={bathrooms}
              // onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
          <div>
          <p className="text-lg font-semibold">Regular price</p>
          <input
              type="number"
              id="bathrooms"
              // value={bathrooms}
              // onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
        </div>
        <p className="text-lg  font-semibold">Address</p>
        <input
          type="text"
          id="address"
          // value={address}
          // onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          // value={description}
          // onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded"
        />
        
            
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}
