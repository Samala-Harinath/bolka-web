import React, { Fragment, useEffect } from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import CallingSection from './CallingSection'
import FreelancerSection from './FreelancerSection'
import AssistanceSection from './AssistanceSection'
import RecordingSection from './RecordingSection'
import PricingSection from './PricingSection'
import FramworkSection from './FramworkSection'
import AdvertisingSection from './AdvertisingSection'
import IndustrySection from './IndustrySection'
import BolkaInfoSection from './BolkaInfoSection'
import ContactSection from './ContactSection'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import FAQ from './FAQ'
import HomeSecurity from './HomeSecurity'
import SwarmTech from './SwarmTech'
import Info from '../RealEstate/Info'
import SeeingResult from './SeeingResult'
import Revolution from './revolution'
import BrochuresModal from '../../components/Brochures/BrochuresModal'
import { BrochureProvider } from '../../components/Brochures/BrochureProvider'

const Home = () => {
  const { state } = useLocation();
  const freatureRef = useRef();
  const productRef = useRef();
  const contactRef = useRef();
  const faqRef = useRef();

  useEffect(() => {
    const scrollToElement = (ref, offset = 0) => {
      if (ref?.current) {
        const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    };

    

    switch (state) {
      case "features":
        scrollToElement(freatureRef, 90);
        break;
      case "useCases":
        scrollToElement(productRef, 90);
        break;
      case "contact":
        scrollToElement(contactRef, 90);
        break;
      case "faq":
        scrollToElement(faqRef, 90);
        break;
      default:
        break;
    }
  }, [state]);


  return (
    <Fragment>
      <div className='md:space-y-32 space-y-20  mx-auto md:pb-20 pb-12  mt-16'>
        <HeroSection />
        <FeatureSection />
        <CallingSection />
        <FreelancerSection />
        <AssistanceSection />
        <RecordingSection />
        <PricingSection />
        <div className='md:block hidden'>
          <FramworkSection />
        </div>
        <HomeSecurity/>
        <SwarmTech/>
        <IndustrySection productRef={productRef} />
        <Info/>
        <AdvertisingSection />
        <BolkaInfoSection freatureRef={freatureRef} />
        <SeeingResult/>
        <Revolution/>
        {/* 
        <FAQ faqRef={faqRef} />
        */}
        <ContactSection contactRef={contactRef} />
      </div>
    </Fragment>
  )
}

export default Home;
