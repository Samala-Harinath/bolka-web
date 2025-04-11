"use client"
import React, { useState } from 'react'
import AiCaller from './AiCaller';
import { CustomButton } from '../../components/Ui/Button/CustomButton';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
const FreelancerSection = () => {
  const [item, settiem] = useState(1)
  const { trackEvent } = useMatomo();
  const router = useRouter();
  const data = [
    { id: 1, label: 'Enterprises' }, 
    { id: 2, label: 'SMEs' },
    { id: 3, label: 'Freelancers' },
    { id: 4, label: 'Developers' },
  ];

  const handleClick = (id,name) => {
    settiem(id)
      trackEvent({ category: 'Home-Freelancer', action: 'click-event', name: `Tab-${name}`, });  
    // console.log(`Div with ID ${id} clicked`);
  };
 
  const handleContact = useCallback(() => {
    router.push("/", { scroll: false });

    setTimeout(() => {
      router.push("/?state=contact", { scroll: false });

      trackEvent({
        category: "Home-Freelancer",
        action: "click-event",
        name: "ContactUs-Button",
        href: window.location.origin + "/",
      });
    }, 50);
  }, [router]);
      
  const handleFreelancerSection = () => {  
      window.open('https://demo.bolka.ai/', '_blank');
      trackEvent({ category: 'Home-Freelancer', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'TryForFree-Button', });
  }

  return (
    <div className='flex flex-col justify-center items-center  h-auto w-full '>
      <div className='flex flex-col justify-center items-center w-full  gap-3'>
        <h1 className='font-krona font-normal md:text-4xl text-2xl text-[#2E2F32] text-center'>
          Our AI Caller is Designed for Everyone
        </h1>
        <p className='max-w-md font-inter font-normal text-base text-center w-full text-[#2E2F32]'>
          From large enterprises to individual professionals, here’s how Bolka transforms communication for its users
        </p>
      </div>

      <div className='flex max-md:flex-col gap-5 w-full mt-12 '>
        <div className='grid md:grid-cols-1 grid-cols-2 gap-2'>
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className={`flex justify-center items-center md:w-48  px-10 py-4 rounded-2xl border-[#F1F3F7] cursor-pointer w-full ${item === dataItem.id ? 'bg-[#F7B27A]' : 'bg-[#F9DBAF]'}`}
              onClick={() => handleClick(dataItem.id,dataItem.label)}
            >
              <span className={`font-inter text-[#2E2F32] text-xl ${item === dataItem.id ? ' font-bold' : ' font-medium'
                }`}>
                {dataItem.label}
              </span>
            </div>
          ))}
        </div>

        <div className='flex items-center  bg-[#F6F6F6] rounded-[2rem]  w-full flex-1 overflow-hidden max-h-max'>
          <AiCaller item={item} />
        </div>
      </div>

      <div className=' flex  gap-5 mt-10'>
        <CustomButton title="Contact us" variant="white-btn" onClick={() => handleContact()} /> 
        <CustomButton title="Try for free" variant="orange-btn"   onClick={()=>handleFreelancerSection()}/>
      </div>
    </div>
  )
}

export default FreelancerSection
