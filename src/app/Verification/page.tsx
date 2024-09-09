"use client"
import React from 'react'
import { useState } from 'react';
import Part from "../components/Part"
import Link from 'next/link';
import Image from 'next/image';

function page() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeTerms: false,
  });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  return (    
    <div className="flex h-screen overflow-hidden">
    <Part/>
      <div className="w-full lg:w-[60%] p-[40px] flex flex-col justify-center items-center relative">
        <div className='w-1/2 flex'>
          <div className='absolute top-5 left-5 flex'>
            <Link href="/RecidentInfo">
              <button className='flex space-x-1 hover:text-[#8692A6]'>
                <Image src="arrow_back.svg" height={20} width={20} alt='Back Arrow'/>
                <p className='text-[#8692A6] text-[16px] font-semibold'>Back</p>
                </button>          
            </Link>
          </div>
          <div className='absolute top-5 right-5'>
            <p>
              <span className='text-[#BDBDBD] text-[14px] font-medium'>STEP 03/03</span> <br />
              <span className='text-[#8692A6] text-[16px] font-semibold'>Bank Verification</span>
            </p>
          </div>
          <form>
            <h1 className="text-[30px] font-bold mb-3">Complete Your Profile!</h1>
            <p className="text-[#8692A6] text-[18px] font-normal mb-6">
              For the purpose of industry regulation, your details are required.
            </p>

            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
               Bank Verification Number(BVN)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"              
                value={form.fullName}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                placeholder="Enter Verification number"
                required
              />
            </div>


            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save & Continue
              </button>

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

export default page