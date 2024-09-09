"use client";
import React from "react";
import Image from "next/image";
import Part from "./Part"
import Link from "next/link";


function JoinUs() {
  
  const items =[
    {
      title:"Individual",
      description:"Personal account to manage all you activities.",
      svg:(
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-500 transition-colors duration-300 group-hover:text-white"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M3.72039 12.8871C4.50179 12.1057 5.5616 11.6667 6.66667 11.6667H13.3333C14.4384 11.6667 15.4982 12.1057 16.2796 12.8871C17.061 13.6685 17.5 14.7283 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0656C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0656C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7283 2.93899 13.6685 3.72039 12.8871Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9.99992 3.33333C8.61921 3.33333 7.49992 4.45262 7.49992 5.83333C7.49992 7.21404 8.61921 8.33333 9.99992 8.33333C11.3806 8.33333 12.4999 7.21404 12.4999 5.83333C12.4999 4.45262 11.3806 3.33333 9.99992 3.33333ZM5.83325 5.83333C5.83325 3.53214 7.69873 1.66666 9.99992 1.66666C12.3011 1.66666 14.1666 3.53214 14.1666 5.83333C14.1666 8.13452 12.3011 10 9.99992 10C7.69873 10 5.83325 8.13452 5.83325 5.83333Z" />
      </svg>
      ),
      link:"/Register"
    },
    {
      title:'Business',
      description:'Own or belong to a company, this is for you.',
      svg:(
        <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-500 transition-colors duration-300 group-hover:text-white"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.33325 6.66667C2.87301 6.66667 2.49992 7.03976 2.49992 7.5V15.8333C2.49992 16.2936 2.87301 16.6667 3.33325 16.6667H16.6666C17.1268 16.6667 17.4999 16.2936 17.4999 15.8333V7.5C17.4999 7.03976 17.1268 6.66667 16.6666 6.66667H3.33325ZM0.833252 7.5C0.833252 6.11929 1.95254 5 3.33325 5H16.6666C18.0473 5 19.1666 6.11929 19.1666 7.5V15.8333C19.1666 17.214 18.0473 18.3333 16.6666 18.3333H3.33325C1.95254 18.3333 0.833252 17.214 0.833252 15.8333V7.5Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.56549 2.3989C7.03433 1.93006 7.67021 1.66667 8.33325 1.66667H11.6666C12.3296 1.66667 12.9655 1.93006 13.4344 2.3989C13.9032 2.86774 14.1666 3.50363 14.1666 4.16667V17.5C14.1666 17.9602 13.7935 18.3333 13.3333 18.3333C12.873 18.3333 12.4999 17.9602 12.4999 17.5V4.16667C12.4999 3.94565 12.4121 3.73369 12.2558 3.57741C12.0996 3.42113 11.8876 3.33333 11.6666 3.33333H8.33325C8.11224 3.33333 7.90028 3.42113 7.744 3.57741C7.58772 3.73369 7.49992 3.94565 7.49992 4.16667V17.5C7.49992 17.9602 7.12682 18.3333 6.66658 18.3333C6.20635 18.3333 5.83325 17.9602 5.83325 17.5V4.16667C5.83325 3.50363 6.09664 2.86774 6.56549 2.3989Z"
        />
      </svg>
      ),
      link:'/Register'
    }
  ]
  return (
    <div className="flex h-screen overflow-hidden"> 
    
    <Part/>
    
     
    {/* Right Section with Form */}
    <div className="w-full lg:w-[60%] p-[40px] flex flex-col justify-center items-center relative">
      {/* Sign In Link */}
      <div className="absolute top-5 right-5">
        <p className="text-[#8692A6]">
          Already have an account? <span className="text-blue-700">Sign In</span>
        </p>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-screen w-full lg:w-[55%]">
        <div>
          <h1 className="text-3xl font-bold text-[30px] mb-2">Join Us!</h1>
          <p className="text-lg font-normal text-[#8692A6]">
            To begin the journey, tell us what type of account you'd be opening.
          </p>
        </div>

        {/* Account Type Button */}
        <div className="flex flex-col items-center justify-center w-full space-y-4 mt-8">
        {items.map((item,index)=>(
        <div key={index} >
          <Link href={item.link}>
          
        <button className=" w-auto lg:w-[80%] flex gap-3 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 group border hover:border-blue-600 hover:bg-blue-100">
           {/* Container for SVGs */}
          <div className="relative w-[40px] h-[40px] flex items-center justify-center">
            {/* Parent SVG */}
              <svg
                width="50"
                height="48"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-300"
              >
                <path
                  d="M1.09543 18.2329L25 0.865247L48.9046 18.2329L39.7738 46.3344H10.2262L1.09543 18.2329Z"
                  className="stroke-[#1565D8] transition-colors duration-300 group-hover:fill-[#1565D8]"
                  strokeWidth="1.4"
                />
              </svg>

              {/* Child SVG centered on Z-axis */}
              <div className="absolute inset-0 flex items-center justify-center">
                {item.svg}
              </div>
            </div>

            <div className="text-left">
              <p className="font-medium text-[16px]">{item.title}</p>
              <p className="text-sm text-[#8692A6]">{item.description}</p>
            </div>

            {/* Arrow SVG, visible on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image src='/arrow-right.svg'
                width={20}
                height={20}
                alt="Arrow"/>
            </div>
          </button>
          
          </Link>
        </div>
        ))}
        </div>
      </div>
    </div>
  </div> 
  )
}

export default JoinUs
