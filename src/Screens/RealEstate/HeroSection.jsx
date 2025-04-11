"use client"
import React, { Fragment } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CustomButton } from '@/Components/Ui/Button/CustomButton';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import skyrocketImge from '@/assets/Images/Realestate/skyrocketImge.png';
import cubeBox from '@/assets/Images/Realestate/cubeBox.png';
import RealEstateAgentBolaCurveImg from '@/assets/Images/Realestate/RealEstateAgentBolaCurveImg.png';
import RealEstateAgentBolaCurveImg2 from '@/assets/Images/Realestate/RealEstateAgentBolaCurveImg2.png';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Image from 'next/image';


const HeroSection = ({ setDemoToggle }) => {
      const { trackEvent } = useMatomo(); 
      const handleHeroSection = (val) => {
         if (val === 1){
            window.open('https://app.bolka.ai/sign-up', '_blank');
            trackEvent({ category: 'RealEstate-Hero', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'singup-Button', });
        }else if (val === 2){
            window.open('https://app.bolka.ai/sign-up', '_blank');
            trackEvent({ category: 'RealEstate-Hero', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'GrabDeal-Button', });
        }else if(val === 3){
            window.open('https://app.bolka.ai/sign-up', '_blank');
            trackEvent({ category: 'RealEstate-Hero', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: 'Become real estate agent now-Button', });
        }
        else if(val === 4){
            window.open('https://app.bolka.ai/sign-up', '_blank');
            trackEvent({ category: 'RealEstate-Hero', action: 'click-event', href: 'https://app.bolka.ai/sign-up', name: ' Be the tele calling boss-Button', });
        }
       
      }

      const handletoggle =()=>{
        setDemoToggle(true)
        trackEvent({ category: 'RealEstate-Hero', action: 'click-event',name: ' Demo-button', });
      }
    const settings = {
        dots: true,
        // fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        dotsClass: 'slick-dots z-50 ',
    };

    const HeroSection = [
        {
            title: <h2 className={`text-6xl max-lg:text-3xl font-syne font-bold leading-[1.1] text-center pb-2 bg-gradient-to-r from-[#F56630] to-[#E59737] text-transparent bg-clip-text mx-auto`}>
                <span className='font-krona text-5xl font-medium max-lg:text-2xl'> <span className="text-[0.6em] align-middle">₹</span>750</span> for a human caller or  Bolka AI Caller for <span className='font-krona text-5xl max-lg:text-2xl font-medium'><span className="text-[0.6em] align-middle">₹</span>150</span>
            </h2>,
            subTitle: 'Why overpay for outdated methods? Switch to smarter, faster, and more affordable calling with Bolka AI Caller. Stop wasting money and start scaling your sales effortlessly—make the smarter choice today!',
            gradientcolor: "shadow-[inset_0_40px_100px_rgba(234,172,95,1)]",
        },
        {
            title: <h2 className={`text-6xl max-lg:text-3xl font-syne font-bold leading-[1.1] text-center pb-2 bg-gradient-to-r from-[#155984] to-[#4EAFEB] text-transparent bg-clip-text mx-auto`}>
                <span className='font-krona text-5xl max-lg:text-2xl font-medium'></span>Is your human caller limited to just <span className='font-krona text-5xl max-lg:text-2xl font-medium'> 250</span> calls a day?  </h2>,
            subTitle: <p className='text-center max-w-3xl text-xl max-lg:sm text-[#181D27] font-inter  mx-auto'>
                <span className='text-[#1B628E] font-bold'> Bolka AI Caller </span>  handles
                <span className='text-[#1B628E] font-bold'> 1,000 calls </span>  daily, delivering
                <span className='text-[#1B628E] font-bold'> 4x </span> the results with zero hassle. Stop limiting your growth—switch to Bolka and supercharge your sales today!</p>,
            gradientcolor: "shadow-[inset_0_40px_100px_rgba(204,230,246,1)]",
        },
        {
            title: <h2 className={`text-6xl max-lg:text-3xl font-syne font-bold leading-[1.1] text-center pb-2 bg-gradient-to-r from-[#29283C] to-[#6A64DE] text-transparent bg-clip-text mx-auto`}>
                <span className='font-krona text-5xl max-lg:text-2xl font-medium'></span>Struggling with Cold Calling? Let Bolka Handle It! </h2>,
            subTitle: <p className='text-center max-w-3xl  text-xl max-lg:sm text-[#181D27] font-inter  mx-auto'>
                Tired of the challenges of  <span className='text-[#1B628E] font-bold'> cold calling</span>? Bolka’s AI-powered solution takes over, making calls smarter, faster, and more efficient—so you can focus on closing deals!
            </p>,
            gradientcolor: "shadow-[inset_0_40px_100px_rgba(41,40,60,1)]",
        },
    ]

    const agentSection = [
        {
            img: RealEstateAgentBolaCurveImg,
            bgColor: "max-md:bg-[#feb92c]",
            title: <h2 className='text-xl md:text-4xl lg:text-6xl font-bold font-syne'>Anyone
                <span className='font-normal'> Can Be a </span>
                <span className='bg-gradient-to-r from-[#F05112] to-[#A55454] text-transparent bg-clip-text '>Real Estate Agent</span>
                <span className='font-normal'> with </span>
                Bolka
            </h2>,
            button: <button className='p-3 md:p-6 lg:py-8 lg:px-[43px] max-md:w-full  rounded-[2.2rem]  lg:text-xl    shadow-[inset_0_40px_80px_rgba(234,172,95,1)] hover:shadow-[inset_0_40px_80px_rgba(234,172,95,0.5)] flex  gap-2 items-center justify-center  font-medium font-syne' onClick={()=>handleHeroSection(3)} >
                Become real estate agent now <ArrowUpRight size={20} />
            </button>
        },
        {
            img: RealEstateAgentBolaCurveImg2,
            bgColor: "max-md:bg-[#8d8488]",
            title: <h2 className='text-xl md:text-4xl lg:text-6xl font-bold font-syne text-white'>Start Your Own
                <span className='bg-gradient-to-r from-[#FFBA30] to-[#FFF4E6] text-transparent bg-clip-text '> Tele calling </span>
                Empire with Bolka—Be
                <span className='bg-gradient-to-r from-[#FFBA30] to-[#FFF4E6] text-transparent bg-clip-text '> the Boss Today </span>
                !
            </h2>,
            button: <button className='p-3 md:p-6 lg:py-8 lg:px-[40px] max-md:w-full   rounded-[2.2rem] lg:text-xl shadow-[inset_0_20px_45px_rgba(203,217,225,1)] hover:shadow-[inset_0_20px_45px_rgba(203,217,225,0.5)] flex  gap-2 items-center justify-center font-medium font-syne' onClick={()=>handleHeroSection(4)} >
                Be the tele calling boss<ArrowUpRight size={20} />
            </button>
        },

    ]

    return (
        <Fragment>
            {/* <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-white/50 to-transparent backdrop-blur-sm rounded-full'></div> */}
            <div className='rounded-[4rem] overflow-hidden '>
                <Slider  {...settings} className="">
                    {HeroSection.map((item, idx) => (
                        <div className='px-0.5 flex-1' key={idx}>
                            <div className={`rounded-[4rem] ${item?.gradientcolor} relative p-[75px] max-sm:px-[30px] max-sm:py-[75px] h-full sm:min-h-[450px] max-[450px]:h-[600px] `}>
                                <div className='flex justify-center flex-col items-center'>
                                    {item?.title}
                                    <span className='text-center max-w-2xl text-xl text-[#181D27] font-inter my-10 mx-auto'>{item?.subTitle}</span>
                                    <div className='flex justify-center items-center gap-6 mx-auto'>
                                        <CustomButton title="Demo" variant="white-btn" rightIcon={<ArrowUpRight size={20} />} className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
                                        <CustomButton title="Sign up" variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleHeroSection(1)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='flex gap-5 mt-5 max-md:flex-col'>
                <div className='bg-[#E0E7EB] rounded-[3rem] p-10 w-full relative'>
                    <h2 className='text-[#0F73AC] font-bold  md:text-4xl lg:text-[40px] text-xl leading-none  font-syne '>
                        Skyrocket <span className='bg-[#0F73AC] text-[#80CEFA] px-2 leading-none text-nowrap  rounded-xl'>Real Estate</span> Sales with AI Calling and WhatsApp Marketing!
                    </h2>
                    <div className='mt-5 max-md:mb-5 lg:w-44 absolute bottom-10 max-md:bottom-0 right-10 lg:block hidden '>
                        <Image src={skyrocketImge} alt="skyrocketImge" className=' '/>
                    </div>
                </div>
                <div className='shadow-[inset_0_5px_20px_rgba(203,217,225,0.3)] rounded-[3rem] p-10 w-full flex flex-col justify-between max-md:gap-3'>
                    <p className='text-3xl max-sm:text-lg font-semibold font-syne text-[#495057]'>Why pay full price for human callers when you can save 80% and get 4x the call capacity with Bolka AI Caller?</p>
                    <div className='flex justify-between items-end '>
                        <Image src={cubeBox} alt="cubeBox" className='w-11 h-11 '/>
                        <CustomButton title="Grab deal" variant="white-btn" rightIcon={<ArrowUpRight size={20} />} className='md:p-5 !rounded-2xl' onClick={()=>handleHeroSection(2)} />
                    </div>
                </div>
            </div>

            <div className='mt-10 relative rounded-[3rem] overflow-hidden md:block hidden '>
                <Slider {...settings} className="">
                    {agentSection.map((agent, idx) => (
                        <div key={idx} className={`relative  `}>
                            <Image src={agent?.img} alt='RealEstateAgentBolaCurveImg' className=' object-contain w-full h-auto rounded-[3rem] md:block hidden'/>
                            <div className='absolute inset-0 flex justify-center flex-col items-center gap-10 z-50 m-20 w-[38%]'>
                                {agent?.title}
                            </div>
                            <div className='flex  justify-center items-center gap-6  absolute bottom-0 right-3  bg-white rounded-[3rem]'>
                                {agent?.button}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className=' mt-10 relative rounded-[3rem] overflow-hidden h-[250px] md:hidden block '>
                <Slider {...settings} className="">
                    {agentSection.map((agent, idx) => (
                        <div key={idx} className={` px-3 ${agent?.bgColor} h-[250px] `}>
                            <div className='h-full flex flex-col justify-between  items-center  p-5'>
                                <div className='inset-0 z-50  w-full  flex flex-col items-center '>
                                    {agent?.title}
                                </div>
                                <div className='flex w-full justify-center items-center   '>
                                    {agent?.button}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Fragment>
    )
}

export default HeroSection