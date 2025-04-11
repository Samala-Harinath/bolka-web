"use client"
import React from 'react'
import Calls_hour from '@/assets/Images/Realestate/Calls_hour.png'
import Clock from '@/assets/Images/Realestate/Clock.png'
import Assistance from '@/assets/Images/Realestate/Assistance.png'
import Customer from '@/assets/Images/Realestate/Customer.png'
import DND from '@/assets/Images/Realestate/DND.png'
import Manual_intervention from '@/assets/Images/Realestate/Manual_intervention.png'
import Solutions from '@/assets/Images/Realestate/Solutions.png'
import { CustomButton } from '@/Components/Ui/Button/CustomButton'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Image from 'next/image'
const LoopholesSection = ({ setDemoToggle }) => {
    const { trackEvent } = useMatomo(); 
    const handleLoopholesSection = () => {
          window.open('https://app.bolka.ai/sign-up', '_blank');
          trackEvent({ category: 'RealEstate-Loopholes', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Say goodbye to cold calling—experience the power of Bolka today', });
    }
    const handletoggle =()=>{
        setDemoToggle(true)
        trackEvent({ category: 'RealEstate-Loopholes', action: 'click-event',  name: ' Demo-button', });
      }
    return (
        <div className='flex flex-col justify-center items-center max-w-screen-xl  gap-4'>
            <div className='flex flex-col justify-center items-center text-[#2E2F32] gap-4'>
                <h1 className='font-syne md:text-6xl text-3xl font-bold text-center '>
                    Regulatory Loopholes Are Closing
                    Is Your Business Ready?
                </h1>
                <p className='max-w-xl text-center font-inter font-normal text-base px-4'>
                    These challenges have been draining your time, money, and customers—until now.
                    With Bolka, overcome them effortlessly and focus on growing your business!
                </p>
            </div>
            <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.2fr] gap-5 w-full flex-1 '>
                <div className='flex flex-col space-y-5 '>
                    <div className='relative flex flex-1'>
                        <Image src={Calls_hour} alt="Calls_hours" className='rounded-[50px] w-full object-cover'/>
                        <div className='absolute p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF] text-start'>
                                Calls within permitted hours
                            </span>
                        </div>
                    </div>
                    <div className='relative flex flex-1'>
                        <Image src={Customer} alt="Customer" className='rounded-[50px] w-full object-cover'/>
                        <div className='absolute p-10'>
                            <span className='font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF]'>
                                Prevent over-contacting customers
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5 '>
                    <div className='relative flex flex-1'>
                        <Image src={DND} alt="DND" className='rounded-[50px] w-full object-cover'/>
                        <div className='absolute p-10'>
                            <span className='font-syne font-bold text-2xl md:text-4xl text-[#353535]'>
                                DND Scrubbing
                            </span>
                        </div>
                    </div>
                    <div className='rounded-[50px] flex flex-col justify-center items-center font-syne font-bold bg-[#FFF1DE] p-5'>
                        <span className='text-4xl md:text-8xl text-[#F05112]'>TRAI</span>
                        <p className='text-3xl md:text-5xl text-[#E48B1E]'>Compliance</p>
                    </div>
                    <div className='relative flex flex-1'>
                        <Image src={Solutions} alt="Solutions" className='rounded-[50px] w-full object-cover'/>
                        <div className='absolute p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#363636] text-start'>
                                Cost-effective, automated solutions
                            </span>
                        </div>
                    </div>
                </div>

                <div className='grid  lg:grid-cols-1 lg:col-span-1 sm:grid-cols-2 sm:col-span-2  gap-5  '>
                    <div className='relative flex flex-1 '>
                        <Image src={Clock} alt="Clock" className='rounded-[50px] w-full  object-cover'/>
                        <div className='absolute p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#333536]'>Real-time alerts</span>
                        </div>
                    </div>
                    <div className='relative flex flex-1'>
                        <Image src={Assistance} alt="Assistance" className='rounded-[50px] w-full object-cover '/>
                        <div className='absolute p-10'>
                            <span className='font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF]'>
                                Assistance on DLT registration
                            </span>
                        </div>
                    </div>
                    
                     <div className='relative flex flex-1 '>
                        <Image src={Manual_intervention} alt="Manual_intervention" className='rounded-[50px] w-full object-cover '/>
                        <div className='absolute top-8  pl-8 pr-20'>
                            <span className='font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF]'>
                                Low manual intervention
                            </span>
                        </div>
                    </div>
                    
                    
                   
                </div>
            </div>


            {/* <div className="border-2 border-black p-4 w-full max-w-[500px] mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2  border-2 border-black "></div>
                    <div className="border-2 border-black h-20"></div>
                    <div className="border-2 border-black h-20"></div>
                    <div className="border-2 col-span-2 border-black h-20"></div>
                    <div className="border-2 col-span-2 border-black h-20"></div>
                    <div className="border-2 border-black h-20"></div>
                </div>
            </div> */}

            <div className='flex gap-5 mt-10 max-sm:flex-col max-sm:w-full'>
                <CustomButton  title={
                        <>
                            <span className="hidden max-sm:inline">Try bolka today</span>
                            <span className="inline max-sm:hidden">Say goodbye to cold calling—experience the power of Bolka today</span>
                        </>
                    }
                 variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleLoopholesSection()} />
                <CustomButton title="Try demo now" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
            </div>
        </div>
    )
}

export default LoopholesSection
