"use client"
import React from 'react'
import Coin from '@/assets/Images/Realestate/Coin.png'
import Graph from '@/assets/Images/Realestate/Graph.png'
import Mobile from '@/assets/Images/Realestate/Mobile.png'
import Meter from '@/assets/Images/Realestate/Meter.png'
import Secure from '@/assets/Images/Realestate/Secure.png'
import Steps_Graph from '@/assets/Images/Realestate/Steps_Graph.png'
import { CustomButton } from '@/Components/Ui/Button/CustomButton'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Image from 'next/image'
const BolkaInfo = ({ setDemoToggle }) => {
    const { trackEvent } = useMatomo(); 
    const handleBolkaInfoSection = () => {
          window.open('https://demo.bolka.ai/', '_blank');
          trackEvent({ category: 'RealEstate-BolkaInfo', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'Say goodbye to cold calling—experience the power of Bolka today', });
    }
    const handletoggle =()=>{
        setDemoToggle(true)
        trackEvent({ category: 'RealEstate-BolkaInfo', action: 'click-event',  name: ' Demo-button', });
      }
    return (
        <div className='flex flex-col justify-center items-center max-w-screen-xl  gap-4'>
            <div className='flex flex-col justify-center items-center text-[#2E2F32] gap-4'>
                <h1 className='font-syne md:text-6xl text-2xl font-bold text-center'>
                    Why Choose<span className='text-[#F05112]'> Bolka </span>AI Caller?
                </h1>
                <p className='max-w-xl text-center font-inter font-normal text-base px-4'>
                    Discover why thousands of real estate agents and developers across
                    India rely on Bolka for smarter, faster, and more effective calling solutions. Join the revolution today!
                </p>
            </div>
            <div className='gap-4 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/*First column*/}
                <div className='flex flex-col gap-3 flex-1'>
                    <div className=' bg-[#F6F6F6]  rounded-[40px] p-8'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#5E6061]'>Affordable Pricing</p>
                            <p className='font-inter font-normal text-base text-[#181D27]'>Cost-effective at just ₹0.5 per dialed call.</p>
                            <Image src={Coin} alt="Coin" />
                        </div>
                    </div>
                    <div className=' bg-[#EBF6FC]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#0F73AC]'>AI-Powered Efficiency</p>
                                <ul className='list-disc ml-5 font-inter font-normal text-base text-[#181D27] '>
                                    <li >No need for human intervention.</li>
                                    <li>No human errors.</li>
                                    <li>Multi-language support for diverse customer bases.</li>
                                </ul>
                        </div>
                    </div>
                    <div className=' bg-[#FFF4E6]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#E48B1E]'>Actionable Analytics</p>
                            <p className='font-inter font-normal text-base text-[#181D27]'>Get real-time reports and sentiment analysis
                                to fine-tune your strategy.</p>
                            <Image src={Graph} alt="Graph"/>
                        </div>
                    </div>

                    <div className=' bg-[#EBF6FC]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#0F73AC]'>Daily Follow-Ups</p>
                            <p className='font-inter font-normal text-base text-[#181D27]'>
                                Automate repeat calls to stay top-of-mind for prospects.
                            </p>
                        </div>
                    </div>
                </div>
                {/*Second  column*/}
                <div className='flex flex-col gap-3'>

                    <div className=' bg-[#FFF4E6]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#E48B1E]'>WhatsApp Marketing Integration</p>
                                <ul className='list-disc ml-5 font-inter font-normal text-base text-[#181D27]'>
                                    <li >Send follow-up messages, project updates, and appointment reminders.</li>
                                    <li>Create lasting impressions with personalized communication.</li>
                                </ul>
                            <Image src={Mobile} alt="Mobile"/>
                        </div>
                    </div>

                    <div className=' bg-[#F6F6F6]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#5E6061]'>
                                <span className='font-krona font-normal text-2xl mg:text-3xl'>24/7</span> Availability
                            </p>
                            <p className='font-inter font-normal text-base text-[#181D27]'>
                                Reach customers anytime with automated precision.
                            </p>
                        </div>
                    </div>

                    <div className=' bg-[#EBF6FC]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#0F73AC]'>
                                Customer Sentiment Analysis
                            </p>
                            <p className='font-inter font-normal text-base text-[#181D27]'>
                                Customer Sentiment Analysis uses AI to evaluate emotions and
                                opinions expressed in customer interactions, providing valuable insights to enhance satisfaction
                            </p>
                            <Image src={Meter} alt="Meter" className='object-cover '/>
                        </div>
                    </div>
                </div>
                {/*Third column*/}
                <div className='grid grid-cols-1 md:col-span-2 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1 gap-3 '>
                    <div className=' bg-[#EBF6FC]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#0F73AC] '>Comprehensive Reporting</p>
                            <p className='font-inter font-normal text-base text-[#181D27]'>
                                Real-time analytics to measure call performance and customer sentiment.
                            </p>
                        </div>
                    </div>

                    <div className=' bg-[#F6F6F6]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#5E6061]'>Instant Scalability</p>
                            <p className='font-inter font-normal text-base text-[#181D27]'>
                                Scale campaigns from hundreds to thousands to lakhs of calls with ease.
                            </p>
                            <Image src={Steps_Graph} alt="Steps_Graph"/>

                        </div>
                    </div>

                    <div className=' bg-[#EBF6FC]  rounded-[40px] p-8  flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#0F73AC]'>Secure and Compliant</p>
                                <ul className='list-disc ml-5 font-inter font-normal text-base text-[#181D27]'>
                                    <li >No abusive, political, or investment-related calls allowed.</li>
                                    <li>Guardrails, low latency, and memory features ensure safety.</li>
                                </ul>
                            <Image src={Secure} alt="Secure" className=' object-contain' />
                        </div>
                    </div>

                    <div className=' bg-[#FFF4E6]  rounded-[40px] p-8 flex-1'>
                        <div className=' flex flex-col gap-3 '>
                            <p className='font-syne font-bold text-2xl md:text-4xl text-[#E48B1E]'>Simple Setup</p>
                            <p className='font-inter font-normal text-base text-[#181D27]'>
                                Easy-to-use platform with intuitive steps.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex gap-5 mt-10 max-sm:flex-col max-sm:w-full'>
                <CustomButton title={
                    <>
                        <span className="hidden max-sm:inline">Try bolka today</span>
                        <span className="inline max-sm:hidden">Say goodbye to cold calling—experience the power of Bolka today</span>
                    </>
                }
                    variant="orange-btn" className='md:p-5 !rounded-2xl' onClick={()=>handleBolkaInfoSection()}/>
                <CustomButton title="Try demo now" variant="white-btn" className='md:p-5 !rounded-2xl' onClick={() => handletoggle()} />
            </div>

        </div>
    )
}

export default BolkaInfo
