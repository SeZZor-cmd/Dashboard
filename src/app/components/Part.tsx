import React from 'react'
import Image from 'next/image'

function Part() {
  return (
    <div className="bg-[url('/image/background.jpeg')] bg-cover bg-center w-[40%] relative  hidden lg:flex items-center justify-center text-white">
      
      
      <div className="absolute flex z-50 top-5 left-5">
        <Image src="/logo.svg" height={30} width={30} alt="logo" />
        <p className="ml-[5px] mt-[3px]">Oasis</p>
      </div>
      
      
      <div className="bg-[#1565D8E5] opacity-90 absolute inset-0"></div>

      
      <div className="w-2/3 relative z-10">
        <div className="mt-[10px] text-[20px] font-semibold">
          <Image src="/comma.svg" height={40} width={40} alt="comma" className="mb-[40px]" />
          <p>
            The passage experienced a surge in popularity during the 1960s
            when Letraset used it on their dry-transfer sheets, and again
            during the 90s as desktop publishers bundled the text with their
            software.
          </p>
          <h3 className="flex mt-[10px]">
            Vincent Obi
            <Image
              src="/Circle_check.svg"
              height={15}
              width={15}
              alt="Circle Check"
              className="ml-[5px]"
            />
          </h3>
          <div className="mt-[20px] right-0 absolute">
            <Image src="/Vector_1.svg" height={40} width={40} alt="vector" className="z-10" />
          </div>
        </div>
      </div>

      
      <div>
        <Image src="/Vector.svg" height={100} width={100} alt="Circle" className="z-10 absolute bottom-0 left-0" />
      </div>
    </div>
  )
}

export default Part