import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className=' w-[100%] h-[300px] mt-[90px] flex justify-around'>
        <div className='text-white flex flex-col gap-[1rem] pt-[60px]'>
            <h1 className='text-[1rem] font-bold'>Company</h1>
            <p className='text-[15px] text-gray-300'>About Us</p>
            <p className='text-[15px] text-gray-300'>Careers</p>
            <p className='text-[15px] text-gray-300'>&#169; ALL RIGHT RESERVED</p>
           <div className='flex gap-[1rem] text-[15px] text-gray-300'>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
           </div>
        </div>
        <div className='text-white flex flex-col gap-[1rem]  pt-[60px]'>
            <h1 className='text-[1rem] font-bold'>View Website in</h1>
            <p className='text-[15px] text-gray-300'>✓ English</p>
        </div>
        <div  className='text-white flex flex-col gap-[1rem]  pt-[60px]'>
            <h1 className='text-[1rem] font-bold'>Need Help ?</h1>
            <p className='text-[15px] text-gray-300'>Visit Help Centre</p>
            <p className='text-[15px] text-gray-300'>Share Feedback</p>
        </div>
        <div className='text-white flex flex-col gap-[1rem]  pt-[60px]'>
            <h1 className='text-[1rem] font-bold'>Connect With Us</h1>
            <div className='flex gap-[1rem]'>
            <p className='text-[27px] text-gray-300'><FaInstagram /></p>
            <p className='text-[27px] text-gray-300'><FaFacebook /></p>
            <p className='text-[27px] text-gray-300'><FaXTwitter /></p>
            <p  className='text-[27px] text-gray-300'><FaYoutube /></p>
            </div>
        </div>
    </div>
  )
}

export default Footer