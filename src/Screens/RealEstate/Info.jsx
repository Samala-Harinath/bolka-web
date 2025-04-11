import React from 'react'

const Info = () => {
  return (
       <div className=' grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-5 w-full flex-1'>
                <div className='shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)] p-8 rounded-[3rem] flex flex-col font-syne text-[#181D27] text-[22px] flex-1 justify-center gap-4'>
                    <h3 className='lg:text-[48px] md:text-3xl font-bold text-[#417999] ' style={{ lineHeight: '0.9' }}>
                        <span className='font-normal font-krona'>10</span> Lakh+ Calls/day
                    </h3>
                    <p className=''>Scale your campaigns</p>
                </div>
                <div className='shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)] p-8 rounded-[3rem] flex flex-col font-syne text-[#181D27] text-[22px] flex-1 justify-center gap-4'>
                    <h3 className='lg:text-[48px] md:text-3xl font-bold text-[#417999] ' style={{ lineHeight: '0.9' }}>
                        <span className='font-normal font-krona'>90% </span>Retention Rate
                    </h3>
                    <p className=''>Customer retention rate</p>
                </div>
                <div className='shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)] p-8 rounded-[3rem] flex flex-col font-syne text-[#181D27] text-[22px] flex-1 justify-center gap-4'>
                    <h3 className='lg:text-[48px] md:text-3xl font-bold text-[#417999]' style={{ lineHeight: '0.9' }}>
                        <span className='font-normal font-krona'>99.9% </span> Uptime
                    </h3>
                    <p className=''>Uninterrupted service</p>
                </div>
            </div>
  )
}

export default Info
