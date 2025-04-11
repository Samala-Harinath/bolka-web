'use client';

import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Sections
import AdvertisingSection from "@/Screens/Home/AdvertisingSection";
import AssistanceSection from "@/Screens/Home/AssistanceSection";
import BolkaInfoSection from "@/Screens/Home/BolkaInfoSection";
import CallingSection from "@/Screens/Home/CallingSection";
import ContactSection from "@/Screens/Home/ContactSection";
import FeatureSection from "@/Screens/Home/FeatureSection";
import FramworkSection from "@/Screens/Home/FramworkSection";
import FreelancerSection from "@/Screens/Home/FreelancerSection";
import HeroSection from "@/Screens/Home/HeroSection";
import HomeSecurity from "@/Screens/Home/HomeSecurity";
import IndustrySection from "@/Screens/Home/IndustrySection";
import PricingSection from "@/Screens/Home/PricingSection";
import RecordingSection from "@/Screens/Home/RecordingSection";
import Revolution from "@/Screens/Home/Revolution";
import SeeingResult from "@/Screens/Home/SeeingResult";
import SwarmTech from "@/Screens/Home/SwarmTech";
import Info from "@/Screens/RealEstate/Info";

export default function HomePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const state = searchParams?.get("state");

  const freatureRef = useRef();
  const productRef = useRef();
  const contactRef = useRef();
  const faqRef = useRef();

  useEffect(() => {
    const scrollToElement = (ref, offset = 0) => {
      if (ref?.current) {
        const elementPosition =
          ref.current.getBoundingClientRect().top + window.scrollY;
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

    if (state) {
      setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        params.delete("state");
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        router.replace(newUrl, { scroll: false });
      }, 1500);
    }
  }, [state, router]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-24">
      <HeroSection />
      <FeatureSection />
      <CallingSection />
      <FreelancerSection />
      <AssistanceSection />
      <RecordingSection />
      <PricingSection />
      <div className="md:block hidden">
        <FramworkSection />
      </div>
      <HomeSecurity />
      <SwarmTech />
      <IndustrySection productRef={productRef} />
      <Info />
      <AdvertisingSection />
      <BolkaInfoSection freatureRef={freatureRef} />
      <SeeingResult />
      <Revolution />
      <ContactSection contactRef={contactRef} />
    </div>
  );
}
