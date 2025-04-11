import React from 'react'
import { Fragment } from 'react';
import HindiMaleVoice from '@/assets/Images/Realestate/HindiMaleVoice.png'
import ReceiveCallModal from './ReceiveCallModal';
import { useState } from 'react';
import Image from 'next/image';
const RealEstateVoice = () => {
    const [callModal, setCallModal] = useState(false);

    const handleCallModal = () =>{
        setCallModal(true)
    }

    return (
        <Fragment>
            <ReceiveCallModal setCallModal={setCallModal} callModal={callModal}/>
            <div className='border-2 border-gray-300 p-5 rounded-3xl'>
                <h2 className='text-xl font-semibold'>Hindi</h2>
                <div className='flex gap-5 mt-3'>
                    <div className='border border-gray-300 rounded-[32px] max-w-[200px] overflow-hidden bg-[#F4F3F3]'>
                        <Image src={HindiMaleVoice} alt="HindiMaleVoice" />
                        <div className='p-1.5'>
                            <div className='p-3'>
                                <h2 className='font-semibold text-xl'>Aditya</h2>
                                <p className='text-[#475467]'>Hindi</p>
                            </div>
                            <button className='bg-[#7F56D9] text-white w-full p-2 rounded-b-3xl text-sm font-semibold transform active:scale-y-75 transition-transform' onClick={() =>handleCallModal()}>
                                Call Now
                            </button>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-[32px] max-w-[200px] overflow-hidden bg-[#F4F3F3]'>
                        <Image src={HindiMaleVoice} alt="HindiMaleVoice"/>
                        <div className='p-1.5'>
                            <div className='p-3'>
                                <h2 className='font-semibold text-xl'>Nandani</h2>
                                <p className='text-[#475467]'>Hindi</p>
                            </div>
                            <button className='bg-[#7F56D9] text-white w-full p-2 rounded-b-3xl text-sm font-semibold transform active:scale-y-75 transition-transform' onClick={() =>handleCallModal()}>
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='border-2 border-gray-300 p-5 rounded-3xl mt-5'>
                <h2 className='text-xl font-semibold'>English</h2>
                <div className='flex gap-5 mt-3'>
                    <div className='border border-gray-300 rounded-[32px] max-w-[200px] overflow-hidden bg-[#F4F3F3]'>
                        <Image src={HindiMaleVoice} alt="HindiMaleVoice"/>
                        <div className='p-1.5'>
                            <div className='p-3'>
                                <h2 className='font-semibold text-xl'>Rohan</h2>
                                <p className='text-[#475467]'>English</p>
                            </div>
                            <button className='bg-[#7F56D9] text-white w-full p-2 rounded-b-3xl text-sm font-semibold transform active:scale-y-75 transition-transform'>
                                Call Now
                            </button>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-[32px] max-w-[200px] overflow-hidden bg-[#F4F3F3]'>
                        <Image src={HindiMaleVoice} alt="HindiMaleVoice"/>
                        <div className='p-1.5'>
                            <div className='p-3'>
                                <h2 className='font-semibold text-xl'>Neha</h2>
                                <p className='text-[#475467]'>English</p>
                            </div>
                            <button className='bg-[#7F56D9] text-white w-full p-2 rounded-b-3xl text-sm font-semibold transform active:scale-y-75 transition-transform'>
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RealEstateVoice