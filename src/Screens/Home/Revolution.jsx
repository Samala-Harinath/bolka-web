"use client"
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react';
import CallingImage from '@/assets/Images/CallingImage.svg'
import CallingImageFull from '@/assets/Images/CallingImageFull.svg'
import Image from 'next/image';
const Revolution = () => {
    const { trackEvent } = useMatomo();
    const handleInvestIntheFutureSection = () => {
        window.open('https://app.bolka.ai/sign-up', '_blank');
        trackEvent({ category: 'Home-Revolution', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: ' Invest in the future sales today', });
    }
    return (
        <div className='relative '>
            <div className=' rounded-[3rem] overflow-hidden'>
                <Image src={CallingImageFull} alt='CallingImageFull' className='block lg:hidden object-cover  w-full'/>
                <Image src={CallingImage} alt='CallingImage' className=' object-cover hidden lg:block  w-full  '/>
            </div>
            <div className='absolute inset-0 flex justify-end '>
                <div className='flex right-0 flex-col  md:gap-10 gap-2 md:m-10 m-5  w-[38%]  text-white font-syne '>
                    <p className='max-sm:text-lg text-2xl lg:text-[34px] font-normal max-sm:leading-none  w-full'>Join the Revolution</p>
                    <h2 style={{lineHeight:1.1}} className='max-sm:text-2xl text-3xl lg:text-[50px] max-sm:leading-normal  font-bold'>Don’t get left behind</h2>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6  md:absolute max-md:mt-5 bottom-0 right-0  bg-white rounded-[3rem] max-md:m-0 max-lg:m-5'>
                <button className='p-3 md:py-8 md:px-[100px] rounded-[2.2rem] max-md:w-full  justify-center md:text-xl shadow-[inset_0_20px_70px_rgba(203,217,225,1)] hover:shadow-[inset_0_20px_70px_rgba(203,217,225,0.5)] flex  gap-2 items-center font-medium font-syne' onClick={() => handleInvestIntheFutureSection()} >
                Invest in the future sales today
                </button>
            </div>
        </div> 
    )
}

export default Revolution
