"use client"
import React from 'react'
import { useState } from 'react';
import Part from "../components/Part"
import Link from 'next/link';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Page() {
  
  const [form, setForm] = useState({
    phone: '',
    address: '',
    country: '',
  });

  const handleChange = (e: { target: { name: any; value: any;}; }) => {
    const { name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlePhoneChange = (value: any) => {
    setForm({
      ...form,
      phone: value,
    });
  };

  const isPlaceholderSelected = form.country === "";

  return (    
    <div className="flex h-screen overflow-hidden">
    <Part/>
      <div className="w-full lg:w-[60%] p-[40px] flex flex-col justify-center items-center relative">
        <div className='w-full lg:w-1/2 flex'>
          <div className='absolute top-5 left-5 flex'>
            <Link href="/Register">
              <button className='flex space-x-1 hover:text-[#8692A6]'>
                <Image src="arrow_back.svg" height={20} width={20} alt='Back Arrow'/>
                <p className='text-[#8692A6] text-[16px] font-semibold'>Back</p>
                </button>          
            </Link>
          </div>
          <div className='absolute top-5 right-5'>
            <p>
              <span className='text-[#BDBDBD] text-[14px] font-medium'>STEP 02/03</span> <br />
              <span className='text-[#8692A6] text-[16px] font-semibold'>Recidency Info.</span>
            </p>
          </div>
          <form>
            <h1 className="text-[30px] font-bold mb-3">Complete Your Profile!</h1>
            <p className="text-[#8692A6] text-[18px] font-normal mb-6">
              For the purpose of industry regulation, your details are required.
            </p>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
               Phone number
              </label>
              <PhoneInput
                value={form.phone}
                onChange={handlePhoneChange}
                preferredCountries={['in','us', 'gb', 'ng']} 
                containerClass="w-full"
                buttonClass="px-3 py-2 border-r"
                searchClass="p-2"
                country={'in'} 
                placeholder='Enter Phone Number'
                inputStyle={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db', 
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                  fontSize: '16px',
                  paddingLeft:'45px'
                }}
                buttonStyle={{
                  borderRight: '1px solid #d1d5db', 
                }}
                containerStyle={{
                  width: '100%', 
                }}
              />
              
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Your address
              </label>
              <input
                name="address"
                id="address"
                value={form.address}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                placeholder="Please enter address"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country of residence
              </label>
              <select
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                style={{
                  color: isPlaceholderSelected ? '#A0AEC0' : '#000',
                }}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full bg-transparent"
              >
                <option value="" disabled hidden>Please select</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="gb">United Kingdom</option>
                <option value="au">Australia</option>
              </select>
            </div>
            
            
            

            <div className="flex flex-col gap-4">
              <Link href='/Verification'>
              <button
                type="button"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save & Continue
              </button>
              </Link>
              <div className="text-center text-[#BABABA] font-normal text-[12px] flex items-center justify-center">
                <Image src='/lock.svg' height={10} width={10} alt='lock'/>
                Your Info is safely secured
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page