"use client"
import React, { useState } from 'react';
import Award from '@/assets/Icon/BolkaInfo_icon/Award.png';
import AwardActive from '@/assets/Icon/BolkaInfo_icon/AwardActive.png';
import Call_back from '@/assets/Icon/BolkaInfo_icon/Call_back.png';
import Call_backActive from '@/assets/Icon/BolkaInfo_icon/Call_backActive.png';
import Call_Scheduling from '@/assets/Icon/BolkaInfo_icon/Call_Scheduling.png';
import Call_SchedulingActive from '@/assets/Icon/BolkaInfo_icon/Call_SchedulingActive.png';
import Call from '@/assets/Icon/BolkaInfo_icon/Call.png';
import CallActive from '@/assets/Icon/BolkaInfo_icon/callActive.png';
import Calling_Wifi from '@/assets/Icon/BolkaInfo_icon/Calling_Wifi.png';
import Calling_WifiActive from '@/assets/Icon/BolkaInfo_icon/Calling_WifiActive.png';
import CRM_Integration from '@/assets/Icon/BolkaInfo_icon/CRM_Integration.png';
import CRM_IntegrationActive from '@/assets/Icon/BolkaInfo_icon/CRM_IntegrationActive.png';
import Focus from '@/assets/Icon/BolkaInfo_icon/Focus.png';
import FocusActive from '@/assets/Icon/BolkaInfo_icon/FocusActive.png';
import Frame from '@/assets/Icon/BolkaInfo_icon/Frame.png';
import FrameActive from '@/assets/Icon/BolkaInfo_icon/FrameActive.png';
import Graph from '@/assets/Icon/BolkaInfo_icon/Graph.png';
import GraphActive from '@/assets/Icon/BolkaInfo_icon/GraphActive.png';
import Languages from '@/assets/Icon/BolkaInfo_icon/Languages.png';
import LanguagesActive from '@/assets/Icon/BolkaInfo_icon/LanguagesActive.png';
import Page from '@/assets/Icon/BolkaInfo_icon/Page.png';
import PageActive from '@/assets/Icon/BolkaInfo_icon/PageActive.png';
import Quality_Check from '@/assets/Icon/BolkaInfo_icon/Quality_Check.png';
import Quality_CheckActive from '@/assets/Icon/BolkaInfo_icon/Quality_CheckActive.png';
import { CustomButton } from '@/Components/Ui/Button/CustomButton';
import { motion } from 'framer-motion'
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const BolkaInfoSection = ({ freatureRef }) => {
    const { trackEvent } = useMatomo();
    const [hoverCard, setHoverCard] = useState(null);
    const router = useRouter();
    const BolkaData = [
        {
            id: 1,
            logo: Frame,
            logoActive: FrameActive,
            Name: 'Rapid Training & Scaling',
            Info: 'Trained within minutes and scaled in hours',
        },
        {
            id: 2,
            logo: Page,
            logoActive: PageActive,
            Name: 'Scalable to 1M+ Call Volume',
            Info: 'Effortlessly scale to handle over 1M calls with unmatched efficiency',
        },
        {
            id: 3,
            logo: Focus,
            logoActive: FocusActive,
            Name: 'Relevance-Focused',
            Info: 'Avoids irrelevant topics to keep discussions on track',
        },
        {
            logo: Call,
            logoActive: CallActive,
            Name: 'Professional Decorum',
            Info: 'Manages abusive calls with maturity and composure',
        },
        {
            id: 5,
            logo: Calling_Wifi,
            logoActive: Calling_WifiActive,
            Name: 'Connect with any LLM',
            Info: 'Seamlessly integrate and connect with any LLM for advanced AI capabilities',
        },
        {
            id: 6,
            logo: Call_back,
            logoActive: Call_backActive,
            Name: 'Proactive Engagement',
            Info: 'Initiates callbacks for follow-ups and pending matters',
        },
        {
            id: 7,
            logo: Award,
            logoActive: AwardActive,
            Name: 'Sales Proficiency',
            Info: 'Expertly trained for both cross-selling and up-selling opportunities',
        },
        {
            id: 8,
            logo: Languages,
            logoActive: LanguagesActive,
            Name: 'Multilingual Support',
            Info: 'Communicates in multiple languages, including major Indian dialects',
        },
        {
            id: 9,
            logo: CRM_Integration,
            logoActive: CRM_IntegrationActive,
            Name: 'Seamless CRM Integration',
            Info: 'Effortless CRM Integration for Streamlined Workflows and applications',
        },
        {
            id: 10,
            logo: Graph,
            logoActive: GraphActive,
            Name: 'In-Depth Insights',
            Info: 'Offers detailed call analysis and insights for continuous improvement',
        },
        {
            id: 11,
            logo: Quality_Check,
            logoActive: Quality_CheckActive,
            Name: 'Quality Assurance',
            Info: 'Provides call audio recordings for review and training',
        },
        {
            id: 12,
            logo: Call_Scheduling,
            logoActive: Call_SchedulingActive,
            Name: 'Call Scheduling and Automation',
            Info: 'Automate and Schedule Calls for Perfect Timing, Every Time',
        },
    ]


    const AnimationContainer = ({ children, border_color, colors, id, onClick }) => {
        return (
            // <motion.div
            //     className='p-4 bg-[#F2F1FA] rounded-3xl'
            //     onMouseOver={() => setHoverCard(id)} onMouseOut={() => setHoverCard(null)}
            //     initial={{ borderColor: border_color }}
            //     whileHover={{
            //         borderColor: colors,
            //         transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
            //     }}
            //     style={{ border: '2px solid', borderRadius: '1.5rem' }}
            // >
            //     {children}
            // </motion.div>
            <motion.div
                className="p-4 bg-[#F2F1FA] rounded-3xl border-2"
                onMouseOver={() => setHoverCard(id)}
                onMouseOut={() => setHoverCard(null)}
                initial={{ borderColor: border_color }}
                animate={hoverCard === id ? { borderColor: colors } : { borderColor: border_color }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
            >
                {children}
            </motion.div>
        );
    };

    const handleBolkaInfoSection = () => {
        window.open('https://demo.bolka.ai/', '_blank');
        trackEvent({ category: 'Home-BolkaInfo', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'TryDemoNow-Button' });
    };

    const handleContact = useCallback(() => {
        router.push("/")
        setTimeout(() => {
            router.push("/?state=contact", { scroll: false });
            trackEvent({
                category: "Home-BolkaInfo",
                action: "click-event",
                name: "ContactUs-Button",
                href: window.location.origin + "/",
            });
        }, 50);
    }, [router]);

    return (
        <div className='flex flex-col justify-center items-center' ref={freatureRef}>
            <h1 className='font-krona font-normal md:text-4xl text-2xl text-center text-[#1F2229]'>Bolka Voice AI Agent’s Capabilities</h1>
            <p className='max-w-lg font-inter font-normal text-base text-center text-[#1F2229] mt-2'>powered by Agentic AI Bolka offers multilingual support, automates workflows,
                manages situational conversations, and is trained for cross-selling, up-selling, and handling escalations</p>
            <div className='  grid md:grid-cols-3 grid-cols-1 gap-3 w-full mt-5'>
                {BolkaData.map((Bolka, index) => (
                    <AnimationContainer key={index} border_color='#F2F1FA' colors={['#D7D2FF', '#6252E1', '#D7D2FF']} id={Bolka.id}>
                        <Image src={hoverCard === Bolka.id ? Bolka.logoActive : Bolka.logo} alt={Bolka.Name} className='mb-4 h-10' />
                        <span className='font-inter font-extrabold text-xl text-[#1F2229]'>{Bolka.Name}</span>
                        <p className='font-inter font-normal text-sm text-[#1F2229]'>{Bolka.Info}</p>
                    </AnimationContainer>
                ))}
            </div>
            <div className='flex gap-5  mt-10 '>
                <CustomButton title="Contact us" variant="white-btn" onClick={() => handleContact()} />
                <CustomButton title="Try demo now" variant="orange-btn" onClick={() => handleBolkaInfoSection()} />
            </div>
        </div>
    )
}

export default BolkaInfoSection
