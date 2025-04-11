"use client"
import React from 'react';
import Freelancers_img from "@/assets/Images/Freelancers_img.svg"
import Enterprises from '@/assets/Images/Enterprises.svg';
import Developers from '@/assets/Images/Developers.svg';
import SMEs from '@/assets/Images/SMEs.svg';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
const AiCaller = ({ item }) => {

    const data = [
        {
            id: 1,
            title: 'Enterprises',
            description: 'Bolka integrates seamlessly with your CRM, databases, internal applications, and Application Databases enabling personalized calls for customer engagement, lead follow-ups, and workflow automation.',
            imageSrc: Enterprises,
        },
        {
            id: 2,
            title: 'Small & Medium Businesses',
            description: 'Bolka empowers Small and Medium Enterprises (SMEs) by automating both inbound and outbound calls, streamlining customer communication, and reducing operational costs. With its Voice AI Agent and Agentic AI, SMEs can handle large call volumes, deliver personalized interactions, and enhance customer satisfaction, all while saving time and resources.',
            imageSrc: SMEs,
        },
        {
            id: 3,
            title: 'Freelancers',
            description: 'As a freelancer, managing client communication is key to success. Bolka acts as your personal AI assistant, handling both incoming and outgoing calls, so you never miss an opportunity.',
            imageSrc: Freelancers_img,
        },
        {
            id: 4,
            title: 'Developers',
            description: 'Bolka offers powerful APIs and customization tools to integrate AI calling capabilities directly into your systems.',
            imageSrc: Developers,
        },
    ];

    const selectedItem = data.find((d) => d.id === item);

    if (!selectedItem) {
        return <div>Item not found</div>;
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div key={selectedItem?.title} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: 'easeInOut' }} className='flex md:flex-row flex-col gap-10 p-4 h-full'>
                <div className='flex flex-col justify-center w-full md:p-7 '>
                    <h2 className='font-inter font-extrabold text-xl text-start'>
                        {selectedItem?.title}
                    </h2>
                    <p className='w-full font-inter font-normal text-base text-start mt-2'>
                        {selectedItem?.description}
                    </p>
                    <a className='flex gap-2 cursor-pointer items-center mt-6 font-inter font-semibold text-[#475467] text-base text-start ' href={"https://app.bolka.ai/"} target='_blank'>
                        Get started <ArrowRight size={20} className='text-[#475467]' />
                    </a>
                </div>
                <div className='md:max-w-md md:min-h-80 w-full'>
                    <Image src={selectedItem?.imageSrc} alt={`${selectedItem?.title}_img`} className='w-full'/>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AiCaller;
