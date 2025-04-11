import React from 'react';
import RealistiPerson from '@/assets/Images/Realestate/3drealistiPerson.png';
import bolkaLogo from '@/assets/Images/Realestate/bolkaLogo.png';
import LodhaLogo from '@/assets/Images/Realestate/LodhaLogo.png';
import PiramalLogo from '@/assets/Images/Realestate/PiramalLogo.png';
import HiranandaniLogo from '@/assets/Images/Realestate/HiranandaniLogo.png';
import GodrejLogo from '@/assets/Images/Realestate/GodrejLogo.png';
import revantaLogo from '@/assets/Images/Realestate/revantaLogo.png';
import PrestigeGroupLogo from '@/assets/Images/Realestate/PrestigeGroupLogo.png';
import Image from 'next/image';
const MultipleProjects = () => {
    const CompanyLogo = ({ image, className }) => {
        return (
            <div className={`${className} shadow-[inset_0_-5px_20px_rgba(203,217,225,0.4)] rounded-[2.5rem] py-8 px-12 flex justify-center items-center flex-shrink-0`}>
                <Image src={image} alt="image-Logo" className='max-w-max'/>
            </div>
        );
    };

    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='font-syne font-bold md:text-6xl text-3xl text-center text-[#1F2229]'>One Agent,<span className='text-[#F05112]'> Multiple </span>Project</h1>

            <div className='  overflow-auto w-full shadow-[inset_0_-5px_20px_rgba(203,217,225,0.4)] p-8 rounded-[3rem] scroll-container'>
                <div className='  flex items-center font-syne text-[#181D27] text-2xl flex-1 justify-center min-w-[70rem]  gap-4  pt-20  overflow-hidden'>
                    <div className='flex justify-center items-center gap-2 relative h-[500px] '>

                        <div className='flex justify-start items-start flex-col -top-11 absolute right-10'>
                            <CompanyLogo image={revantaLogo} className={"!p-8 min-w-min"} />
                            <div className='mr-10'>
                                <svg width="200" height="100%" viewBox="15 75 200 120">
                                    <path id="curve4" d="M 210 195 Q 210 90 160 80" stroke="black" fill="transparent" strokeWidth="2" />
                                    <circle r="5" fill="orange">
                                        <animateMotion repeatCount="indefinite" dur="2s">
                                            <mpath href="#curve4" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                            </div>
                        </div>

                        <div className='w-full flex absolute right-[352px] top-[94px]'>
                            <CompanyLogo image={PrestigeGroupLogo} className={"mr-1"} />
                            <div className='mt-2 '>
                                <svg width="230" height="130" viewBox="20 30 230 130">
                                    <path id="curve6" d="M 250 140 Q 160 20 20 70" stroke="black" fill="transparent" strokeWidth="2" />
                                    <circle r="5" fill="orange">
                                        <animateMotion repeatCount="indefinite" dur="2s">
                                            <mpath href="#curve6" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                            </div>
                        </div>

                        <div className='flex items-start flex-col absolute right-[110px] top-[210px] '>
                            <div className='mt-2 ml-32 '>
                                <svg width="310" height="100%" viewBox="0 110 310 150">
                                    <path id="curve5" d="M 310 120 Q 90 100 5 255" stroke="black" fill="transparent" strokeWidth="2" />
                                    <circle r="5" fill="orange">
                                        <animateMotion repeatCount="indefinite" dur="2s">
                                            <mpath href="#curve5" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                            </div>
                            <CompanyLogo image={GodrejLogo} className={"py-11"} />
                        </div>



                        <div className='relative flex flex-col justify-center items-center mt-12'>
                            <Image src={RealistiPerson} alt="RealistiPerson" className='w-24'/>
                            <Image src={bolkaLogo} alt="bolkaLogo" className='w-[57px] absolute top-1'/>
                            <h2 className='text-[#0B5B89] text-[24px] font-syne'>Bolka AI Agent</h2>
                        </div>

                        <div className='flex gap-2 absolute left-24 top-[72px]'>
                            <div>
                                <svg width="300" height="100%" viewBox="20 60 300 130">
                                    <path id="curve" d="M 20 190 Q 120 10 320 90" stroke="black" fill="transparent" strokeWidth="2" />
                                    <circle r="5" fill="orange">
                                        <animateMotion repeatCount="indefinite" dur="2s">
                                            <mpath href="#curve" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                            </div>
                            <CompanyLogo image={LodhaLogo} className={"mb-5"} />
                        </div>

                        <div className='flex items-end flex-col absolute left-[108px] top-[170px] '>
                            <div className='mt-2'>
                                <svg width="400" height="100%" viewBox="20 65 420 120" className='mr-20'>
                                    <path id="curve2" d="M 440 180 Q 300 10 20 100" stroke="black" fill="transparent" strokeWidth="2" />
                                    <circle r="5" fill="orange">
                                        <animateMotion repeatCount="indefinite" dur="2s" keyPoints="1;0" keyTimes="0;1">
                                            <mpath href="#curve2" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                            </div>
                            <CompanyLogo image={PiramalLogo} className={"mb-5"} />
                        </div>

                        <div className='justify-start items-end absolute left-[112px] top-[220px]'>
                            <div className='relative'>
                                <svg width="165" height="100%" viewBox="40 50 165 140">
                                    <path id="curve3" d="M 40 60 Q 180 50 200 190" stroke="black" fill="transparent" strokeWidth="2" />
                                    <circle r="5" fill="orange">
                                        <animateMotion repeatCount="indefinite" dur="2s">
                                            <mpath href="#curve3" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                            </div>
                            <CompanyLogo image={HiranandaniLogo} className={"mb-5 h-28 ml-20"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultipleProjects;