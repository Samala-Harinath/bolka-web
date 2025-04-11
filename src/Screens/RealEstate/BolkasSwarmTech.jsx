"use client"
import React from 'react'
import { Fragment } from 'react';
import bolkasSwamTech from '@/assets/Images/Realestate/bolkasSwamTech.jpg'
import BolkasSwarmTechrhs from '@/assets/Images/Realestate/BolkasSwarmTechrhs.svg'
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Image from 'next/image';
const BolkasSwarmTech = () => {
     const { trackEvent } = useMatomo(); 
    const handleBolkaSwarmSection = () => {
           window.open('https://app.bolka.ai/sign-up', '_blank');
           trackEvent({ category: 'RealEstate-BolkaSwarm', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Try Bolka to see the difference', });
     }
    return (
        <Fragment>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full flex-1'>
                <div className='shadow-[inset_0_-5px_20px_rgba(234,172,95,0.5)] p-8 rounded-[50px] flex flex-col  font-syne text-[#181D27] text-2xl flex-1 justify-center gap-4'>
                    <h2 className='text-xl'>Up to</h2>
                    <h3 style={{lineHeight:0.9}} className='lg:text-[50px] md:text-3xl leading-none text-[#E48B1E] font-krona'>90% Reduction</h3>
                    <p >in operational costs</p>
                </div>
                <div className='shadow-[inset_0_-5px_20px_rgba(234,172,95,0.5)] p-8 rounded-[50px] flex flex-col  font-syne text-[#181D27] text-2xl flex-1 justify-center gap-4'>
                    <h2 className='text-xl'>Up to</h2>
                    <h3 style={{lineHeight:0.9}} className='lg:text-[50px] md:text-3xl leading-none text-[#E48B1E] font-krona'>3x Faster Outreach</h3>
                    <p>in minutes, not hours</p>
                </div>
                <div className='shadow-[inset_0_-5px_20px_rgba(234,172,95,0.5)] p-8 rounded-[50px] flex flex-col  font-syne text-[#181D27] text-2xl flex-1 justify-center gap-4 '>
                    <h2 className='text-xl'>Up to</h2>
                    <h3 style={{lineHeight:0.9}} className='lg:text-[50px] md:text-3xl leading-none text-[#E48B1E] font-krona'>50% Increase</h3>
                    <p>in Conversion Rates</p>
                </div>
            </div>

            <div className=' flex max-md:flex-col  gap-5 w-full'>
                <div className='flex w-[63%]  relative overflow-hidden rounded-[50px]  justify-center items-center max-xl:w-full '>
                    <Image src={bolkasSwamTech} alt="bolkasSwamTech" className='w-full object-cover blur-xl max-md:h-[200px]' />
                    <div className='absolute p-14'>
                        <h2 className='lg:text-7xl text-2xl font-bold font-syne text-white'>Bolka's SwarmTech for Real Estate</h2>
                    </div>
                </div>
                <div className='flex md:min-w-[37%] relative max-md:flex-col   '>
                    <div className='max-md:bg-[#e0e7eb] overflow-hidden rounded-[50px] w-full max-md:max-h-[200px]'>
                        <Image src={BolkasSwarmTechrhs} alt="BolkasSwarmTechrhs" className='object-contain w-full' />
                    </div>
                    <div className='p-10 leading-none absolute '>
                        <h2 className='text-[#0B5B89] text-[34px] max-lg:text-2xl font-syne '>Handle large-scale, simultaneous campaigns across multiple projects and locations</h2>
                    </div>
                    <div className='flex  justify-center items-center gap-6  max-md:mt-5  md:absolute bottom-0 right-3  bg-white  rounded-[3rem]'>
                        <button className='py-8 px-[36px] max-md:w-full  justify-center rounded-[2.2rem] text-xl shadow-[inset_0_20px_70px_rgba(203,217,225,1)] hover:shadow-[inset_0_20px_70px_rgba(203,217,225,0.5)] flex  gap-2 items-center font-medium font-syne' onClick={() =>handleBolkaSwarmSection()}>
                            Try Bolka to see the difference
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BolkasSwarmTech