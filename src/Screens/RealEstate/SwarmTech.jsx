"use client"
import React from 'react';
import MultiProjectMarketing from '../../assets/Images/Realestate/MultiProjectMarketing.png'
import LocalisedEngagement from '../../assets/Images/Realestate/LocalisedEngagement.png'
import MassiveScalability from '../../assets/Images/Realestate/MassiveScalability.svg'
import DynamicResourcellocation from '../../assets/Images/Realestate/DynamicResourcellocation.png'
import RealTimeAdjustments from '../../assets/Images/Realestate/RealTimeAdjustments.png'
import { CustomButton } from '../../Components/Ui/Button/CustomButton';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const SwarmTech = () => {
    const router=useRouter();
    const { trackEvent } = useMatomo(); 
    const handleSwarmTechSection = () => {
           window.open('https://demo.bolka.ai/', '_blank');
           trackEvent({ category: 'RealEstate-SwarmTech', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'Turn cold leads into hot deals—start using Bolka today', });
     }

     const handleContact = useCallback(() => {
        router.push ("/",{ scroll: false })             
               setTimeout(() => {
                
                router.push("/?state=contact", { scroll: false });
             
                 trackEvent({
                   category: "RealEstate-SwarmTech",
                   action: "click-event",
                   name: "Talk to us-Button",
                   href: window.location.origin + "/",
                 });
               }, 50);
             }, [router]);

    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className='font-syne font-bold md:text-6xl text-4xl text-center text-[#1F2229]'>How <span className='text-[#F05112]'>SwarmTech</span> Transforms Real Estate Marketing </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 w-full font-syne font-bold mt-10">
                {/* Massive Scalability */}
                <div className='p-4 md:p-8 col-span-full lg:col-span-2 rounded-3xl md:rounded-[50px] bg-[#FFF4E6] flex max-md:flex-col justify-between max-md:items-center gap-3 md:gap-5'>
                    <h2 className='text-[#E48B1E] text-2xl  lg:text-[34px] leading-none max-md:text-center'>Massive Scalability</h2>
                    <Image className='' src={MassiveScalability} alt="MassiveScalability"/>
                </div>

                {/* Multi-Project Marketing */}
                <div className='p-4 md:p-8 col-span-full lg:col-span-2 rounded-3xl md:rounded-[50px] bg-[#FFF4E6] flex max-md:flex-col  justify-between max-md:items-center  gap-3 md:gap-5'>
                    <h2 className='text-[#E48B1E] text-2xl  lg:text-[34px] leading-none max-md:text-center'>Multi-Project Marketing</h2>
                    <Image className='  ' src={MultiProjectMarketing} alt="MultiProjectMarketing"/>
                </div>

                {/* Localised Engagement */}
                <div className='p-4 md:p-8 col-span-full lg:col-span-1 rounded-3xl md:rounded-[50px] bg-[#FFF4E6] flex max-md:flex-col lg:flex-col  justify-between max-md:items-center gap-3 md:gap-5 h-full'>
                    <h2 className='text-[#E48B1E] text-2xl lg:text-[34px] leading-none max-md:text-center'>Localised Engagement</h2>
                   <Image className='  ' src={LocalisedEngagement} alt="LocalisedEngagement"/>
                </div>

                {/* Dynamic Resource Allocation */}
                <div className='p-4 md:p-8 col-span-full lg:col-span-2 rounded-3xl md:rounded-[50px] bg-[#FFF4E6] flex  max-md:flex-col  justify-between max-md:items-center  gap-3 md:gap-5'>
                    <h2 className='text-[#E48B1E] text-2xl lg:text-[34px] leading-none max-md:text-center'>Dynamic Resource Allocation</h2>
                   <Image className='  ' src={DynamicResourcellocation} alt="DynamicResourcellocation"/>
                </div>

                {/* Real-Time Adjustments */}
                <div className='p-4 md:p-8 col-span-full lg:col-span-1 rounded-3xl md:rounded-[50px] bg-[#FFF4E6] flex max-md:flex-col lg:flex-col justify-between max-md:items-center gap-3 md:gap-5 h-full'>
                    <h2 className='text-[#E48B1E] text-2xl  lg:text-[34px] leading-none max-md:text-center'>Real-Time Adjustments</h2>
                   <Image className=' ' src={RealTimeAdjustments} alt="RealTimeAdjustments"/>
                </div>
            </div>
            <div className='flex gap-5 mt-10 max-sm:flex-col max-sm:w-full'>
                <CustomButton title="Talk to Us" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handleContact()} />
                <CustomButton 
                title={
                    <>
                        <span className="hidden max-sm:inline">Try bolka today</span>
                        <span className="inline max-sm:hidden">Turn cold leads into hot deals—start using Bolka today</span>
                    </>
                }
                variant="orange-btn" className='md:p-5 !rounded-2xl'  onClick={()=>handleSwarmTechSection()} />
            </div>
        </div>
    )
}

export default SwarmTech