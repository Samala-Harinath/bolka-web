"use client"
import React, { useState, useEffect } from 'react';
import User_To_Call from './FramworkArrow/User_To_Call.jsx';
import Task_To_AiCaller from './FramworkArrow/Task_To_AiCaller.jsx';
import Call_To_Bolka from './FramworkArrow/Call_To_Bolka.jsx';
import User_To_Task from './FramworkArrow/User_To_Task.jsx';
import Ai_Caller_To_Bolka from './FramworkArrow/Ai_Caller_To_Bolka.jsx';
import Bolka_To_AiCaller from './FramworkArrow/Bolka_To_AiCaller.jsx';
import Ai_Caller_To_Reply from './FramworkArrow/Ai_Caller_To_Reply.jsx';
import Reply_To_User from './FramworkArrow/Reply_To_User.jsx';
import Bolka_To_DataBase_LongArrow from './FramworkArrow/Bolka_To_DataBase_LongArrow.jsx';
import DataBase_To_Bolka_LongArrow from './FramworkArrow/DataBase_To_Bolka_LongArrow.jsx';
import Bolka_To_DataBase from './FramworkArrow/Bolka_To_DataBase.jsx';
import DataBase_To_Bolka from './FramworkArrow/DataBase_To_Bolka.jsx';
import Call from '@/assets/Icon/OperationalFramework/Icon/Call.png';
import Users from '@/assets/Icon/OperationalFramework/Icon/Users.png';
import Reply from '@/assets/Icon/OperationalFramework/Icon/Replay.png';
import Ai_Caller_logo from '@/assets/Icon/OperationalFramework/Icon/Ai_Caller_logo.png';
import DataBase_logo from '@/assets/Icon/OperationalFramework/Icon/DataBase_logo.png';
import Bolka_logo from '@/assets/Icon/OperationalFramework/Icon/Bolka_logo.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image.js';
const FramworkSection = () => { 
  const [resetKey, setResetKey] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2, });

  useEffect(() => {
    if (inView) {
      setResetKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  const Label = ({ img, title, imgStyle, delay }) => {
    return (
      <motion.div
        className="max-h-max relative flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 1 }}
      >
        {img && <Image src={img} alt={title || "Label"} className={`absolute ${imgStyle}`} />}
        {title && (
          <span className="flex justify-center items-center py-1 px-3 font-inter font-semibold text-[#101828] text-sm rounded-lg bg-[#F9DBAF]">
            {title}
          </span>
        )}
      </motion.div>
    );
  };

  const LabelAnimation = ({ children, delay }) => {
    return (
      <motion.div
        key={resetKey}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 1, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center max-w-screen-md w-full gap-3'>
        <h1 className='font-krona font-normal text-[#1F2229] md:text-4xl text-2xl text-center'>Bolka’s Operational Framework</h1>
        <p className='max-w-md text-center text-base font-normal font-inter text-[#1F2229]'>
          The framework ensures end-to-end automation of queries and tasks, minimizing human intervention
        </p>
      </div>

      <div className='flex p-10 w-full rounded-[2rem] bg-[#F9F9F9] mt-6'>
        <div className='w-full'>
          {/* Top */}
          <div className='flex justify-start items-start ml-5'>
            <div className='ml-4 mt-3' ><Reply_To_User resetKey={resetKey} ref={ref} /></div>
            <Label img={Reply} title={'Reply'} imgStyle={'-top-8 h-11'} delay={8} />
            <div className='mt-3 max-w-max'><Ai_Caller_To_Reply resetKey={resetKey} /></div>
            <div className='flex flex-col justify-center items-center'>
              <Label img={Ai_Caller_logo} title={'AI Caller'} imgStyle={'-top-9 h-12'} delay={6} />
              <div><Bolka_To_AiCaller resetKey={resetKey} /></div>
            </div>
          </div>

          {/* Middle */}
          <div className='flex justify-start items-center w-full'>
            <Label img={Users} title="Users" imgStyle="-top-10 h-12" delay={1} />
            <div className='relative'>
              <LabelAnimation delay={2.5}>
                <span className='font-inter text-center text-[#0D99FF] text-xs font-medium absolute left-6 -top-4'>Query or Request</span>
              </LabelAnimation>
              <div><User_To_Call resetKey={resetKey} /></div>
            </div>
            <Label img={Call} title={'Call'} imgStyle={'-top-8 h-11'} delay={3} />
            <div className='relative'>
              <div><Call_To_Bolka resetKey={resetKey} /></div>
              <LabelAnimation delay={4.5}>
                <span className='font-inter text-center font-medium text-[#874BC2] text-xs absolute top-3 left-6 w-28'>Bolka understands user request</span>
              </LabelAnimation>
            </div>
            <div className='relative'>
              <div className='absolute bottom-7 -right-44'>
                <div><Bolka_To_DataBase_LongArrow resetKey={resetKey} /></div>
                <LabelAnimation delay={18.5}>
                  <span className='font-inter text-center text-[#D444F1] text-xs font-medium absolute left-12 top-2'>Query or Request</span>
                </LabelAnimation>
              </div>
              {/* <motion.div key={resetKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 1 }} className='max-h-max relative flex flex-col justify-center items-center'>
                <img src={Bolka_logo} alt={Bolka_logo} className={'absolute -top-9 h-12'} />
                <span className='flex justify-center items-center py-1 px-3 font-inter font-semibold text-[#101828] text-sm rounded-lg bg-[#F9DBAF]'>Bolka Platform</span>
              </motion.div> */}
              <Label img={Bolka_logo} title={'Bolka Platform'} imgStyle={'-top-9 h-12'} delay={5} />
              <div className='absolute top-7 -right-44'>
                <div><DataBase_To_Bolka_LongArrow resetKey={resetKey} /></div>
                <LabelAnimation delay={22.5}>
                  <span className='font-inter text-center text-[#D444F1] text-xs font-medium absolute left-6 bottom-3'>Updates on Bolka Platform</span>
                </LabelAnimation>
              </div>
            </div>
            <div>
              <div className='relative top-1'>
                <LabelAnimation delay={21.5}>
                  <span className='font-inter text-center font-medium text-[#874BC2] text-xs absolute left-3 -top-6'>To verify user</span>
                </LabelAnimation>
                <div><DataBase_To_Bolka resetKey={resetKey} /></div>
              </div>
              <div className='relative bottom-1'>
                <div><Bolka_To_DataBase resetKey={resetKey} /></div>
                <LabelAnimation delay={17.5}>
                  <span className='font-inter text-center font-medium text-[#874BC2] text-xs absolute left-4 top-3'>User details</span>
                </LabelAnimation>
              </div>
            </div>
            <Label img={DataBase_logo} title={'Application Database'} imgStyle={'-top-12 h-14 right-5'} delay={20} />
          </div>

          {/* Bottom */}
          <div className='flex justify-start items-end'>
            <div className='flex flex-col justify-center items-center'>
              <div className='mr-6'><User_To_Task resetKey={resetKey} /></div>
              <Label title={'Task/Query'} imgStyle={'-top-9 h-12'} delay={12} />
            </div>
            <div className='relative'>
              <div className='mb-3'><Task_To_AiCaller resetKey={resetKey} /></div>
              <LabelAnimation delay={13.5}>
                <span className='font-inter text-center font-medium text-[#0D99FF] text-xs absolute left-1 bottom-5'>Asks to complete</span>
              </LabelAnimation>
            </div>
            <Label img={Ai_Caller_logo} title={'AI Caller'} imgStyle={'-top-9 h-12'} delay={14} />
            <div className='relative'>
              <div className='mb-3'><Ai_Caller_To_Bolka resetKey={resetKey} /></div>
              <LabelAnimation delay={16}>
                <span className='font-inter text-center font-medium text-[#874BC2] text-xs absolute left-5 bottom-5'>Completes Task</span>
              </LabelAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramworkSection;