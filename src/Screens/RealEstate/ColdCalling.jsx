"use client"
import React from 'react'
import { CustomButton } from '@/Components/Ui/Button/CustomButton';
import FiveGImage from '@/assets/Images/Realestate/5gImage.png'
import HumanResource from '@/assets/Images/Realestate/HumanResource.png'
import colorPattern from '@/assets/Images/Realestate/colorPattern.png'
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Image from 'next/image';
const ColdCalling = ({ setDemoToggle }) => {
    const { trackEvent } = useMatomo(); 
    const handleColdCallingSection = () => {
          window.open('https://app.bolka.ai/sign-up', '_blank');
          trackEvent({ category: 'RealEstate-ColdCalling', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Say goodbye to cold calling—experience the power of Bolka today', });
    }
    const handletoggle =()=>{
        setDemoToggle(true)
        trackEvent({ category: 'RealEstate-ColdCalling', action: 'click-event',  name: ' Demo-button', });
      }
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='font-syne font-bold md:text-6xl text-3xl text-center text-[#1F2229]'>Real Estate <span className='text-[#F05112]'>Cold Calling</span> Challenge? Bolka Has the Solution!</h1>
            <p className='max-w-[548px]  font-inter font-normal text-base text-center text-[#1F2229] mt-2'>These challenges have been draining your time, money, and customers—until now. With Bolka, overcome them effortlessly and focus on growing your business!</p>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_0.9fr] gap-5 w-full flex-1'>
                <div className='flex flex-col space-y-5'>
                    <div className='bg-[#EBF6FC] p-8 rounded-[3rem] flex flex-col gap-3 font-inter flex-1'>
                        <h2 className='text-[#0F73AC] text-4xl font-syne font-bold'>Regulatory Restrictions</h2>
                        <p><span className='italic font-semibold'>Challenge: </span> Navigating complex TRAI regulations and SIM-related issues can stall campaigns and risk compliance violations.</p>
                        <p><span className='italic font-semibold'>Bolka</span> ensures full compliance with TRAI and other regulatory requirements, so you can focus on selling without legal hurdles.</p>
                        <Image  src={FiveGImage} alt="FiveGImage" />
                    </div>
                    <div className='bg-[#EBF6FC] p-8 rounded-[3rem] flex flex-col gap-3 font-inter flex-1'>
                        <h2 className='text-[#0F73AC] text-4xl font-syne font-bold'>Call drop-offs</h2>
                        <p><span className='italic font-semibold'>Challenge: </span> Cold calls often feel spammy and intrusive, leading to poor customer reception and high call drop-offs.</p>
                        <p><span className='italic font-semibold'>Bolka’s</span> AI-powered calls mimic human interaction, offering personalized, conversational experiences that build trust and improve connection rates.</p>
                    </div>
                </div>

                <div className='flex flex-col space-y-5 flex-1'>
                    <div className='bg-[#FFF1DE] p-8 rounded-[3rem] flex flex-col gap-3 font-inter flex-1'>
                        <h2 className='text-[#E48B1E] text-4xl font-syne font-bold'>DND Compliance</h2>
                        <p><span className='italic font-semibold'>Challenge: </span> Reaching potential customers without violating Do-Not-Disturb policies.</p>
                        <p><span className='italic font-semibold'>Bolka’s</span> AI system automatically filters and manages DND preferences, ensuring your calls stay compliant, maintaining high engagement rates.</p>
                    </div>
                    <div className='bg-[#F6F6F6] p-8 rounded-[3rem] flex flex-col gap-3 font-inter flex-1'>
                        <h2 className='text-[#5E6061] text-4xl font-syne font-bold'>Human Resource Limitations</h2>
                        <p><span className='italic font-semibold'>Challenge: </span> Managing a sales team involves high training costs, fixed salaries, which eat into profits.</p>
                        <p>With <span className='italic font-semibold'>Bolka,</span> replace or augment your team with Bolka’s AI Caller, which operates 24/7 with consistent performance, zero training needs.</p>
                        <Image src={HumanResource} alt="HumanResource" />
                    </div>
                </div>

                <div className='flex flex-col  md:col-span-2 md:flex-row md:gap-5 lg:col-span-1 lg:flex-col space-y-5 md:space-y-0 flex-1 '>
                    <div className='bg-[#F6F6F6] p-8 rounded-[3rem] flex flex-col gap-3 font-inter flex-1'>
                        <h2 className='text-[#5E6061] text-4xl font-syne font-bold'>Scaling  Issues</h2>
                        <p><span className='italic font-semibold'>Challenge: </span> Initiating large-scale campaigns quickly is nearly impossible with traditional methods, leading to missed opportunities.</p>
                        <p>With <span className='italic font-semibold'>Bolka,</span> scale your outreach instantly without compromising quality. Run high-volume campaigns seamlessly, saving time and maximizing impact.</p>
                        <Image src={colorPattern} alt="colorPattern"/>
                    </div>
                    <div className='bg-[#FFF1DE] p-8  rounded-[3rem] flex flex-col gap-3  font-inter flex-1'>
                        <h2 className='text-[#E48B1E] text-4xl font-syne font-bold'>No Reports</h2>
                        <p><span className='italic font-semibold'>Challenge: </span> Limited insights into call performance.</p>
                        <p><span className='italic font-semibold'>Bolka</span> provides in-depth performance analytics giving you actionable insights to refine strategies and improve ROI.</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 mt-10 max-sm:flex-col max-sm:w-full'>
                <CustomButton
                    title={
                        <>
                            <span className="hidden max-sm:inline">Try bolka today</span>
                            <span className="inline max-sm:hidden">Say goodbye to cold calling—experience the power of Bolka today</span>
                        </>
                    }
                    variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleColdCallingSection()}/>
                <CustomButton title="Try demo Now" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
            </div>
        </div>
    )
}

export default ColdCalling