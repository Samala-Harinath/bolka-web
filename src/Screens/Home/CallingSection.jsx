"use client"
import React from 'react'
// import Calling_dig from '../../assets/Digram/Calling_dig.png';

import PhoneRing from '@/assets/Digram/PhoneRing.png';
import bolkaLogo from '@/assets/Digram/bolkaLogo.png';
import databaseIcon from '@/assets/Digram/databaseIcon.png';
import globeIcon from '@/assets/Digram/globeIcon.png';
import serverIcon from '@/assets/Digram/serverIcon.png';
import rightTop from '@/assets/Digram/rightTop.png';
import rightMiddle from '@/assets/Digram/rightMiddle.png';
import rightBottom from '@/assets/Digram/rightBottom.png';
import leftTop from '@/assets/Digram/leftTop.png';
import leftMiddle from '@/assets/Digram/leftMiddle.png';
import leftBottom from '@/assets/Digram/leftBottom.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
const CallingSection = () => {

    const revealVariants = {
        hidden: { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        visible: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };

    const revealRightToLeft = {
        hidden: { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
        visible: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };


    return (
        <div className='flex flex-col justify-center w-full gap-5' >
            <div className='flex  justify-center max-md:flex-col bg-[#FEFAF5]  w-full rounded-[2rem]'>
                <div className='flex md:w-1/2 justify-center items-center md:px-10 px-5'>
                    <div className='flex justify-center p-5 w-full bg-[#FEFAF5] relative'>
                        <div className='flex  justify-between gap-2   '>
                            <div className="flex flex-col justify-center h-full ">
                                <Image src={PhoneRing} alt="Phone Icon 1" className="md:h-16 md:w-16 h-10 min-w-10" />
                                <Image src={PhoneRing} alt="Phone Icon 2" className="my-4 md:h-16 md:w-16 h-10 min-w-10" />
                                <Image src={PhoneRing} alt="Phone Icon 3" className='md:h-16 md:w-16 h-10 min-w-10' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <motion.div initial="hidden" animate="visible" variants={revealVariants}>
                                    <Image
                                        src={leftTop}
                                        alt="Phone Icon 1"
                                        className="md:h-16 md:w-16 h-10 min-w-10"
                                    />
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={revealVariants}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Image
                                        src={leftMiddle}
                                        alt="Phone Icon 2"
                                        className="md:-my-5 -my-2 md:h-16 md:w-16 h-10 w-10 object-contain"
                                    />
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={revealVariants}
                                    transition={{ delay: 1 }}
                                >
                                    <Image
                                        src={leftBottom}
                                        alt="Phone Icon 3"
                                        className="md:h-16 md:w-16 h-10 min-w-10"
                                    />
                                </motion.div>
                            </div>
                            <div className='flex items-center justify-center '>
                                <Image src={bolkaLogo} alt="Middle Icon" className="z-10 md:h-16 md:w-16 h-10 min-w-10" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <motion.div initial="hidden" animate="visible" variants={revealRightToLeft}>
                                    <Image
                                        src={rightTop}
                                        alt="Phone Icon 1"
                                        className="md:h-16 md:w-16 h-10 min-w-10"
                                    />
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={revealRightToLeft}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Image
                                        src={rightMiddle}
                                        alt="Phone Icon 2"
                                        className="md:-my-5 -my-2 md:h-16 md:w-16 h-10 w-10 object-contain"
                                    />
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={revealRightToLeft}
                                    transition={{ delay: 1 }}
                                >
                                    <Image
                                        src={rightBottom}
                                        alt="Phone Icon 3"
                                        className="md:h-16 md:w-16 h-10 min-w-10"
                                    />
                                </motion.div>
                            </div>
                            <div className="flex flex-col justify-center h-full  ">
                                <Image src={serverIcon} alt="Server Icon" className='md:h-16 md:w-16 h-10 min-w-10' />
                                <Image src={globeIcon} alt="Globe Icon" className="my-4 md:h-16 md:w-16 h-10 min-w-10" />
                                <Image src={databaseIcon} alt="Database Icon" className=" md:h-16 md:w-16 h-10 min-w-10" />

                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 flex flex-col items-center justify-center md:px-24 px-5 py-10'>
                    <p className='md:text-2xl text-xl  font-inter font-normal'>
                        Bolka’s Virtual Contact Centre features <span className='text-[#F38744]'>1 to 1,000s</span> of <span className='text-[#E04F16] font-semibold'> Agentic Voice AI</span> seamlessly connected to
                        <span className='text-[#F38744]'> multiple knowledge sources</span> ,
                        enabling efficient handling of high call volumes with accurate data for superior customer satisfaction
                    </p>
                </div>
            </div>

            <div className='flex max-lg:flex-col gap-5 w-full  '>
                <div className='flex justify-center items-center bg-[#FFEDDC] rounded-[2rem]  lg:w-[60%] w-full'>
                    <div className='flex  gap-10 md:p-10 p-5  w-full '>
                        <div className='w-full md:text-[86px] text-5xl'>
                            <span className=' font-inter font-extrabold leading-none text-[#B93815]'>24/7   <span className='font-inter font-normal'>calling</span></span>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center md:px-10 '>
                            <p className='font-inter md:text-4xl text-2xl font-medium text-[#511C10] w-full '>made easy <span className='font-inter font-extrabold text-[#511C10]'>with Bolka Voice AI Agent</span> </p>
                        </div>
                    </div>
                </div>

                <div className='flex rounded-[2rem] justify-center items-center bg-[#F8F8F8] md:px-10 px-5  lg:w-[40%] w-full'>
                    <div className=''>
                        <p className='font-inter font-medium md:text-4xl text-2xl leading-none text-[#2E2F32]'>
                            Reduce <span className='font-extrabold font-inter '>per call cost</span>  by up to
                        </p>
                    </div>
                    <div className=' p-7 pr-0'>
                        <span className='w-full md:text-[86px] text-5xl font-inter font-extrabold bg-gradient-to-r from-[#1F2229] to-[#6D758F] inline-block text-transparent bg-clip-text'>60%</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CallingSection


