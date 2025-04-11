"use client"
import React, { useState } from 'react'
import checkDnD from '@/assets/Images/Realestate/checkDnD.png'
import { useMatomo } from '@datapunt/matomo-tracker-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Image from 'next/image';
const CheckDND = () => {
    const [pnumber, setPnumber] = useState("")
    const [checkStatus, setCheckStatus] = useState(null)
    const { trackEvent } = useMatomo();

    const handleCheckDNDSection = () => {
        window.open('https://app.bolka.ai/sign-up', '_blank');
        trackEvent({ category: 'RealEstate-CheckDND', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Check multiple numbers', });
    }

    const handleDNDCheck = async () => {
        try {
            if (!pnumber) {
                toast.error("Please enter phone number");
                return;
            }
            const payload = { to_phone: pnumber };
            const response = await axios.post(`https://api.bolka.ai/dndcheck`, payload);
            setCheckStatus(response?.data?.is_dnd);
            if (response?.data?.is_dnd === null) {
                let attempts = 0;
                const interval = setInterval(async () => {
                    attempts++;
                    try {
                        const pollResponse = await axios.get(`https://api.bolka.ai/check_dnd_status?phone_number=${pnumber}`);
                        if (pollResponse?.data?.is_dnd !== null) {
                            setCheckStatus(pollResponse?.data?.is_dnd);
                            clearInterval(interval);
                        } else if (attempts >= 6) {
                            clearInterval(interval);
                            toast.error("There is something wrong, please try again later");
                        }
                    } catch (error) {
                        console.log(error);
                        clearInterval(interval);
                    }
                }, 5000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='relative w-full'>
            <div className='max-lg:bg-[#fec227]  rounded-[50px] overflow-hidden max-sm:min-h-[250px]'>
                <Image src={checkDnD} alt='checkDnD' className=' object-contain w-full h-auto  sm:block hidden' />
                <div className='absolute inset-0 flex justify-start flex-col items-center gap-5 lg:gap-10  p-10 ml-auto text-[#2E2F32] w-full'>
                    <h2 className=' text-xl sm:text-3xl lg:text-6xl   font-bold font-syne sm:w-full lg:max-w-3xl text-center'>Ckeck if the number is DND or not</h2>
                    <div className='bg-white flex gap-2 p-2 rounded-[2.2rem] overflow-hidden '>
                        <input type="number" className=' px-2 outline-none md:min-w-[400px]  w-40 placeholder:font-medium font-medium text-xl' onChange={(e) => setPnumber(e.target.value)} />
                        <button className='px-3 md:py-8 md:px-[25px] rounded-[1.8rem] md:text-xl  shadow-[inset_0_40px_80px_rgba(234,172,95,1)] hover:shadow-[inset_0_40px_80px_rgba(234,172,95,0.5)] flex  gap-2 items-center font-medium font-syne text-nowrap' onClick={() => handleDNDCheck()} >
                            Check now
                        </button>
                    </div>
                    {checkStatus === "N" && <p className='text-sm md:text-xl w-full font-medium text-center'><span className='font-bold'> Act fast </span>—This number isn’t on DND yet!</p>}
                    {checkStatus === "Y" && <p className='text-xl w-full font-medium text-center'><span className='font-bold'> Oops! </span>—This number is on DND</p>}
                </div>
            </div>
            <div className='flex justify-center items-center gap-6 lg:absolute max-lg:mt-5 bottom-0 right-0 bg-white rounded-[3rem]'>
                <button className=' p-3 md:py-8 md:px-[90px] rounded-[2.2rem] max-lg:w-full md:text-xl shadow-[inset_0_40px_80px_rgba(234,172,95,1)] hover:shadow-[inset_0_40px_80px_rgba(234,172,95,0.5)] flex  gap-2 items-center justify-center font-medium font-syne' onClick={() => handleCheckDNDSection()} >
                    Check multiple numbers
                </button>
            </div>
        </div>
    )
}

export default CheckDND