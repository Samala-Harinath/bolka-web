import React from 'react';
import { motion, useSpring, useScroll } from 'framer-motion'

const RefundPolicy = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return (
        <div className='flex flex-col justify-center items-center w-full md:my-20 my-10'>
            <motion.div
                id="scroll-indicator"
                className="fixed top-20 left-0 right-0 h-1 origin-left bg-[#ccc] z-10"
                style={{
                    scaleX,
                }}
            />

            <div className='flex flex-col justify-center items-center md:w-[812px] gap-6 mt-20'>
                <span className='font-inter font-semibold text-base text-[#B93815] '> Current as of 07 Jan 2025</span>
                <h1 className='font-krona font-normal md:text-5xl text-3xl text-center text-[#181D27]'>Refund Policy</h1>
                <p className='font-inter font-normal md:text-xl text-lg text-[#181D27] text-center'>Thank you for choosing
                    <span className='font-inter font-semibold'> Bolka AI by Llamaworx Software Pvt Ltd.</span>  This Refund Policy outlines the terms and conditions for
                    refunds associated with our subscription plans, which include
                    <span className='font-inter font-semibold'> monthly renewals</span> and <span className='font-inter font-semibold text-xl text-[#181D27]'> annual purchases with discounts.</span> </p>
            </div>

            {/* 1. No Refund Policy*/}
            <div className='flex flex-col md:w-[720px]  mt-28 gap-7'>
                <div className='flex flex-col gap-4'>
                    <span className='font-krona font-normal md:text-3xl text-2xl text-[#181D27]'>1. No Refund Policy</span>
                    <p className='font-inter font-normal md:text-lg text-[#181D27]'>
                        Bolka AI operates under a <span className='font-inter font-semibold md:text-lg text-[#181D27]'> No Refund Policy</span>  for all subscription plans. This policy applies because:
                    </p>
                    <ol className='list-decimal pl-6 font-inter font-normal md:text-lg text-[#181D27] flex flex-col gap-4'>
                        <li>
                            <p className='text-start'>
                                <span className='font-semibold'>Demo Availability: </span>
                                We offer a demo service to allow users to fully evaluate the features and functionality of Bolka AI before committing to a paid plan.
                            </p>
                        </li>
                        <li>
                            <p className='text-start'>
                                <span className='font-semibold'>Transparent Pricing: </span>
                                Our subscription model, including monthly and annual plans, is clearly detailed on our platform, ensuring users make informed decisions.
                            </p>
                        </li>
                    </ol>
                </div>
                {/* 2. Subscription Plans*/}
                <div className='flex flex-col gap-4'>
                    <span className='font-krona font-normal md:text-3xl text-2xl  text-[#181D27]'>2. Subscription Plans</span>
                    <ol className='list-decimal pl-6 font-inter font-normal md:text-lg text-[#181D27] flex flex-col gap-4'>
                        <li>
                            <span className='font-bold text-xl'>Monthly Renewal Plans:</span>
                            <ul className='list-disc  pl-6'>
                                <li>Call metadata (e.g., start/end times, duration, and status).</li>
                                <li>Call recordings and transcripts (if enabled).</li>
                                <li>
                                    Logs detailing interactions and responses. Retention of call data is configurable and can be deleted upon request.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className='font-bold text-xl'>Annual Purchase Plans with Discount:</span>
                            <ul className='list-disc  pl-6'>
                                <li>Annual subscriptions offer discounted rates and are charged upfront for the entire year.</li>
                                <li>Refunds are not provided for annual plans once payment has been processed, even if the subscription is canceled before the end of the year.</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                {/*Cancellation Policy */}
                <div className='flex flex-col gap-4'>
                    <span className='font-krona font-normal md:text-3xl text-2xl  text-[#181D27]'>3. Cancellation Policy</span>
                    <div>
                        <p className='font-inter font-normal md:text-lg text-[#181D27]'>
                            You may cancel your subscription at any time through your account settings or by contacting our support team at
                            <a href="mailto:contact@llamaworx.com" className='text-[#DC6803] underline'> contact@llamaworx.com</a>
                        </p>
                        <ul className=' font-inter font-normal md:text-lg text-[#181D27] text-start list-disc pl-6'>
                            <li>For monthly plans, cancellation will stop the next billing cycle, and you will retain access until the current cycle ends.</li>
                            <li>For annual plans, no partial refunds will be issued for the unused portion of the year.</li>
                        </ul>
                    </div>
                </div>

                {/*4. Exceptions to the Refund Policy */}
                <div className='flex flex-col gap-4'>
                    <span className='font-krona font-normal md:text-3xl text-2xl  text-[#181D27]'>4. Exceptions to the Refund Policy</span>

                    <div>
                        <p className='font-inter font-normal md:text-lg text-[#181D27]'>Refunds may be granted in rare circumstances, including:</p>
                        <ol className='list-decimal pl-6 font-inter font-normal md:text-lg text-[#181D27] flex flex-col gap-2'>
                            <li>
                                <p className='text-start'>
                                    <span className='font-semibold'>Technical Issues: </span>
                                    If technical errors caused by Bolka AI prevent you from using the service after payment, we will assess the issue on a case-by-case basis.
                                </p>
                            </li>
                            <li>
                                <p className='text-start'>
                                    <span className='font-semibold'>Duplicate Payments: </span>
                                    If you accidentally make duplicate payments, we will refund the excess amount.
                                </p>
                            </li>
                        </ol>
                        <p className='font-inter font-normal md:text-lg text-[#181D27]'>For exceptions, contact us at <a href="mailto:contact@llamaworx.com" className='text-[#DC6803] underline'> contact@llamaworx.com</a> with relevant details and proof.
                            All refund requests are evaluated at the sole discretion of <span className='font-inter font-semibold md:text-lg text-[#181D27]'>Llamaworx Software Pvt Ltd.</span> </p>
                    </div>
                </div>

                {/*5. Renewal and Billing */}
                <div className='flex flex-col gap-4'>
                    <span className='font-krona font-normal md:text-3xl text-2xl  text-[#181D27]'>5. Renewal and Billing</span>
                    <ol className='list-decimal pl-6 font-inter font-normal md:text-lg text-[#181D27] flex flex-col gap-2'>
                        <li>
                            <p className='text-start'>
                                <span className='font-semibold'>Monthly Plans: </span>
                                Payments are automatically charged on the billing date unless canceled before renewal.
                            </p>
                        </li>
                        <li>
                            <p className='text-start'>
                                <span className='font-semibold'>Annual Plans: </span>
                                Subscriptions are charged upfront and renew automatically at the end of the term unless canceled. Users will receive reminders before the renewal date.
                            </p>
                        </li>
                    </ol>
                </div>
                {/*6. Disputes and Resolution */}
                <div className='flex flex-col gap-4'>
                    <span className='font-krona font-normal md:text-3xl text-2xl  text-[#181D27]'>6. Disputes and Resolution</span>
                    <p className='font-inter font-normal md:text-lg text-[#181D27]'>If you have concerns regarding charges or payments,
                        please contact our support team at <a href="mailto:contact@llamaworx.com" className='text-[#DC6803] underline'> contact@llamaworx.com</a> We are committed to resolving issues promptly.</p>
                </div>

                {/*7. Finality of Sales */}
                <div className='flex flex-col gap-4'>
                    <span className='font-krona font-normal md:text-3xl text-2xl  text-[#181D27]'>7. Finality of Sales</span>
                    <p className='font-inter font-normal md:text-lg text-[#181D27]'>By proceeding with payment for any subscription plan,
                        you acknowledge and agree to this Refund Policy. No refunds will be issued except in the limited circumstances outlined above.</p>
                    <p className='font-inter font-normal md:text-lg text-[#181D27]'>This policy reflects the subscription model and
                        ensures transparency while maintaining the no-refund approach.  Let me know if further details need to be added!</p>
                </div>
            </div>
        </div>
    )
}

export default RefundPolicy
