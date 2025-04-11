"use client"
import React from 'react'
import joinTheRevolutionImage from '@/assets/Images/Realestate/joinTheRevolutionImage.svg'
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Image from 'next/image';
const InvestIntheFuture = () => {
    const { trackEvent } = useMatomo(); 
    const handleInvestIntheFutureSection = () => {
           window.open('https://app.bolka.ai/sign-up', '_blank');
           trackEvent({ category: 'RealEstate-InvestIntheFuture', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: ' Invest in the future of real estate sales today', });
     }
    return (
        <div className='relative '>
            {/* <img src={joinTheRevolutionImage} alt='joinTheRevolutionImage' className=' object-contain w-full h-auto rounded-[3rem]' />
            <div className='absolute inset-0 flex justify-start flex-col  gap-10  m-10 w-[38%] ml-auto text-white font-syne'>
                <p className='text-3xl w-full'>Join the Revolution</p>
                <h2 className='text-7xl  font-bold'>Don’t get left behind</h2>
            </div>
            <div className='flex  justify-center items-center gap-6  absolute bottom-0 right-0  bg-white rounded-[3rem]'>
                <button className='md:py-8 px-[49px] rounded-[2.2rem] text-xl shadow-[inset_0_20px_70px_rgba(203,217,225,1)] hover:shadow-[inset_0_20px_70px_rgba(203,217,225,0.5)] flex  gap-2 items-center font-medium font-syne' onClick={() => window.open("https://app.bolka.ai/sign-up", "_blank")} >
                    Invest in the future of real estate sales today
                </button>
            </div> */}
            <div className='max-lg:bg-[#0293ae] rounded-[3rem] overflow-hidden'>
                <Image src={joinTheRevolutionImage} alt='joinTheRevolutionImage' className=' object-cover max-sm:h-[200px] w-full  '/>
            </div>
            <div className='absolute inset-0 flex justify-end '>
                <div className='flex right-0 flex-col  md:gap-10 gap-2 md:m-10 m-5  w-[38%]  text-white font-syne '>
                    <p className='text-xl md:text-2xl lg:text-3xl  w-full'>Join the Revolution</p>
                    <h2 className=' text-xl md:text-3xl lg:text-7xl font-bold'>Don’t get left behind</h2>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6  md:absolute max-md:mt-5 bottom-0 right-0  bg-white rounded-[3rem] max-md:m-0 max-lg:m-5'>
                <button className='p-3 md:py-8 md:px-[35px] rounded-[2.2rem] max-md:w-full  justify-center md:text-xl shadow-[inset_0_20px_70px_rgba(203,217,225,1)] hover:shadow-[inset_0_20px_70px_rgba(203,217,225,0.5)] flex  gap-2 items-center font-medium font-syne' onClick={() => handleInvestIntheFutureSection()} >
                    Invest in the future of real estate sales today
                </button>
            </div>
        </div>
    )
}

export default InvestIntheFuture