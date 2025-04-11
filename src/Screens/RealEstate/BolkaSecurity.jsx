"use client"
import React from 'react'
import Security1 from '@/assets/Images/Realestate/Security1.png'
import Security2 from '@/assets/Images/Realestate/Security2.png'
import Security3 from '@/assets/Images/Realestate/Security3.png'
import Security4 from '@/assets/Images/Realestate/Security4.png'
import Security5 from '@/assets/Images/Realestate/Security5.png'
import Security6 from '@/assets/Images/Realestate/Security6.png'
import { CustomButton } from '@/Components/Ui/Button/CustomButton'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Image from 'next/image'
const BolkaSecurity = ({ setDemoToggle }) => {
    const { trackEvent } = useMatomo(); 
    const handleSecuritySection = () => {
          window.open('https://app.bolka.ai/sign-up', '_blank');
          trackEvent({ category: 'RealEstate-Security', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Lock in security & compliance with Bolka now', });
    }
    const handletoggle =()=>{
        setDemoToggle(true)
        trackEvent({ category: 'RealEstate-BolkaSecurity', action: 'click-event',  name: ' Demo-button', });
      }
    return (
        <div className='max-w-screen-xl flex flex-col gap-8'>
            <h1 className='font-syne md:text-6xl text-3xl font-bold text-center  text-[#2E2F32]'>
                How Bolka Ensures Security & Compliance
            </h1>

            <div className='flex flex-col  justify-center items-center  '>
                <div className='relative '>
                    <Image src={Security1} alt="Report1" className='rounded-[50px] object-contain w-fill'/>
                    <div className='sm:absolute flex flex-col lg:top-16 top-5 lg:w-[45%] sm:w-[50%] lg:right-28 sm:right-10  max-sm:p-5 lg:gap-10  p-5 sm:gap-5 gap-2'>
                        <span className=' font-syne font-bold text-lg md:text-3xl lg:text-6xl  text-black sm:text-[#FFFFFF] text-start'>
                            Protecting Your Business & Customers
                        </span>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-black sm:text-[#F8F8F8]'>State-of-the-art security frameworks</span>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-black sm:text-[#F8F8F8]'>24/7 monitoring to detect and prevent threats.</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 justify-center items-center'>
                <div className='relative '>
                    <Image src={Security2} alt="Security2" className='rounded-[50px]'/>
                    <div className='sm:absolute flex flex-col lg:top-16 top-5 lg:w-[60%] sm:w-[65%] w-full lg:left-28 md:left-10  lg:gap-10 sm:gap-5 p-5 gap-2'>
                        <span className='font-syne font-bold text-lg md:text-3xl lg:text-6xl text-[#1F1F1F] text-start'>
                            Your Information Stays Confidential
                        </span>
                        <p className='font-syne font-normal md:text-xl lg:text-2xl text-[#171717]'>
                            We strictly<span className='font-bold'> do not </span>sell, share, or misuse customer data
                        </p>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-[#171717]'>Compliance with DPDP Act & Global Privacy Standards</span>
                        <div className='flex md:gap-7 gap-4 '>
                            <div className='bg-[#FFB65C] rounded-2xl py-2 px-4'>
                                <span className='font-syne font-semibold lg:text-2xl text-[#000000]'>PCI DSS</span>
                            </div>
                            <div className='bg-[#FFB65C] rounded-2xl py-2 px-4'>
                                <span className='font-syne font-semibold lg:text-2xl text-[#000000]'>GDPR</span>
                            </div>
                            <div className='bg-[#FFB65C] rounded-2xl py-2 px-4'>
                                <span className='font-syne font-semibold lg:text-2xl text-[#000000]'>SOC2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 justify-center items-center'>
                <div className='relative'>
                    <Image src={Security3} alt="Security3" className='rounded-[50px]'/>
                    <div className='sm:absolute flex flex-col lg:top-16 top-5 lg:w-[45%] sm:w-[55%] w-full sm:right-3   sm:gap-5 gap-2 p-5'>
                        <span className=' font-syne font-bold text-lg md:text-3xl lg:text-6xl text-[#1F1F1F] text-start'>
                            Military-Grade Encryption
                        </span>
                        <p className='font-syne font-normal md:text-xl lg:text-2xl text-[#171717]'>
                            Encrypted using <span className='font-syne font-semibold'>AES-</span><span className='font-krona md:text-xl'>256 </span> encryption
                        </p>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-[#171717]  mr-36'>Customer interactions, call recordings, and transcriptions are securely encrypted</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 justify-center items-center'>
                <div className='relative'>
                    <Image src={Security4} alt="Security4" className='rounded-[50px]'/>
                    <div className='sm:absolute flex flex-col lg:top-16 top-5  sm:w-[60%] w-full lg:left-28 md:left-10  lg:gap-10 sm:gap-5 p-5 gap-2'>
                        <span className=' font-syne font-bold text-lg md:text-3xl lg:text-6xl text-black sm:text-[#FFFFFF] text-start'>
                            Defending Against Cyber Threats
                        </span>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-black sm:text-[#f8f8f8]'>Firewall & Intrusion Prevention</span>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-black sm:text-[#f8f8f8]'>Real-Time Threat Monitoring</span>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-black sm:text-[#f8f8f8]'>Secure Cloud Infrastructure</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 justify-center items-center'>
                <div className='relative'>
                    <Image src={Security5} alt="Security5" className='rounded-[50px]'/>
                    <div className='sm:absolute flex flex-col top-16  lg:w-[45%] sm:w-[55%] w-full sm:right-3 sm:gap-5 gap-2 p-5 '>
                        <span className=' font-syne font-bold text-lg md:text-3xl lg:text-6xl text-[#1F1F1F] text-start'>
                            Two-Factor Authentication (<span className='font-krona font-normal text-lg md:text-2xl lg:text-5xl'>2</span>FA)
                        </span>
                        <span className='font-syne font-normal md:text-xl lg:text-2xl text-[#171717]'>OTP verification through email or SMS</span>
                        <span className='font-syne font-normal md:text-xl lg:text-2xl text-[#171717]'>Extra Layer of Protection</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 justify-center items-center'>
                <div className='relative overflow-hidden'>
                    <Image src={Security6} alt="Security6" className='rounded-[50px]'/>
                    <div className='sm:absolute flex flex-col lg:top-16 top-5 lg:w-[50%] w-full left-lg:left-28 md:left-10  lg:gap-10 sm:gap-5 p-5 gap-2'>
                        <span className=' font-syne font-bold text-lg md:text-3xl lg:text-6xl text-black sm:text-[#FFFFFF] text-start'>
                            Highest Security Standards
                        </span>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-black sm:text-[#f8f8f8]'>GDPR (General Data Protection Regulation)</span>
                        <p className=' font-syne font-normal md:text-xl lg:text-2xl text-black sm:text-[#f8f8f8]'>
                            SOC<span className='font-krona font-normal md:text-xl'> 2 </span>(Service Organization Control Type<span className='font-krona font-normal md:text-xl'> 2</span>)
                        </p>
                        <span className=' font-syne font-normal md:text-xl lg:text-2xl text-black sm:text-[#f8f8f8]'>PCI DSS (Payment Card Industry Data Security Standard)</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 mt-10 w-full justify-center max-sm:flex-col '>
                <CustomButton
                    title={
                        <>
                            <span className="hidden max-sm:inline">Try bolka today</span>
                            <span className="inline max-sm:hidden">Lock in security & compliance with Bolka now</span>
                        </>
                    }
                    variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleSecuritySection()} />
                <CustomButton title="Try demo now" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
            </div>
        </div>
    )
}

export default BolkaSecurity
