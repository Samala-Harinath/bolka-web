"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Ai from '@/assets/Images/Ai.svg';
import { CustomButton } from '@/Components/Ui/Button/CustomButton';
import axios from 'axios';
import toast from 'react-hot-toast';
import Image from 'next/image';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10}$/, 'Phone number must be  10 digits')
    .refine((value) => value.replace(/\D/g, '').length === 10, {
      message: 'Invalid phone number',
    })
    .optional(),
  message: z.string().min(1, 'Message is required'),
  agree: z.boolean().refine((val) => val === true, {
    message: 'You must agree to our privacy policy',
  }),
});

const ContactSection = ({ contactRef }) => {
  const [loader, setLoader] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    const { email, firstName, lastName, message, phone } = data;
    try {
      setLoader(true);
      const url = `https://api.bolka.ai/send_enquiry_email?firstname=${firstName}&lastname=${lastName}&email=${email}&phoneno=${phone}&message=${message}`;
      const response = await axios.post(url);
      console.log('API Response:', response.data);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        reset();
        setIsAgreed(false); 
      }
    } catch (error) {
      console.error('Error occurred:', error.response?.data || error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className='flex justify-center md:px-2 md:justify-between gap-5  w-full' ref={contactRef}>
      <div className='max-w-xl w-full rounded-3xl md:block hidden '>
        <Image src={Ai} alt='Ai' />
      </div>

      <div className='flex flex-col max-w-xl '>
        <div className='w-full'>
          <div className='w-full'>
            <h1 className='font-krona font-normal md:text-4xl text-2xl text-center text-[#181D27] mb-5'>
              Let’s setup your contact center
            </h1>
            <p className='font-inter font-normal md:text-xl text-center text-[#535862]'>
              Our friendly team would love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between gap-5 mt-14'>
              <div className='w-full'>
                <label className='block text-sm font-medium font-inter text-[#414651]'>
                  First name <span className='text-[#E04F16]'>*</span>
                </label>
                <input
                  type='text'
                  {...register('firstName')}
                  className='mt-1 block rounded-xl outline-none border shadow-sm p-2 px-3 border-[#D5D7DA] w-full'
                  placeholder='First name'
                />
                {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
              </div>

              <div className='w-full'>
                <label className='block text-sm font-medium font-inter text-[#414651]'>
                  Last name <span className='text-[#E04F16]'>*</span>
                </label>
                <input
                  type='text'
                  {...register('lastName')}
                  className='mt-1 block rounded-xl outline-none border border-[#D5D7DA] shadow-sm p-2 px-3 w-full'
                  placeholder='Last name'
                />
                {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName.message}</p>}
              </div>
            </div>

            <div className='mt-6'>
              <label className='block text-sm font-medium font-inter text-[#414651]'>
                Email <span className='text-[#E04F16]'>*</span>
              </label>
              <input
                type='email'
                {...register('email')}
                className='mt-2 block rounded-xl border outline-none border-[#D5D7DA] shadow-sm p-2 px-3 w-full'
                placeholder='you@company.com'
              />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            </div>

            <div className='mt-6'>
              <label className='block text-sm font-medium font-inter text-[#414651]'>
                Phone number
              </label>
              <input
                type='tel'
                {...register('phone')}
                className='mt-2 block rounded-xl outline-none border border-[#D5D7DA] shadow-sm p-2 px-3 w-full'
                placeholder='+91 12345 67890'
              />
              {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
            </div>

            <div className='mt-6'>
              <label className='block text-sm font-medium font-inter text-[#414651]'>
                Message <span className='text-[#E04F16]'>*</span>
              </label>
              <textarea
                {...register('message')}
                className='block w-full mt-2 rounded-xl outline-none font-normal border font-inter text-base p-2 px-3 text-[#717680] border-[#D5D7DA]'
                placeholder='Leave us a message...'
                rows={5}
              ></textarea>
              {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
            </div>

            <div className='flex mt-6'>
              <input
                type='checkbox'
                {...register('agree')}
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className='w-4'
              />
              <label className='ml-2 font-normal font-inter  outline-none text-base text-[#535862]'>
                You agree to our friendly <span className='underline'>privacy policy.</span>
              </label>
              {errors.agree && <p className='text-red-500 text-sm'>{errors.agree.message}</p>}
            </div>

            <div className='mt-6'>
              <CustomButton
                title={loader ? 'Wait...' : 'Send message'}
                disabled={!isAgreed || loader}
                variant='orange-btn'
                className='w-full'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
