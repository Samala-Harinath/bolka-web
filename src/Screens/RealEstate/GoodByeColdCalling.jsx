"use client"
import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Image from 'next/image';
const GoodByeColdCalling = ({ image, mobileImage }) => {
     const { trackEvent } = useMatomo(); 
      const handleGoodByeSection = () => {   
            window.open('https://app.bolka.ai/sign-up', '_blank');
            trackEvent({ category: 'RealEstate-GoodByeColdCalling', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Say goodbye to cold calling—experience the power of Bolka today', });
      }
    return (
        <div className='relative w-full'>
            <Image src={image} alt='GoodByeToColdCalling' className=' object-contain w-full h-auto rounded-[3rem] lg:block hidden'/>
            <Image src={mobileImage} alt='GoodByeToColdCallingMobile' className=' object-cover w-full max-sm:h-[200px] rounded-[3rem] block lg:hidden border '/>
            <div className='flex  justify-center items-center gap-6  lg:absolute max-lg:mt-5 bottom-0 right-0  bg-white rounded-[3rem]'>
                <button className='py-8 px-[35px] max-sm:justify-center max-sm:py-2 rounded-[2.2rem] max-lg:w-full text-xl shadow-[inset_0_40px_80px_rgba(234,172,95,1)] hover:shadow-[inset_0_40px_80px_rgba(234,172,95,0.5)] flex  gap-2 items-center font-medium font-syne' onClick={() => handleGoodByeSection()}>
                    <span className="hidden max-sm:inline ">Try bolka today</span>
                    <span className="inline max-sm:hidden"> Say goodbye to cold calling-experience the poewer of Bolka today</span>
                </button>
            </div>
        </div>
    )
}

export default GoodByeColdCalling