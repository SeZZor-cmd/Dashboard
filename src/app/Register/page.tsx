"use client"
import React from 'react'
import { useState } from 'react';
import Part from "../components/Part"
import Link from 'next/link';
import Image from 'next/image';

function Page() {
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
        <div className='w-full lg:w-1/2 flex'>
          <div className='absolute top-5 left-5 flex'>
            <Link href="/">
              <button className='flex space-x-1 hover:text-[#8692A6]'>
                <Image src="arrow_back.svg" height={20} width={20} alt='Back Arrow'/>
                <p className='text-[#8692A6] text-[16px] font-semibold'>Back</p>
                </button>          
            </Link>
          </div>
          <div className='absolute top-5 right-5'>
            <p>
              <span className='text-[#BDBDBD] text-[14px] font-medium'>STEP 01/03</span> <br />
              <span className='text-[#8692A6] text-[16px] font-semibold'>Personal Info.</span>
            </p>
          </div>
          <form >
            <h1 className="text-[30px] font-bold mb-3">Register Individual Account!</h1>
            <p className="text-[#8692A6] text-[18px] font-normal mb-6">
              For the purpose of industry regulation, your details are required.
            </p>

            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Your full name*
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Create password*
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={form.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
                I agree to terms & conditions
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <Link href='/RecidentInfo'>
              <button
                type="button"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register Account
              </button>
              </Link>
              <div className="text-center text-[#BABABA] font-normal text-[12px]">Or</div>

              <button
                type="button"
                className="w-full py-2 px-4 text-gray-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:shadow-lg flex items-center space-x-2"
              >
                <Image src="/icon-google.svg" width={15} height={15} alt='Google Icon'/>
                <span className='flex-1 text-center'>Register with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page