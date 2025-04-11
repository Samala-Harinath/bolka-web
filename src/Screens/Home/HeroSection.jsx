"use client"
import React from 'react'
import Piramal_Revanta from '../../assets/Images/Piramal_Revanta.svg'
import Hdfc_Fund from '../../assets/Images/Hdfc_Fund.svg'
import Phone_logo from '../../assets/Images/Phone_logo.svg'
import Phillip_Capital from '../../assets/Images/Phillip_Capital.svg'
import HDFC_Ergo_logo from "../../assets/Images/HDFC_Ergo_logo.svg";
import { motion, useAnimation } from 'framer-motion'
import { CustomButton } from '../../Components/Ui/Button/CustomButton'
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Image from 'next/image'
import { useBrochure } from '@/components/Brochures/BrochureProvider'
const HeroSection = () => {
    const { trackEvent } = useMatomo();
    const { brochuresToggle, setBrochuresToggle } = useBrochure();
    const handleHeroSection = (val) => {
        if (val === 1) {
            window.open('https://demo.bolka.ai/', '_blank');
            trackEvent({ category: 'Home-Hero', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'Phone-Button', });
        } else if (val === 2) {
          window.open('https://demo.bolka.ai/', '_blank');
          trackEvent({ category: 'Home-Hero', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'Demo-Button', });
        }else if (val === 3){
            window.open('https://app.bolka.ai/sign-up', '_blank');
            trackEvent({ category: 'Home-Hero', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'singup-Button', });
        };
      }
    const items = [
        {
            src: Phillip_Capital,
            alt: 'Phillip_Capital',
        },
        {
            src: Piramal_Revanta,
            alt: 'Piramal Revanta',
        },

        {
            src: HDFC_Ergo_logo,
            alt: 'HDFC_Ergo_logo',
        },
        {
            src: Hdfc_Fund,
            alt: 'Hdfc_Fund',
        },
    ];

    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className='flex justify-center items-center flex-col max-w-5xl gap-10 w-full  mt-20  '>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onClick={()=>setBrochuresToggle(true)}
                className='flex flex-row gap-3  border rounded-[10px] border-[#F7BC37] p-1  max-w-md  justify-center items-center cursor-pointer'>
                <div className='flex  gap-1 items-center justify-center  bg-gradient-to-r from-[#F9DBAF] to-[#FEF6EE] sm:border-[#D0D5DD] max-sm:border-[#ffb395] rounded-md py-0.5 px-2 max-sm:bg-[#fff2e6]  max-sm:w-full '>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, repeatDelay: 1, restSpeed: 1 }}
                        
                        className='h-2 w-2 my-1 rounded-full bg-[#fdead7] flex justify-center items-center '>
                        <motion.div
                            className='bg-[#ef6820] rounded-full h-[5px] w-[5px]'>
                        </motion.div>
                    </motion.div>
                    <span className='flex justify-center items-center font-inter font-bold   text-sm text-[#344054] text-center'>Download Bolka Brochure</span>
                </div>
                <div className='flex justify-center  items-center '>
                    <ArrowRight size={16} className='text-[#F7BC37] mr-2 ' />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className=''>
                <h1 className='font-krona font-normal text-6xl  text-[#101828] text-center leading-tight max-md:text-3xl'>
                    AI-Powered <span className=' bg-[#cce6f6] rounded-3xl px-3'>Contact </span>
                    <span className='bg-[#cce6f6] rounded-3xl px-3'>Center,</span> For Enterprises and Small Businesses
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className='felx max-w-xl'>
                <h2 className='font-inter font-normal text-lg text-[#475467] text-center  '>
                    With  <span className='font-bold'> Agentic AI,</span> Bolka goes beyond calls by automating workflows and orchestrating tasks across your systems,
                    delivering unmatched operational efficiency.
                </h2>
            </motion.div>
            <div className='flex items-center gap-2 '>
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}>
                    <CustomButton title="Demo" variant="white-btn" icon={<ArrowUpRight size={20} />} className='md:py-3 py-2' href={"https://demo.bolka.ai/"}  onClick={() => handleHeroSection(2)} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <CustomButton title="Sign up" variant="orange-btn" className='md:py-3 py-2' href={"https://app.bolka.ai/sign-up"}     onClick={() => handleHeroSection(3)}   />
                </motion.div>
            </div>

            <div
                className='flex flex-col justify-center items-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={() => handleHeroSection(1)} 
                    className='flex relative  rounded-full  h-16 w-16 justify-center bg-radial-center items-center cursor-pointer'>
                   <div className="flex justify-center animate-ping bg-radial-center rounded-full bg-[#f9fafb] h-16 w-16 absolute" />

                    <Image  src={Phone_logo} alt="Phone_logo" className='z-10' />
                </motion.div>
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7 }}
                    className='bg-[#f9fafb] font-inter text-[10px] px-2 text-[#344054] font-medium mt-7 border rounded-md border-gray-300 '>See it in action!</motion.span>
            </div>
        </div >
    )
}

export default HeroSection
