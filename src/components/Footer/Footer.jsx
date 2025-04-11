"use client"
import React from 'react'
import Bolka_logo from '@/assets/Images/Bolka_logo.png'
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const Footer = () => {
    const { trackEvent } = useMatomo();
const router=useRouter();

    const handleRedirection = useCallback((state, name) => {
        router.push("/")

        setTimeout(() => {
            router.push(`/?state=${state}`,{ scroll: false });

            trackEvent({
                category: "Footer",
                action: "click-event",
                name: `${name}-Button`,
                href: window.location.origin + "/",
            });
        }, 50);
    }, [router]);
    const handleFreelancerSection = (val) => {
        if (val === 1) {
            window.open('https://app.bolka.ai/', '_blank');
            trackEvent({ category: 'Footer', action: 'click-event', name: 'Dashboard', href: 'https://app.bolka.ai/', });
        } else if (val === 2) {
            router.push("/refund-policy")
            trackEvent({ category: 'Footer', action: 'click-event', name: 'refund-policy', href: window.location.origin + '/refund-policy', })
        } else if (val === 3) {
            router.push("/terms-and-conditions")
            trackEvent({ category: 'Footer', action: 'click-event', name: 'terms-and-conditions', href: window.location.origin + '/terms-and-conditions', })
        } else if (val === 4) {
            router.push("/privacy-policy")
            trackEvent({ category: 'Footer', action: 'click-event', name: 'privacy-policy', href: window.location.origin + '/privacy-policy', })
        } else if (val === 5) {
            window.open('https://llamaworx.com/', '_blank');
            trackEvent({ category: 'Footer', action: 'click-event', name: 'Llamaworx', href: 'https://llamaworx.com/', });
        } else if (val === 6) {
            trackEvent({ category: 'Footer', action: 'click-event', name: 'Pricing', });
        }
    }
    const listStyle = 'cursor-pointer max-md:text-[15px] hover:text-[#F05112]'
    return (
        <div className=' md:pt-20 pt-10 mb-10 rounded-[3rem] shadow-[inset_0_5px_20px_rgba(203,217,225,0.3)] w-full mt-24'> 
            <div className='max-w-6xl mx-auto max-md: px-5 '>
                <div className='flex justify-between gap-6 w-full flex-wrap '>
                    <div>
                        <Image src={Bolka_logo} alt="Bolka_logo" className='mb-3  cursor-pointer' onClick={() => handleRedirection(null, 'Bolka-logo')}/>
                        {/* <h2 className='max-w-86 font-inter font-normal text-base text-[#1F2229] my-5'>Ready to set up your own personalized contact center?</h2>
                        <CustomButton title="Get started" variant="orange-btn" rightIcon={<ArrowRight size={20} />} className='md:max-w-max' href={"https://app.bolka.ai/"} /> */}
                    </div>
                    {/* <div className='flex md:gap-10 gap-5'> */}
                    <div>
                        <span className='text-lg font-semibold text-[#F05112] font-syne'>Use Cases</span>
                        <ul className='space-y-4 font-inter font-normal text-base text-[#4E5056] mt-2'>
                            <li className={listStyle} onClick={() => handleRedirection("useCases", "Real Estate")}>Real Estate</li>
                            <li className={listStyle} onClick={() => handleRedirection("useCases", "Insurance")}>Insurance</li>
                            <li className={listStyle} onClick={() => handleRedirection("useCases", "Banking")}>Banking </li>
                            <li className={listStyle} onClick={() => handleRedirection("useCases", "View all")}>View all</li>
                        </ul>
                    </div>

                    <div>
                        <span className='text-lg font-semibold text-[#F05112] font-syne'>Links</span>
                        <ul className='space-y-4 font-inter font-normal text-base text-[#4E5056] mt-2'>
                            <li className={listStyle + "cursor-default"} onClick={() => handleFreelancerSection(6)}>Pricing</li>
                            <li className={listStyle} onClick={() => handleFreelancerSection(1)}>Dashboard</li>
                            <li className={listStyle} onClick={() => handleFreelancerSection(2)}>Refund Policy</li>
                            {/*
                            {pathname === "/" && <li className={listStyle} onClick={() => handleRedirection("faq", "faq")}>FAQ</li>}
                            
                            */}
                        </ul>
                    </div>
                    {/* </div> */}

                    <div>
                        <span className='font-semibold  text-lg text-[#F05112] font-syne'>Contact us</span>
                        <div className=' flex justify-between  mt-2'>
                            {/* <img src={Email} alt="Email" /> */}
                            <div className='flex flex-col'>
                                <span className='font-inter font-normal text-sm text-[#4E5056]'>Email:</span>
                                <span className='font-inter font-semibold text-[#4E5056] text-sm'>contact@bolka.ai</span>
                            </div>
                        </div>
                        {/* <div className=' flex justify-between  mt-4'>
                            <div className='flex flex-col'>
                                <span className='font-inter font-normal text-sm text-[#4E5056]'>Phone:</span>
                                <span className='font-inter font-semibold text-[#4E5056] text-sm'>+91 12345 67890</span>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className='w-full flex md:flex-row flex-col max-md justify-between mt-8 gap-6'>
                    <div className='rounded-3xl p-3 pr-16 pl-6 w-full shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)]'>
                        <h1 className='font-semibold text-xl font-syne text-[#5B5957] '>India</h1>
                        <span className='font-inter font-normal text-sm text-[#1F2229] '>NESCO IT Park, 10th Floor Building 4, Mumbai, Maharashtra 400063</span>
                    </div>

                    <div className='rounded-3xl p-3 pr-16 pl-6 w-full shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)]'>
                        <h1 className='font-semibold text-xl font-syne text-[#5B5957]'>USA</h1>
                        <span className='font-inter font-normal text-sm text-[#1F2229] '>contact.usa@bolka.ai</span>
                    </div>

                    <div className='rounded-3xl p-3 pr-16 pl-6 w-full shadow-[inset_0_-5px_20px_rgba(203,217,225,0.3)]'>
                        <h1 className='font-semibold text-xl font-syne text-[#5B5957]'>UK</h1>
                        <span className='font-inter font-normal text-sm text-[#1F2229] '>contact.uk@bolka.ai</span>
                    </div>
                </div>

                <div className='mt-10 border-t border-[#E1E4ED] p-3'>
                    <p className='font-inter text-center text-[#1F2229] max-md:text-xs'>Copyright © 2025 Bolka | Created by <a onClick={() => handleFreelancerSection(5)} className='underline cursor-pointer hover:text-[#E04F16]'>Llamaworx Software Pvt. Ltd</a>. | All Rights Reserved | {" "}
                        <a className='underline cursor-pointer hover:text-[#E04F16] ' onClick={() => handleFreelancerSection(3)}>Terms and Conditions</a> | {" "}
                        <a onClick={() => handleFreelancerSection(4)} className='underline cursor-pointer hover:text-[#E04F16]'>Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
