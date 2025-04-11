"use client"
import React from 'react';
import Real_estate from '@/assets/Icon/Real_estate.png';
import Real_estateActive from '@/assets/Icon/Real_estateActive.png';
import Healthcare from '@/assets/Icon/Healthcare.png';
import HealthcareActive from '@/assets/Icon/HealthcareActive.png';
import Education from '@/assets/Icon/Education.png';
import EducationActive from '@/assets/Icon/EducationActive.png';
import E_commerce from '@/assets/Icon/E_commerce.png';
import E_commerceActive from '@/assets/Icon/E_commerceActive.png';
import Insurance from '@/assets/Icon/Insurance.png';
import InsuranceActive from '@/assets/Icon/InsuranceActive.png';
import Banking from '@/assets/Icon/Banking.png';
import BankingActive from '@/assets/Icon/BankingActive.png';
import Customer from '@/assets/Icon/Customer.png';
import Marketing from '@/assets/Icon/marketing.png';
import Logistics from '@/assets/Icon/Logistics.png';
import Event from '@/assets/Icon/Event.png';
import Recruitment from '@/assets/Icon/Recruitment.png';
import Telecom from '@/assets/Icon/Telecom.png';
import CustomerActive from '@/assets/Icon/CustomerActive.png';
import MarketingActive from '@/assets/Icon/MarketingActive.png';
import LogisticsActive from '@/assets/Icon/LogisticsActive.png';
import EventActive from '@/assets/Icon/EventActive.png';
import RecruitmentActive from '@/assets/Icon/RecruitmentActive.png';
import TelecomActive from '@/assets/Icon/TelecomActive.png';
import { CustomButton } from '@/Components/Ui/Button/CustomButton';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
const IndustrySection = ({ productRef }) => {
  const [hoverCard, setHoverCard] = useState(false); // Fixed typo: seHoverCard -> setHoverCard
  const { trackEvent } = useMatomo();
const router=useRouter()
  const IndustryData = [
    {
      id: 1,
      logo: Real_estate,
      activeLogo: Real_estateActive,
      Name: 'Real Estate',
      Info: 'Lead Generation, Cold Calling, site visit, following up with prospects, project updates',
      link: "/real-estate"
    },
    {
      id: 2,
      logo: Healthcare,
      activeLogo: HealthcareActive,
      Name: 'Healthcare',
      Info: 'Appointment reminders, share test results, collect patient feedback',
    },
    {
      id: 3,
      logo: E_commerce,
      activeLogo: E_commerceActive,
      Name: 'E-commerce',
      Info: 'order confirmations, shipping updates, promotional calls',
    },
    {
      id: 4,
      logo: Education,
      activeLogo: EducationActive,
      Name: 'Education',
      Info: 'Follow up on enrolments, send event reminders, notify about fee deadlines',
    },
    {
      id: 5,
      logo: Banking,
      activeLogo: BankingActive,
      Name: 'Banking & Financial Services',
      Info: 'EMI reminders, fraud alerts, and new product promotions',
    },
    {
      id: 6,
      logo: Insurance,
      activeLogo: InsuranceActive,
      Name: 'Insurance',
      Info: 'policy renewal reminders, claim follow-ups, promotional calls for new insurance products',
    },
    {
      id: 7,
      logo:Customer ,
      activeLogo: CustomerActive,
      Name: 'Customer Support and Engagement',
      Info: 'Handle routine queries, instant troubleshooting, and following up on service requests.',
    },
    {
      id:8 ,
      logo:Marketing ,
      activeLogo:MarketingActive ,
      Name: 'Marketing and Sales',
      Info: 'Bolka confirms reservations, promotes special offers, and collects post-service feedback',
    },
    {
      id:9 ,
      logo:Logistics ,
      activeLogo:LogisticsActive ,
      Name: 'Logistics and Delivery',
      Info: 'Bolka sends delivery confirmations, shipment updates, and pickup reminders',
    },{
      id:10 ,
      logo:Event ,
      activeLogo:EventActive ,
      Name: 'Event Management',
      Info: 'RSVP confirmations, event updates, and post-event feedback',
    },{
      id: 11,
      logo:Recruitment ,
      activeLogo: RecruitmentActive,
      Name: 'Recruitment and Staffing',
      Info: 'Bolka schedules interviews, send updates, and notify candidates about decisions',
    },{
      id:12 ,
      logo: Telecom,
      activeLogo:TelecomActive ,
      Name: 'Telecom',
      Info: 'Bolka helps to inform customers about bill payments, service upgrades, and plan renewals',
    },
  ];



  const handleIndustry = (link) => {
    router.push(link)
    trackEvent({
      category: "Industry",
      action: "click-event",
      name: `IndustryCard-${link}`,
      href: window.location.origin + link,
    });
  };


 const handleContact = useCallback(() => {
  router.push("/");

  setTimeout(() => {
    router.push("/?state=contact", { scroll: false });

    trackEvent({
      category: "Industry",
      action: "click-event",
      name: "ContactUs-Button",
      href: window.location.origin,
    });

    setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      params.delete("state");
      const newUrl = `${window.location.pathname}?${params.toString()}`;

      router.replace(newUrl, { scroll: false }); 
    }, 1500); 
  }, 50);
}, [router, trackEvent]);

  const handleTryForFree = () => {
    window.open('https://demo.bolka.ai/', '_blank');
    trackEvent({
      category: "Industry",
      action: "click-event",
      name: "TryForFree-Button",
      href: 'https://demo.bolka.ai/',
    });
  };

  return (
    <div className='flex flex-col justify-center items-center w-full' ref={productRef}>
      <div className='max-w-md'>
        <h1 className='font-normal md:text-4xl text-2xl text-center text-[#1F2229] font-krona'>Use Cases</h1>
        <p className='text-center font-normal text-base font-inter text-[#1F2229] mt-2'>
          Bolka AI Caller empowers businesses across industries by automating telephone calls and delivering exceptional customer experiences.
        </p>
      </div>

      <div className='w-full grid md:grid-cols-3 grid-cols-1 gap-3 mt-10'>
        {IndustryData.map((industry) => (
          <div key={industry.id}
            className={`p-4 bg-[#FFF3E5] rounded-3xl cursor-pointer ${hoverCard === industry.id ? 'bg-gradient-to-r from-[#FEFAF5] to-[#FFF3E5]' : 'bg-[#FFF3E5]'}`}
            onMouseOver={() => setHoverCard(industry.id)}
            onMouseOut={() => setHoverCard(null)}
            onClick={() => handleIndustry(industry.link)} // Pass industry name for tracking
          >
            <Image src={hoverCard === industry.id ? industry.activeLogo : industry.logo} alt={industry.Name} className='mb-4 h-14 w-14'/>
            <span
              className={`font-inter font-extrabold text-xl text-[#373738] ${hoverCard === industry.id ? "text-[#DD9F15]" : "text-[#373738]"}`}
            >
              {industry.Name}
            </span>
            <p className='font-inter font-normal text-base text-[#1F2229]'>{industry.Info}</p>
          </div>
        ))}
      </div>
      <div className='flex gap-5 mt-10'>
        <CustomButton title="Contact us" variant="white-btn" onClick={handleContact} />
        <CustomButton title="Try for free" variant="orange-btn" onClick={handleTryForFree} />
      </div>
    </div>
  );
};

export default IndustrySection;