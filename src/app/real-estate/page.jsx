"use client"
import React, { Fragment, useState } from 'react';
import BusinessInfo from '@/Screens/RealEstate/BusinessInfo';
import CheckDND from '@/Screens/RealEstate/CheckDND';
import ColdCalling from '@/Screens/RealEstate/ColdCalling';
import DPDPActSection from '@/Screens/RealEstate/DPDPActSection';
import GoodByeColdCalling from '@/Screens/RealEstate/GoodByeColdCalling';
import HeroSection from '@/Screens/RealEstate/HeroSection';
import LoopholesSection from '@/Screens/RealEstate/LoopholesSection';
import ReportLacking from '@/Screens/RealEstate/ReportLacking';
import SuperCharge from '@/Screens/RealEstate/SuperCharge';
import GoodByeToColdCallingOne from '@/assets/Images/Realestate/GoodByeToColdCallingOne.png';
import GoodByeToColdCallingMobile from '@/assets/Images/Realestate/GoodByeToColdCallingMobile.png';
import GoodByeToColdCallingTwo from '@/assets/Images/Realestate/GoodByeToColdCallingTwo.png';
import GoodByeToColdCallingTwoMobile from '@/assets/Images/Realestate/GoodByeToColdCallingTwoMobile.png';
import BolkaSecurity from '@/Screens/RealEstate/BolkaSecurity';
import BolkaInfo from '@/Screens/RealEstate/BolkaInfo';
import BolkasSwarmTech from '@/Screens/RealEstate/BolkasSwarmTech';
import MultipleProjects from '@/Screens/RealEstate/MultipleProjects';
import SwarmTech from '@/Screens/RealEstate/SwarmTech';
import GameChanger from '@/Screens/RealEstate/GameChanger';
import SeeingResult from '@/Screens/RealEstate/SeeingResult';
import InvestIntheFuture from '@/Screens/RealEstate/InvestIntheFuture';
import DemoModel from '@/Screens/RealEstate/DemoCalls/DemoModel';

const page = () => {
  const [demoToggle, setDemoToggle] = useState(false)
  return (
    <Fragment>
      <DemoModel demoToggle={demoToggle} setDemoToggle={setDemoToggle} />
      <div className='w-full space-y-24 mt-26'>
        <HeroSection setDemoToggle={setDemoToggle} />
        <SuperCharge setDemoToggle={setDemoToggle} />
        <ColdCalling setDemoToggle={setDemoToggle} />
        <LoopholesSection setDemoToggle={setDemoToggle} />
        <DPDPActSection setDemoToggle={setDemoToggle} />
        <CheckDND />
        <BusinessInfo setDemoToggle={setDemoToggle} />
        <ReportLacking />
        <GoodByeColdCalling image={GoodByeToColdCallingOne} mobileImage={GoodByeToColdCallingMobile} />
        <BolkaSecurity setDemoToggle={setDemoToggle} />
        <BolkaInfo setDemoToggle={setDemoToggle} />
        <GoodByeColdCalling image={GoodByeToColdCallingTwo} mobileImage={GoodByeToColdCallingTwoMobile} />
        <BolkasSwarmTech />
        <MultipleProjects />
        <SwarmTech />
        <GameChanger setDemoToggle={setDemoToggle} />
        <SeeingResult />
        <InvestIntheFuture />
      </div>
    </Fragment>

  )
}

export default page
