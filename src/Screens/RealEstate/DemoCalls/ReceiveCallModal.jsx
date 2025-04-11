import React from 'react'
import Modal from '@/components/Ui/Modal'
import { X } from 'lucide-react'
import {CustomButton} from "@/components/Ui/Button/CustomButton"
import { useState } from 'react';
import OtpInput from 'react-otp-input';

const ReceiveCallModal = ({ callModal, setCallModal }) => {
  const [toggleOtp, setToggleOtp] = useState(false);
  const [counter, setCounter] = useState(60);
  const [otp, setOtp] = useState("");

  const handleToggleOtp = () => {
    setToggleOtp(true)
  }

  const handleResend = async () => {
    // const mobileOtp = await dispatch(sendOtpApi(loginData?.pnumber));
    // dispatch(userDetails({ ...loginData, otp: mobileOtp?.payload?.data?.OTP }));
    setCounter(60);
  }

  const handleAutoSubmit = async (otp) => {
    setOtp(otp);
    // if (otp.length === 4) {
    //     if (parseInt(loginData?.otp) === parseInt(otp)) {
    //         await dispatch(userDetails({ ...loginData, isloggedin: true }));
    //         navigate("/");
    //     } else {
    //         toast.error("Invalid OTP. Please try again.");
    //     }
    // }
  }




  return (
    <Modal isOpen={callModal} onClose={() => setCallModal(false)} className={"max-w-md p-6"}>
      {toggleOtp ?
        (
          <div>
            <div className='flex justify-between'>
              <h2 className='font-bold font-inter text-[24px]'>Verify your number</h2>
              <X onClick={() => { setCallModal(false), setToggleOtp(false) }} className='cursor-pointer' />
            </div>
            <div className='w-full flex items-center lg:items-start flex-col  my-4'>
              <label className='text-sm text-[#344054] font-medium mb-1'>Secure Code</label>
              <OtpInput
                value={otp}
                onChange={handleAutoSubmit}
                numInputs={4}
                shouldAutoFocus="true"
                containerStyle="flex w-full justify-between md:gap-8 gap-3"
                inputStyle="border h-16 flex-1 max-w-20 rounded-lg outline-0 "
                renderInput={(props) => <input {...props} placeholder='0' type='number' />}
              />
              <p className='text-sm text=[#475467] mt-1'>Enter the 4 digit code sent to +91 9744573344 </p>
              <div className='my-4 flex justify-start  gap-3 lg:flex-row flex-col font-semibold w-full  '>
                <div onClick={() => counter === 0 && handleResend()} className='text-sm cursor-pointer '>
                  {counter === 0 ? <p className='text-[#6941C6] '>Resend OTP</p> : `Resend code ${counter}`}
                </div>
              </div>

              <p className='text-[#6941C6] font-semibold' onClick={() => setToggleOtp(false)}>Change mobile number</p>
              <CustomButton title={"Verify now"} variant="blue-btn" type={"button"} className='w-full mt-3' onClick={() => handleToggleOtp()} />
            </div>
          </div>

        )
        :
        (
          <div>
            <div className='flex justify-between'>
              <h2 className='font-bold font-inter text-[24px]'>Add your number to receive call</h2>
              <X onClick={() => { setCallModal(false), setToggleOtp(false) }} className='cursor-pointer' />
            </div>
            <div>
              <label htmlFor="mobileNumber" className='text-sm'>Mobile No.<span className='text-red-600'>*</span> </label>
              <div>
                <input type="number" className='border rounded-lg mt-2 w-full p-2 outline-none' placeholder='+91 1234567890' />
                <div className='mt-2 text-sm flex items-center' >
                  <input type="checkbox" className='mr-2' /> I accept <a className='underline cursor-pointer text-[#7F56D9] mx-1' onClick={() => navigate("/terms-and-conditions")}> Terms & Conditions </a> {" "} and {" "}
                  <a onClick={() => navigate("/privacy-policy")} className='underline cursor-pointer text-[#7F56D9] ml-1'> Privacy Policy</a>
                </div>
              </div>
              <CustomButton title={"Send Call"} variant="blue-btn" type={"button"} className='w-full mt-3' onClick={() => handleToggleOtp()} />
            </div>
          </div>
        )
      }
    </Modal>
  )
}

export default ReceiveCallModal