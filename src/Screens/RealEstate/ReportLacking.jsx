"use client"
import React, { useCallback } from 'react' 
import Report1 from '@/assets/Images/Realestate/Report1.png'
import Report2 from '@/assets/Images/Realestate/Report2.png'
import Report3 from '@/assets/Images/Realestate/Report3.png'
import Report4 from '@/assets/Images/Realestate/Report4.png'
import Report5 from '@/assets/Images/Realestate/Report5.png'
import Report6 from '@/assets/Images/Realestate/Report6.png'
import Report7 from '@/assets/Images/Realestate/Report7.png'
import { CustomButton } from '@/components/Ui/Button/CustomButton'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const ReportLacking = () => {
  const { trackEvent } = useMatomo();
const router =useRouter();
  const handleContact = useCallback(() => {
    router.push("/");

    setTimeout(() => {
      router.push("/?state=contact", { scroll: false });

      trackEvent({
        category: "RealEstate-BolkaInfo",
        action: "click-event",
        name: "ContactUs-Button",
        href: window.location.origin + "/",
      });
    }, 50);
  }, [router]);

  const handleReportLackingSection = () => {
    window.open('https://app.bolka.ai/sign-up', '_blank');
    trackEvent({ category: 'RealEstate-ReportLacking', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Say goodbye to cold calling—experience the power of Bolka today', });
  }
  return (
    <div className='flex flex-col justify-center items-center max-w-screen-xl gap-10'>
      <div className='flex flex-col justify-center items-center text-[#2E2F32] gap-4 '>
        <h1 className='font-syne md:text-6xl text-3xl font-bold text-center '>
          No Reports, No Control! Blind Decisions Are Killing Your Business
        </h1>
        <p className='max-w-xl text-center font-inter font-normal text-base '>
          Without detailed reports, you're flying blind—wasting leads, missing conversions, and risking compliance violations.
          Bolka’s real-time analytics and AI-powered insights put you back in control, ensuring every call counts!
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.2fr] gap-5 w-full flex-1 '>
        <div className='flex flex-col space-y-5 '>
          <div className='relative flex flex-1'>
            <Image src={Report1} alt="Report1" className='rounded-[50px] w-full object-cover' />
            <div className='absolute flex flex-col p-10'>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF] text-start'>
                Analyze customer sentiment
              </span>
              <span className=' font-syne font-bold text-2xl text-[#FAF58E]'>positive, neutral, or negative</span>
            </div>
          </div>
          <div className='relative flex flex-1 bg-[#90C9DD] rounded-[50px] overflow-hidden'>
            <Image src={Report4} alt="Report4" className=' mt-52 ml-20 '/>
            <div className='absolute p-10 flex flex-col gap-2'>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF]'>Measures KPIs</span>
              <span className='font-syne font-bold text-2xl text-[#FFFFFF] leading-none'>Calls per hour, Lead conversion rates, Response times</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 '>
          <div className='relative flex flex-col bg-[#F3F3F3] rounded-[50px] overflow-hidden'>
            <div className='p-7'>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#333536]'>Logs call with timestamped records</span>
            </div>
            <div className='mt-14 ml-5'>
              <Image src={Report3} alt="Report3" className=''/>
            </div>
          </div>
          <div className='rounded-[50px] flex flex-col justify-center items-center font-syne font-bold bg-[#FFF1DE] p-5'>
            <span className='text-4xl md:text-8xl text-[#F05112]'>Report</span>
            <p className='text-3xl md:text-5xl text-[#E48B1E]'>Lacking</p>
          </div>
          <div className='relative flex flex-1'>
            <Image src={Report7} alt="Solutions" className=' object-cover  rounded-[50px] w-full'/>
            <div className='absolute  p-7 '>
              <span className=' font-syne font-bold text-2xl md:text-4xl text-[#161616] text-start'>
                Sends reports directly to stakeholders
              </span>
            </div>
          </div>
        </div>

        <div className='grid  lg:grid-cols-1 lg:col-span-1 sm:grid-cols-2 sm:col-span-2  gap-5  '>
          <div className='relative flex flex-1'>
            <Image src={Report2} alt="Report2" className='rounded-[50px] w-full object-cover' />
            <div className='absolute p-10'>
              <span className='font-syne font-bold text-2xl md:text-4xl text-[#242424]'>
                Tracks and analyzes each call
              </span>
            </div>
          </div>
          <div className='relative flex flex-1'>
            <Image src={Report6} alt="Report6" className='rounded-[50px] w-full object-cover'/>
            <div className='absolute p-10'>
              <span className='font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF]'>
                Historical analysis
              </span>
            </div>
          </div>
          <div className='relative flex flex-1'>
            <Image src={Report5} alt="Report5" className='rounded-[50px] w-full object-cover'  />
            <div className='absolute p-10'>
              <span className='font-syne font-bold text-2xl md:text-4xl text-[#FFFFFF]'>
                Customize reports
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
          variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={() => handleReportLackingSection()} />
        <CustomButton title="Contact us" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handleContact()} />
      </div>
    </div>
  )
}

export default ReportLacking
