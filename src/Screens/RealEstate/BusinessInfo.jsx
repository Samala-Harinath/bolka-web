"use client"
import React from 'react'
import Audience from '@/assets/Images/Realestate/Audience.png'
import breaches from '@/assets/Images/Realestate/breaches.png'
import Calls from '@/assets/Images/Realestate/Calls.png'
import Pay from '../../assets/Images/Realestate/Pay.png'
import Personalization from '@/assets/Images/Realestate/Personalization.png'
import Resource from '@/assets/Images/Realestate/Resource.png'
import Image from 'next/image'
import Face_Emoji from '@/assets/Images/Realestate/Face_Emoji.png'
import { CustomButton } from '@/Components/Ui/Button/CustomButton'
import { useMatomo } from '@datapunt/matomo-tracker-react'

const BusinessInfo = ({ setDemoToggle }) => {
  const { trackEvent } = useMatomo(); 
  const handleBusinesInfoSection = () => {
        window.open('https://app.bolka.ai/sign-up', '_blank');
        trackEvent({ category: 'RealEstate-BusinesInfo', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Say goodbye to cold calling—experience the power of Bolka today', }); 
  }

  const handletoggle =()=>{
    setDemoToggle(true)
    trackEvent({ category: 'RealEstate-BusinessInfo', action: 'click-event',  name: ' Demo-button', });
  }
  return (
    <div className='flex flex-col justify-center items-center max-w-screen-xl  gap-4'>
      <div className='flex flex-col justify-center items-center text-[#2E2F32] gap-4'>
        <h1 className='font-syne md:text-6xl text-3xl font-bold text-center '>
          Scale the Right Way and Watch Your Business Thrive!
        </h1>
        <p className='max-w-xl text-center font-inter font-normal text-base px-4'>
          These challenges have been draining your time, money, and customers—until now.
          With Bolka, overcome them effortlessly and focus on growing your business!
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.2fr] gap-5 w-full flex-1'>
        <div className='flex flex-col space-y-5 '>
          <div className='relative flex flex-1'>
            <Image src={Calls} alt="Calls" className='rounded-[50px] w-full object-cover' />
            <div className='absolute top-8  pl-8 pr-10'>
              <p className=' font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF] text-start'>
                <span className='font-krona font-normal text-3xl'>100 </span>to<span className='font-krona font-normal text-3xl'> 1000 </span>
                of calls in seconds
              </p>
            </div>
          </div>
          <div className='relative flex flex-1'>
            <Image src={Audience} alt="Audience" className='rounded-[50px] w-full' />
            <div className='absolute top-8  pl-8 pr-10'>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF] text-start'>
                Target multiple audiences simultaneously
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 '>
          <div className='relative flex flex-1'>
            <Image src={Resource} alt="Resource" className='rounded-[50px] w-full object-cover' />
            <div className='absolute top-8  pl-8 pr-10'>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#353535] text-start'>
                Real-Time Resource Allocation
              </span>
            </div>
          </div>
          <div className='rounded-[50px] flex flex-col justify-center items-center font-syne font-bold bg-[#FFF1DE] p-5'>
            <span className=' text-4xl md:text-8xl text-[#F05112]'>Scale</span>
            <p className='text-3xl md:text-5xl text-[#E48B1E]'>worry free</p>
          </div>
          <div className='relative flex flex-1'>
            <Image src={breaches} alt="breaches" className='rounded-[50px] w-full object-cover'/>
            <div className='absolute top-8  pl-8 pr-10'>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#F8F8F8] text-start'>
                Scale without compliance breaches
              </span>
            </div>
          </div>
        </div>

        <div className='grid  lg:grid-cols-1 lg:col-span-1 sm:grid-cols-2 sm:col-span-2  gap-5  '>
          <div className='relative flex flex-1'>
            <Image src={Personalization} alt="Personalization" className='rounded-[50px] w-full object-cover'/>
            <div className='absolute top-8  pl-8 '>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#EBEBEB] text-start'>
                AI-Driven Personalization
              </span>
            </div>
          </div>
          <div className='relative flex flex-1'>
            {/* <img src={Pay} alt="Pay" className='rounded-[50px] w-full object-cover' /> */}
            <div className='absolute top-8  pl-8 pr-20'>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#343434] text-start'>
                Only pay for what you use
              </span>
            </div>
          </div>
          <div className='relative  flex-1  bg-[#F5F5F5] rounded-[50px] flex justify-center items-end p-8'>
            <Image src={Face_Emoji} alt="Face_Emoji" className='mt-[175px] object-cover' />
            <div className='absolute top-8  pl-8 pr-20'>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#584E4E] text-start'>
                Tracks customer sentiment
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-5 mt-10 max-sm:flex-col max-sm:w-full'>
        <CustomButton title={
          <>
            <span className="hidden max-sm:inline">Try bolka today</span>
            <span className="inline max-sm:hidden">Say goodbye to cold calling—experience the power of Bolka today</span>
          </>
        }
          variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleBusinesInfoSection()} />
        <CustomButton title="Try demo now" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
      </div>
    </div>
  )
}

export default BusinessInfo
