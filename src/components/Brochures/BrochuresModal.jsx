"use client"
import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { CustomButton } from '../../components/Ui/Button/CustomButton';
import { useBrochure } from './BrochureProvider';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BrochureIcon from '@/assets/Images/BrochureIcon.png'
import successIcon from "@/assets/Images/successIcon.png"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 
const BrochuresModal = () => {
    const { brochuresToggle, setBrochuresToggle } = useBrochure();
    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const handleBrochuresToggle = () => {
        setBrochuresToggle(true)
    }
    const onSubmit = async (data) => {
        try {
            setLoader(true);
            const { name, email } = data;
            const responsive = await axios.post(`${baseUrl}sendemailwithbrochure?requestername=${name}&email=${email}&appname=LLAMAWORX`);
            if (responsive.data.success) {
                setSuccess(true);
                setLoader(false);
                reset()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoader(false)
        }

    }

    const handleDismiss = () => {
        setBrochuresToggle(false)
        setSuccess(false)
    }

    return (
        <div >
            <div className="z-[100] fixed -right-[25px] max-md:-right-[60px] top-[50%] bg-[#EF6820]
             max-md:text-sm text-white py-2 max-md:py-1 px-3 rotate-90 cursor-pointer rounded-b-lg" onClick={() => handleBrochuresToggle()}>
             Brochure
            </div>
            {brochuresToggle &&
                <div>

                    {success ?
                        <div id="default-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden h-full fixed top-0 right-0 left-0 bottom-0 z-[1000] flex justify-center items-center w-full md:inset-0  max-h-full bg-[rgba(0,0,0,0.8)]">
                            <div className="relative w-full max-w-md mx-3 max-h-full">
                                <div className="relative bg-[#FFFFFF] rounded-xl shadow p-5 border-[#D0D5DD]">
                                    <div className='flex justify-between '>
                                        <Image src={successIcon} alt="successIcon" height={40} width={40} />
                                        <p className='font-semibold text-black text-2xl'>Download Successful</p>
                                        <MdClose size={25} color='#85888E' onClick={() => handleDismiss()} className='cursor-pointer' />
                                    </div>
                                    <p className=' text-center py-5 text-black text-sm'>The brochure has been successfully sent to your provided email address.</p>
                                    
                                </div>
                            </div>
                        </div>
                        :
                        <div id="default-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden h-full fixed top-0 right-0 left-0 bottom-0 z-[1000] flex justify-center items-center w-full md:inset-0  max-h-full bg-[rgba(0,0,0,0.8)]">
                            <div className="relative w-full max-w-md max-h-full ">
                                <div className="relative bg-[#FFFFFF] rounded-3xl shadow p-5 border border-[#D0D5DD]">
                                    <div className='absolute right-4 top-2 '>
                                        <MdClose size={25} color='#85888E' onClick={() => setBrochuresToggle(false)} className='cursor-pointer' />
                                    </div>
                                    <div className=' flex justify-center '>
                                        <Image src={BrochureIcon} alt="BrochureIcon" height={40} width={40}/>
                                    </div>
                                    <p className='font-semibold text-start py-5 text-[#101828] font-inter text-sm'>Fill in your details to get immediate access to our product brochure</p>
                                    <div className="modal-content text-center  flex justify-center items-center gap-2 flex-col">
                                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                                            <div className='flex flex-col items-start mb-4 text-black'>
                                                <label htmlFor="name" className='font-medium font-inter text-sm mb-2'>Name
                                                   <span className='text-[#E04F16]'>*</span></label>
                                                <input
                                                    type='text'
                                                    id='name'
                                                    placeholder=' Your name'
                                                    className='placeholder:text-base placeholder:font-inter placeholder:text-[#717680] text-black  p-2 w-full  outline-none rounded-lg focus:border-blue-500 border-gray-300 border-2'
                                                    {...register('name', { required: true })}
                                                />
                                                {errors.name && <p className='text-red-600 my-2 font-semibold'>Name is require.</p>}
                                            </div>
                                            <div className='flex flex-col items-start text-black '>
                                                <label htmlFor="email"  className='font-medium font-inter text-sm mb-2'>Email
                                                <span className='text-[#E04F16]'>*</span></label>
                                                <input
                                                    type='text'
                                                    id='email'
                                                    name='email'
                                                    placeholder='you@company.com'
                                                    className= 'placeholder:text-base placeholder:font-inter placeholder:text-[#717680] text-black outline-none p-2 w-full  rounded-lg  focus:border-blue-500 border-gray-300 border-2'
                                                    {...register('email', { required: true })}
                                                />
                                                {errors.email && <p className='text-red-600 my-2 font-semibold'>Email is require.</p>}
                                            </div>
                                            <div className='justify-between items-center gap-2 flex mt-5 w-full'>

                                                
                                                        <button className='flex-1 rounded-lg bg-white text-[#414651] border border-gray-300 h-10 font-semibold' onClick={() => setBrochuresToggle(false)}>Cancel</button>
                                                        {/*
                                                         <CustomButton title="Cancel" variant="white-btn" className=' flex-1 rounded-lg bg-white text-[#414651]' onClick={() => setBrochuresToggle(false)} />
                                                        */}
                                                <input type="submit" value={loader ? "Loading..." : "Download now"} className='flex items-center flex-1 transition duration-100 
                                                    h-10 justify-center font-semibold text-white  bg-[#E04F16] cursor-pointer outline-none rounded-lg '/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>

            }
        </div>
    )
}

export default BrochuresModal