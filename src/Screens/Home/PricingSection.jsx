
import React from 'react'

const PricingSection = () => {
     return (
          <div className='flex max-md:flex-col items-center gap-4  justify-center'>
               <div>
                    <div className='flex flex-col justify-center items-center  rounded-3xl bg-[#F8F8F8] p-6 gap-10'>
                         <p className='w-72 font-inter font-medium text-3xl text-[#2E2F32] text-center '>CCaaS – Contact Centre as a service will be </p>
                         <span className='w-64 font-inter font-extrabold text-7xl text-center bg-gradient-to-r from-[#1F2229] to-[#6D758F] text-transparent bg-clip-text'>$24 billion </span>
                         <span className='w-72 font-inter font-medium text-3xl text-[#2E2F32] text-center'>by 2032 worldwide</span>
                    </div>
                    <div className='flex flex-col justify-center items-center  rounded-3xl bg-[#ECF9FF] p-6 gap-10 mt-4'>
                         <p className='w-72 font-inter font-medium text-3xl text-[#2E2F32] text-center '>Contact and Call Centre Outsourcing will be </p>
                         <span className='w-64 font-inter font-extrabold text-7xl text-center bg-gradient-to-r from-[#35A6D9] to-[#1C5873] text-transparent bg-clip-text'>$220 billion  </span>
                         <span className='w-56 font-inter font-medium text-3xl text-[#2E2F32] text-center'>by 2033 worldwide</span>
                    </div>
               </div>


               <div className=''>
                    <div className='flex flex-col justify-center items-center  rounded-3xl bg-[#FFF7EF] p-6 gap-10 '>
                         <p className='w-60 font-inter font-medium text-3xl text-[#2E2F32] text-center '>Cloud based contact centre will be </p>
                         <span className='w-64 font-inter font-extrabold text-7xl text-center bg-gradient-to-r from-[#E5A820] to-[#7F5D12] text-transparent bg-clip-text'>$157 billion  </span>
                         <span className='w-56 font-inter font-medium text-3xl text-[#2E2F32] text-center'>by 2032 worldwide</span>
                    </div>
                    <div className='flex flex-col justify-center items-center  rounded-3xl bg-[#F8F8F8] p-6 gap-10 mt-4'>
                         <p className='w-60 font-inter font-medium text-3xl text-[#2E2F32] text-center '>Global Call Center AI Market will be </p>
                         <span className='w-64 font-inter font-extrabold text-7xl text-center bg-gradient-to-r from-[#6D758F] to-[#1F2229] text-transparent bg-clip-text'>$13 billion  </span>
                         <span className='w-72 font-inter font-medium text-3xl text-[#2E2F32] text-center'>by 2032 worldwide</span>
                    </div>
               </div>
          </div>
     )
}

export default PricingSection
