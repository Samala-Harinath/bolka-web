"use client"
import React from 'react';
import AgenticAi from "@/assets/svg/agentic-ai-workflow.svg"
import GDPR from '@/assets/svg/GDPR.svg';
import CCPA from '@/assets/svg/CCPA.svg';
import SOC2 from '@/assets/svg/SOC2.svg';
import Script_Pathways from '@/assets/Digram/Script_Pathways.svg';
import cellPhone from '@/assets/Digram/cellPhone.png';
import Arrow from '@/assets/Digram/Arrow.png';
import user from '@/assets/Digram/user.png';
import { motion, useTransform, useScroll } from 'framer-motion'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
const FeatureSection = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 500], [0, 20]);

  const AnimationContainer = ({ children, border_color, colors }) => {
    return (
      <motion.div className="flex justify-center border rounded-3xl flex-1 bg-[#fef6ee]"
        initial={{ borderColor: border_color }}
        whileHover={{
          borderColor: colors,
          transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
        }}
        style={{ border: '2px solid', borderRadius: '1.5rem' }}
      >
        {children}
      </motion.div>
    )
  }

  const revealVariants = {
    hidden: { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
    visible: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };


  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto  '>
      {/* First Column */}
      <div className='flex flex-col space-y-4'>
        <AnimationContainer border_color="#fef6ee" colors={['#F9DBAF', '#EF6820', '#F9DBAF']}>
          <div className="flex flex-col w-full p-5 gap-3">
            <h1 className="font-inter font-normal text-3xl">
              <span className="font-bold text-3xl">Agentic AI</span> Ultimate AI Worker
            </h1>
            <p className="text-start font-normal text-base font-inter">
              By combining the power of Agentic AI, Documentia, and YesQL, Bolka creates a fully autonomous AI Worker
              capable of intelligent workflow automation, real-time data handling, and seamless task execution.
            </p>
            <div className="relative h-24 mt-3 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none z-20">
                <div className="absolute top-0 bottom-0 left-0 w-20 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(254, 246, 238, 1), rgba(254, 246, 238, 0)) ', }} />
                <div className="absolute top-0 bottom-0 right-0 w-20 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(254, 246, 238, 1), rgba(254, 246, 238, 0))', }} />
              </div>
              <div className="w-full ">
                <Slider {...settings}>
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex justify-center items-center px-3 ">
                      <Image src={AgenticAi}
                        alt={`Agentic AI Workflow ${index + 1}`}
                        className="w-full h-auto" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </AnimationContainer >

        <AnimationContainer border_color="#FEFAF5" colors={['#F9DBAF', '#EF6820', '#F9DBAF']}>
          <div className='flex justify-center w-full p-5 rounded-3xl bg-[#FEFAF5]'>
            <div className='flex flex-col w-80 gap-3 '>
              <h1 className='font-inter font-normal text-3xl'>
                <span className='font-bold text-3xl'>Script Pathways</span> Plain Text or Auto-Generated
              </h1>
              <p className='text-start font-normal text-base font-inter '>
                Bolka’s Script Pathways feature lets you create call scripts effortlessly, either by using plain text or
                generating them directly from your existing sources.
              </p>
              <div className="flex justify-center items-center">
                <motion.div initial="hidden" animate="visible" variants={revealVariants}>
                  <Image
                    src={Script_Pathways}
                    alt="Script Pathways"
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </div>

      {/* Second Column */}
      <div className='flex flex-col space-y-4'>
        <AnimationContainer border_color="#F8F8F8" colors={["#F0EEEE", "#C7C7C7", '#F0EEEE']}>
          <div className='flex justify-center p-5 w-full rounded-3xl bg-[#F8F8F8]'>
            <div className='flex flex-col w-80 gap-3'>
              <h1 className='font-inter font-normal text-3xl'>
                <span className='font-bold text-3xl'>Generate Scripts</span> Simple to Complex
              </h1>
              <p className='text-start font-normal text-base font-inter '>
                Bolka allows you to create tailored call scripts, ranging from simple templates to complex, dynamic
                workflows.
              </p>
            </div>
          </div>
        </AnimationContainer>

        <AnimationContainer border_color="#FEFAF5" colors={['#FEE5C9', '#F2AB5C', '#FEE5C9']}>
          <div className='flex justify-center p-5 w-full rounded-3xl bg-[#FEFAF5]'>
            <div className='flex flex-col w-80 gap-3 '>
              <h1 className='font-inter font-normal text-3xl'>
                <span className='font-bold text-3xl'>Inbound</span> and <span className='font-bold text-3xl'>Outbound</span>{' '}
                Calls
              </h1>
              <p className='text-start font-normal text-base font-inter '>
                Bolka seamlessly manages both inbound and outbound calls, providing a unified solution for customer
                support, sales, and engagement.
              </p>
            </div>
          </div>
        </AnimationContainer>

        <AnimationContainer border_color="#FEFAF5" colors={['#F9DBAF', '#EF6820', '#F9DBAF']}>
          <div className='flex justify-center p-5 w-full rounded-3xl bg-[#FEFAF5]'>
            <div className='flex flex-col w-80 gap-3 '>
              <h1 className='font-inter font-normal text-3xl'>
                <span className='font-bold text-3xl'>Multi-Agent</span> for Voice AI Agent
              </h1>
              <p className='text-start font-normal text-base font-inter '>
                Bolka’s Multi-Agent capability empowers multiple Voice AI Agents to operate simultaneously, handling
                diverse tasks and conversations in parallel.
              </p>
            </div>
          </div>
        </AnimationContainer>
      </div>

      {/* Third Column */}
      <div className='flex col-span-1 md:col-span-2 lg:col-span-1 lg:flex-col md:flex-row flex-col gap-4'>
        <AnimationContainer border_color="#FEFAF5" colors={['#F9DBAF', '#EF6820', '#F9DBAF']}>
          <div className='flex justify-center p-5 w-full rounded-3xl bg-[#FEFAF5]'>
            <div className='flex flex-col w-80 gap-3 '>
              <h1 className='font-inter font-normal text-3xl'>
                Intelligent <span className='font-bold text-3xl'>Call Escalation</span>
              </h1>
              <p className='text-start font-normal text-base font-inter '>
                Bolka’s Call Escalation ensures seamless handling of complex or unresolved issues by intelligently
                transferring calls to human agents when needed.
              </p>
              <div className="flex justify-center gap-5">
                <Image src={cellPhone} alt="Cell Phone" />
                <motion.div initial="hidden" animate="visible" variants={revealVariants}>
                  <Image src={Arrow} alt="Phone Icon 1" className="h-16 w-16 object-contain" />
                </motion.div>
                <Image src={user} alt="User" />
              </div>
            </div>
          </div>
        </AnimationContainer>
        <AnimationContainer border_color="#F8F8F8" colors={["#F0EEEE", "#C7C7C7", '#F0EEEE']}>
          <div className='flex justify-center w-full p-5   rounded-3xl bg-[#F8F8F8]'>
            <div className='flex flex-col w-80 gap-3 '>
              <h1 className='font-inter font-normal text-3xl'>
                <span className='font-bold text-3xl'>Advanced Security</span> with Encryption and Privacy
              </h1>
              <p className='text-start font-normal text-base font-inter '>
                Bolka prioritizes your data security with robust encryption protocols, ensuring all calls and sensitive
                information are fully protected.
              </p>
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                viewport={{ amount: 0.5 }}
              >
                <motion.div
                  initial={{ x: 0, rotate: 0 }}
                  whileInView={{ x: '-20%', rotate: -20 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ amount: 0.5 }}
                >
                  <Image src={GDPR} alt="GDPR" className="w-16" />
                </motion.div>

                <motion.div
                  initial={{ y: '0', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1, marginTop: -20 }}
                  transition={{ delay: 0, duration: 0.6 }}
                  viewport={{ amount: 0.5 }}
                >
                  <Image src={CCPA} alt="CCPA" className="w-16" />
                </motion.div>

                <motion.div
                  initial={{ x: 0, rotate: 0 }}
                  whileInView={{ x: '20%', rotate: 20 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ amount: 0.5 }}
                >
                  <Image src={SOC2} alt="SOC2" className="w-16" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </AnimationContainer>
      </div>
    </div>
  );
};

export default FeatureSection;
