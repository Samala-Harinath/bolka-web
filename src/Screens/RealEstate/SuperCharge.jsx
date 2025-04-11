"use client"
import React from 'react'
import supercharge1 from '@/assets/Images/Realestate/supercharge1.png'
import supercharge2 from '@/assets/Images/Realestate/supercharge2.png'
import supercharge3 from '@/assets/Images/Realestate/supercharge3.png'
import supercharge4 from '@/assets/Images/Realestate/supercharge4.png'
import supercharge5 from '@/assets/Images/Realestate/supercharge5.png'
import supercharge6 from '@/assets/Images/Realestate/supercharge6.png'
import supercharge7 from '@/assets/Images/Realestate/supercharge7.png'
import supercharge8 from '@/assets/Images/Realestate/supercharge8.png'
import supercharge9 from '@/assets/Images/Realestate/supercharge9.png'
import supercharge10 from '@/assets/Images/Realestate/supercharge10.png'
import { CustomButton } from '@/Components/Ui/Button/CustomButton'
import { useState } from 'react'
import ListenVoicesModal from '@/Screens/RealEstate/Modals.jsx/ListenVoicesModal'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Image from 'next/image'
const SuperCharge = ({ setDemoToggle }) => {
  
    const [listenVoiceToggle, setListenVoiceToggle] = useState(false)
    const { trackEvent } = useMatomo(); 
      const handleSuperChargeSection = () => {
            window.open('https://app.bolka.ai/sign-up', '_blank');
            trackEvent({ category: 'RealEstate-SuperCharge', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Seize the moment, launch your telecalling business with Bolka today-Button', });       
      }
      const handletoggle =()=>{
        setDemoToggle(true)
        trackEvent({ category: 'RealEstate-SuperCharge', action: 'click-event',  name: ' Demo-button', });
      }
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <ListenVoicesModal setListenVoiceToggle={setListenVoiceToggle} listenVoiceToggle={listenVoiceToggle} />
            <h1 className='font-syne font-bold md:text-6xl text-3xl text-center text-[#1F2229]'>Supercharge Your Telemarketing with Game-Changing AI Features</h1>

            <div className='grid gap-5 grid-cols-3  w-full'>
                <div className='col-span-3 flex max-md:flex-col gap-5'>
                    <div className='md:w-1/2 w-full overflow-hidden rounded-[40px] relative flex justify-start items-center'>
                    <Image src={supercharge1} alt="supercharge1 " className='object-cover w-full '/>
                        <div className='w-1/2 absolute p-6'>
                            <p className='text-[#212121] font-syne font-bold lg:text-[38px] sm:text-2xl text-xl leading-none'>Real-time detailed call insights</p>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full overflow-hidden relative rounded-[40px] flex justify-start items-center'>
                    <Image src={supercharge2} alt="supercharge2" className='object-cover  w-full'/>
                        <div className='w-1/2 absolute  p-6'>
                            <p className='text-white font-syne font-bold lg:text-[38px] sm:text-2xl  text-xl leading-none'>High- Quality Call Recording</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-[40px]  max-md:col-span-3 '>
                    <Image src={supercharge3} alt="supercharge3" className='object-cover w-full'/>
                </div>
                <div className='p-5 bg-[#CBD9E1] rounded-[40px] max-md:col-span-3  col-span-2 flex justify-start items-center'>
                    <div className=' p-6 '>
                        <p className='text-[#212121] font-syne font-bold lg:text-[38px] sm:text-2xl  text-xl leading-none'>Indian Accent Voices</p>
                        <p className='font-bold font-syne lg:text-[24px] md:text-lg text-sm my-3'>English, Hindi, Hinglish, Marathi, Gujarati<span className='lg:text-xs text-[10px] ml-2 text-[#417999]'> More coming soon!</span></p>
                        <button className='font-syne font-bold text-[#0F73AC]' onClick={() => setListenVoiceToggle(true)}>Listen sample voices</button>
                    </div>
                </div>
                <div className='p-5 bg-[#9D95B8] rounded-[40px] max-md:col-span-3 col-span-2 flex justify-start items-center'>
                    <div className=' p-6 '>
                        <h2 className='text-white font-syne font-bold lg:text-[38px] sm:text-2xl  text-xl leading-none'>Know Your Customer’s Mood</h2>
                        <p className='text-white font-syne lg:text-[24px] md:text-lg text-sm font-bold my-3'>Positive, Neutral, Negative</p>
                    </div>
                </div>
                <div className=' rounded-[40px] max-md:col-span-3'>
                    <Image src={supercharge4} alt="supercharge4" className='object-cover w-full'/>
                </div>
                <div className='col-span-3 max-md:flex-col flex gap-5'>
                    <div className='md:w-1/2  overflow-hidden rounded-[40px] relative flex justify-start items-center'>
                    <Image src={supercharge5} alt="supercharge5" className='w-full object-cover'/>
                        <div className='w-[60%] absolute p-6'>
                            <p className='text-[#212121] font-syne font-bold lg:text-[38px] sm:text-2xl  text-xl leading-none '>Detailed Call Logs & Status Tracking</p>
                        </div>
                    </div>
                    <div className='md:w-1/2 overflow-hidden rounded-[40px] relative flex justify-start items-center'>
                    <Image src={supercharge6} alt="supercharge6" className='object-cover w-full'/>
                        <div className='w-[50%] absolute p-6'>
                            <p className='text-white font-syne font-bold lg:text-[38px] sm:text-2xl  text-xl leading-none '>Smart Follow-Up system</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-[40px] max-md:col-span-3'>
                    <Image src={supercharge7} alt="supercharge7" className='object-cover w-full'/>

                </div>
                <div className='p-5 bg-[#A4C7EF] rounded-[40px] col-span-2 max-md:col-span-3 flex justify-start items-center'>
                    <div className=' p-6 w-full'>
                        <p className='text-[#212121] font-syne font-bold lg:text-[38px] sm:text-2xl  text-xl leading-none max-sm:text-center'>Site Visit Scheduling</p>
                    </div>
                </div>
                <div className=' col-span-3 flex gap-5 max-md:flex-col'>
                    <div className='md:w-1/2 overflow-hidden rounded-[40px] relative flex justify-start items-center'>
                    <Image src={supercharge8} alt="supercharge8" className='w-full object-cover'/>
                        <div className='w-[50%] absolute p-6'>
                            <p className='text-[#212121] font-syne font-bold lg:text-[38px] sm:text-2xl  text-xl leading-none '>Call Transcription</p>
                        </div>
                    </div>
                    <div className='md:w-1/2 overflow-hidden rounded-[40px] relative flex justify-start items-center'>
                    <Image src={supercharge9} alt="supercharge9" className='object-cover w-full'/>
                        <div className='w-[50%] absolute p-6'>
                            <p className='text-white font-syne font-bold lg:text-[38px] sm:text-2xl  text-xl leading-none'>Instant Call Transfer to Human Agents</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 bg-[#FFCE73] rounded-[40px] max-md:col-span-3 col-span-2 flex justify-start items-center'>
                    <div className=' p-6 w-full'>
                        <p className='text-[#212121] font-syne font-bold lg:text-[38px] sm:text-2xl   text-xl leading-none max-sm:text-center'>Create your own Brand Voice</p>
                    </div>
                </div>
                <div className=' rounded-[40px] max-md:col-span-3'>
                    <Image src={supercharge10} alt="supercharge10" className='object-cover w-full'/>
                </div>
            </div>

            <div className='flex gap-5 mt-10 max-sm:flex-col max-sm:w-full'>
                <CustomButton title={
                    <>
                        <span className="hidden max-sm:inline">Try bolka today</span>
                        <span className="inline max-sm:hidden">Seize the moment, launch your telecalling business with Bolka today</span>
                    </>
                }

                    variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleSuperChargeSection()}/>
                <CustomButton title="Try demo now" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
            </div>


        </div>
    )
}

export default SuperCharge