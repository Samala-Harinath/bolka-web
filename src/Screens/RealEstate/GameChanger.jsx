"use client"
import React from 'react'
import gameChangerbg from '@/assets/Images/Realestate/gameChangerbg.svg'
import businesManHoldinghouse from '@/assets/Images/Realestate/businesManHoldinghouse.svg'
import { CustomButton } from '@/components/Ui/Button/CustomButton';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Image from 'next/image';
const GameChanger = ({ setDemoToggle }) => {
    const { trackEvent } = useMatomo(); 
    const handleGameChangerSection = () => {
           window.open('https://demo.bolka.ai/', '_blank');
           trackEvent({ category: 'RealEstate-GameChanger', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'Upgrade your real estate game—start with Bolka today', });
     }
     const handletoggle =()=>{
        setDemoToggle(true)
        trackEvent({ category: 'RealEstate-GameChanger', action: 'click-event',  name: ' Demo-button', });
      }
    return (
        <div className='flex flex-col justify-center items-center gap-20'>
            <div className=' grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-5 w-full flex-1'>
                <div className='shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)] p-8 rounded-[3rem] flex flex-col font-syne text-[#181D27] text-2xl flex-1 justify-center gap-4'>
                    <h3 className='lg:text-[50px] md:text-3xl font-bold text-[#417999] ' style={{ lineHeight: '0.9' }}>
                        <span className='font-normal font-krona'>10</span> Lakh+ Calls/day
                    </h3>
                    <p className=''>Scale your campaigns</p>
                </div>
                <div className='shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)] p-8 rounded-[3rem] flex flex-col font-syne text-[#181D27] text-2xl flex-1 justify-center gap-4'>
                    <h3 className='lg:text-[50px] md:text-3xl font-bold text-[#417999] ' style={{ lineHeight: '0.9' }}>
                        <span className='font-normal font-krona'>90% </span>Retention Rate
                    </h3>
                    <p className=''>Customer retention rate</p>
                </div>
                <div className='shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)] p-8 rounded-[3rem] flex flex-col font-syne text-[#181D27] text-2xl flex-1 justify-center gap-4'>
                    <h3 className='lg:text-[50px] md:text-3xl font-bold text-[#417999]' style={{ lineHeight: '0.9' }}>
                        <span className='font-normal font-krona'>99.9% </span> Uptime
                    </h3>
                    <p className=''>Uninterrupted service</p>
                </div>
            </div>

            <div>
                <div className='lg:block hidden '>
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 ">
                        <div className="  flex flex-col justify-between  relative flex-1">
                            <div className="w-full p-6 absolute  ">
                                <h2 className="text-[42px] md:text-6xl font-bold text-[#0F73AC] leading-none font-syne ">
                                    A Game-Changer <br /> for Developers <br /> and Agents
                                </h2>
                            </div>
                            <Image src={gameChangerbg} alt="gameChangerbg" className="w-full h-auto "/>
                            <div className='absolute bottom-0  w-full grid grid-cols-2 gap-5  font-syne '>
                                <div className='p-8 flex justify-center '>
                                    <Image src={businesManHoldinghouse} alt="businesManHoldinghouse" className='   w-full'/>
                                </div>
                                <div className=' flex items-end  pt-8'>
                                    <div className="bg-[#FFF4E6] p-10 rounded-[50px] text-[#E48B1E] font-semibold text-[40px] leading-none h-full ">
                                        Personalised WhatsApp updates
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 font-syne">
                            <div className="bg-[#FFF4E6] p-8 rounded-[50px] text-[#E48B1E] font-semibold text-[40px] leading-none ">
                                Quickly connect with potential buyers
                            </div>
                            <div className="bg-[#FFF4E6] p-8  rounded-[50px] text-[#E48B1E] font-semibold text-[40px] leading-none">
                                Optimize budgets and maximize ROI
                            </div>
                        </div>
                    </div>
                </div>


                <div className='lg:hidden block'>
                    <div className="grid md:grid-cols-2 gap-5 w-full font-syne">
                        <div className="md:col-span-2 col-span-1 bg-[#E0E7EB] rounded-[3rem] border p-10">
                            <h2 className="text-3xl md:text-[63px] font-bold text-[#0F73AC] leading-none font-syne ">
                                A Game-Changer for Developers and Agents
                            </h2>
                        </div>
                        <div className="bg-[#FFF4E6] p-10 rounded-[50px] text-[#E48B1E] font-semibold text-3xl md:text-[40px] leading-none ">
                            Quickly connect with potential buyers
                        </div>
                        <div className=" bg-[#E0E7EB] border p-10 rounded-[50px] ">
                            <Image src={businesManHoldinghouse} alt="businesManHoldinghouse" className='object-contain w-full'/>
                        </div>
                        <div className="bg-[#FFF4E6] p-10  rounded-[50px] text-[#E48B1E] font-semibold text-3xl md:text-[40px] leading-none">
                            Personalised WhatsApp updates
                        </div>
                        <div className="bg-[#FFF4E6] p-10  rounded-[50px] text-[#E48B1E] font-semibold text-3xl md:text-[40px] leading-none">
                            Optimize budgets and maximize ROI
                        </div>
                    </div>
                </div>


                <div className='flex gap-5 mt-10 w-full justify-center max-sm:flex-col '>
                    <CustomButton
                        title={
                            <>
                                <span className="hidden max-sm:inline">Try bolka today</span>
                                <span className="inline max-sm:hidden">Upgrade your real estate game—start with Bolka today </span>
                            </>
                        }
                        variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleGameChangerSection()}/>
                    <CustomButton title="Try demo now" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
                </div>
            </div>
        </div>
    )
}

export default GameChanger