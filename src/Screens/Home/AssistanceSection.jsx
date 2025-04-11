
import React from 'react'
import Profile from '@/assets/Digram/Profile.png'
import Briefcase from '@/assets/Digram/Briefcase.png'
import Happy from '@/assets/Digram/Happy.png'
import Image from 'next/image'
const AssistanceSection = () => {
    return (
        <div className='flex max-md:flex-col gap-5 w-full '>
            <div className=' flex flex-col gap-5 md:w-1/2 w-full'>
                <div className='flex gap-10 justify-between  items-center  p-6 rounded-3xl bg-[#D5EFFF] '>
                    <div>
                        <span className='font-inter font-semibold text-base text-[#0C7BBF] text-start tracking-wider'>By 2034</span>
                        <p className='font-inter font-normal md:text-xl text-lg text-[#1A1A1A]'>
                            <span className='font-semibold'>50% </span>  of the <span className='font-semibold'>population</span> will be
                            <span className='font-semibold'> freelancers </span> and <span className='font-semibold'>gig workers </span>
                        </p>
                    </div>
                    <div className='flex justify-center items-center md:min-w-20 h-20 min-w-10'>
                        <Image src={Profile} alt='Profile' />
                    </div>
                </div>

                <div className='flex gap-10 justify-between items-center  p-6 rounded-3xl bg-[#EAECF0]  '>
                    <div className=''>
                        <span className='font-inter font-semibold text-base text-[#627290] text-start tracking-wider'>By 2034</span>
                        <p className='font-inter font-normal md:text-xl text-lg text-[#1A1A1A]'>
                            1 in 3 people will manage  <span className='font-semibold'>multiple businesses </span>
                        </p>
                    </div>
                    <div className='flex justify-center items-center md:min-w-20 h-20 min-w-10 '>
                        <Image src={Briefcase} alt='Briefcase'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center md:w-1/2 w-full rounded-3xl bg-[#F2F1FA] md:p-10 p-5'>
                <div className=' '>
                    <span className='font-inter font-semibold text-base text-[#6354DB] tracking-wider'>why wait any longer?</span>
                    <p className='font-inter font-normal md:text-xl text-lg text-[#511C10] text-wrap mt-2'>
                        Get your very own <span className='font-semibold'>AI-powered personal assistant, </span>
                        so you won’t miss anything
                    </p>
                    <p className='md:w-80 font-inter font-normal md:text-xl text-lg text-[#511C10] my-2'>Claim your  <span className='font-semibold'>personal AI assistant </span> today!</p>
                    {/* <CustomButton title="Claim now" variant="white-btn" /> */}
                </div>

                <div className='flex items-end justify-end md:min-w-20  h-full'>
                    <Image src={Happy} alt="Happy" className='object-contain  md:min-w-20 min-w-10 w-20 h-20' />
                </div>
            </div>
        </div>
    )
}

export default AssistanceSection
