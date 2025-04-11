import React from 'react';
import startSeeingImg from '@/assets/Images/Realestate/startSeeingImg.png'
import Image from 'next/image';
const SeeingResult = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='font-syne font-bold md:text-6xl text-2xl text-center text-[#1F2229]'>Start Seeing Results Today</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full flex-1'>
                <div className='flex flex-col space-y-5'>
                    <div className='bg-[rgb(246,246,246)] p-7 rounded-[3rem] flex flex-col font-semibold  font-syne text-[#5E6061] text-2xl flex-1'>
                        <h3 >Generate</h3>
                        <h2 className='bg-gradient-to-r from-[#A7A6A4]  to-[#333232] to-80% text-transparent bg-clip-text text-3xl md:text-[63px] leading-none font-krona font-normal max-w-max'>2x</h2>
                        <p>more leads in half the time</p>
                    </div>
                    <div className='bg-[rgb(246,246,246)] p-7 rounded-[3rem] flex flex-col font-semibold  font-syne text-[#5E6061] text-2xl flex-1'>
                        <h3 >Scale up to</h3>
                        <h2 className='bg-gradient-to-r from-[#A7A6A4] to-[#333232] to-80% text-transparent bg-clip-text text-3xl md:text-[63px] leading-none font-krona font-normal max-w-max'>10 <span className='font-syne font-bold'>Lakh+</span></h2>
                        <p>calls daily</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-5 flex-1 '>
                    <div className='bg-[rgb(246,246,246)] p-7 rounded-[3rem] flex flex-col font-semibold  font-syne text-[#5E6061] text-2xl flex-1'>
                        <h3 >Save up to</h3>
                        <h2 className='bg-gradient-to-r from-[#A7A6A4] to-[#333232] to-80% text-transparent bg-clip-text text-3xl md:text-[63px] leading-none font-krona font-normal max-w-max'>50%</h2>
                        <p>on outreach costs</p>
                    </div>
                    <div className='bg-[rgb(246,246,246)] p-7 rounded-[3rem] flex flex-col font-semibold  font-syne text-[#5E6061] text-2xl flex-1'>
                        <h3 >insights</h3>
                        <h2 className='bg-gradient-to-r from-[#A7A6A4] to-[#333232] to-80% text-transparent bg-clip-text text-3xl md:text-[63px] leading-none font-krona font-normal max-w-max'>100%</h2>
                        <p>call analysis and reporting</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-5 flex-1 md:col-span-2 lg:col-span-1'>
                    <Image src={startSeeingImg} alt='startSeeingImg' className='object-civer w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

export default SeeingResult