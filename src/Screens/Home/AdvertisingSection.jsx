"use client"
import React from 'react'
import { CustomButton } from '@/Components/Ui/Button/CustomButton'
import { useMatomo } from '@datapunt/matomo-tracker-react';
const AdvertisingSection = () => {
  const { trackEvent } = useMatomo(); 
  const handleAdvertising = (val) => {     
    if(val === 1){
      trackEvent({ category: 'Home-Advertising', action: 'click-event',  name: "LearnMore-button", }); 
    }else if(val === 2){
      trackEvent({ category: 'Home-Advertising', action: 'click-event',  name:"GetStarted-button" , }); 
    }
          
  }
  return (
    <div className='flex max-md:flex-col gap-5 justify-between items-start w-full  rounded-[2rem] bg-[#932F19] p-12'>
      <div className=' '>
        <h1 className='font-krona font-normal text-3xl text-[#FFFFFF] text-start mb-4'>Start your free demo</h1>
        <span className='font-inter font-normal text-xl text-[#F9DBAF] '>Join with other businesses already growing with Bolka.</span>
      </div>

      <div className='flex gap-5'>
        <CustomButton title="Learn more" variant="white-btn" className='border-none text-white' onClick={()=>handleAdvertising(1)}/>
        <CustomButton title="Get started" variant="orange-btn" className='text-white' onClick={()=>handleAdvertising(2)}/>
      </div>
    </div>
  )
}

export default AdvertisingSection
