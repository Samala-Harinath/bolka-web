"use client"
import React from 'react'
import Whatsapp from '@/assets/Images/Realestate/Whatsapp.png'
import Eliminate_Risk from '@/assets/Images/Realestate/Eliminate_Risk.png'
import Consent_Calling from '@/assets/Images/Realestate/Consent_Calling.png'
// import DND_Registry from '../../assets/Images/DND_Registry.svg'
import HQ_Leads from '@/assets/Images/Realestate/HQ_Leads.png'
import Validate_Number from '@/assets/Images/Realestate/Validate_Number.png'
import Reach_Customer from '@/assets/Images/Realestate/Reach_Customer.png'
import Scale_Campaigns from '@/assets/Images/Realestate/Scale_Campaigns.png'
import { CustomButton } from '@/components/Ui/Button/CustomButton'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Image from 'next/image'
const DPDPActSection = ({ setDemoToggle }) => {
    const { trackEvent } = useMatomo(); 
    const handleDpdpSection = () => {
          window.open('https://app.bolka.ai/sign-up', '_blank');
          trackEvent({ category: 'RealEstate-DPDPAct', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Say goodbye to cold calling—experience the power of Bolka today', });
    }
    const handletoggle =()=>{
        setDemoToggle(true)
        trackEvent({ category: 'RealEstate-DPDPAct', action: 'click-event',  name: ' Demo-button', });
      }
    return (
        <div className='flex flex-col justify-center items-center max-w-screen-xl  gap-4'>
            <div className='flex flex-col justify-center items-center text-[#2E2F32] gap-4'>
                <h1 className='font-syne md:text-6xl text-3xl font-bold text-center '>
                    The DPDP Act Makes You Liable One Mistake Means Financial Ruin!
                </h1>
                <p className='max-w-xl text-center font-inter font-normal text-base px-4'>
                    These challenges have been draining your time, money, and customers—until now.
                    With Bolka, overcome them effortlessly and focus on growing your business!
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.2fr] gap-5 w-full flex-1 '>
                <div className='flex flex-col space-y-5 '>
                    <div className='relative flex flex-1'>
                        <Image src={Eliminate_Risk} alt="Calls_hours" className='rounded-[50px] w-full object-cover'/>
                        <div className='absolute  p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#0F73AC] text-start'>
                                Eliminate contacting restricted numbers
                            </span>
                        </div>
                    </div>
                    <div className='relative flex flex-1'>
                        <Image src={Whatsapp} alt="Whatsapp" className='rounded-[50px] w-full object-cover'/>
                        <div className='absolute p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF] text-start'>
                                Integrates telemarketing with WhatsApp
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5 '>
                    <div className='relative flex flex-1'>
                        <Image src={Consent_Calling} alt="Consent_Calling" className='rounded-[50px] w-full object-cover' />
                        <div className='absolute p-10  pr-3 pt-8'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF] text-start'>
                                Enables consent-based calling
                            </span>
                        </div>
                    </div>
                    <div className='rounded-[50px] flex flex-col justify-center items-center font-syne font-bold bg-[#FFF1DE] p-5'>
                        <span className=' text-4xl md:text-8xl text-[#F05112]'>DND</span>
                        <p className='text-3xl md:text-5xl text-[#E48B1E]'>Registry</p>
                    </div>
                    <div className='relative flex flex-1'>
                        <Image src={Scale_Campaigns} alt="Scale_Campaigns" className=' rounded-[50px] w-full object-cover' />
                        <div className='absolute p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#161616] text-start'>
                                Scale campaigns
                            </span>
                        </div>
                    </div>
                </div>

                <div className='grid  lg:grid-cols-1 lg:col-span-1 sm:grid-cols-2 sm:col-span-2  gap-5   '>
                    <div className='relative flex flex-1'>
                        <Image src={HQ_Leads} alt="Compliance" className='rounded-[50px] w-full object-cover'/>
                        <div className='absolute p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#343434] text-start'>
                                high-quality leads
                            </span>
                        </div>
                    </div>
                    <div className='relative flex flex-1'>
                        <Image src={Validate_Number} alt="Validate_Number" className='rounded-[50px] w-full object-cover' />
                        <div className='absolute   p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#424242] text-start'>
                                Validate numbers in real time
                            </span>
                        </div>
                    </div>
                    <div className='relative flex flex-1'>
                        <Image src={Reach_Customer} alt="Manual_intervention" className='rounded-[50px] w-full' />
                        <div className='absolute p-10'>
                            <span className=' font-syne font-bold text-2xl md:text-4xl text-[#584E4E] text-start'>
                                Legally reach out to willing customers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 mt-10  max-sm:flex-col max-sm:w-full'>
                <CustomButton title={
                    <>
                        <span className="hidden max-sm:inline">Try bolka today</span>
                        <span className="inline max-sm:hidden">Say goodbye to cold calling—experience the power of Bolka today</span>
                    </>
                }
                    variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleDpdpSection()} />
                <CustomButton title="Try demo now" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
            </div>
        </div>
    )
}

export default DPDPActSection
