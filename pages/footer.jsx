import React from 'react'
import { lexend } from './_app'

const footer = () => {
  return (
    <div className={`${lexend.className} w-full bg-black text-white pt-[40px] `}>
        <div className='max-w-[1400px] grid grid-cols-2 mx-auto w-full'>

      <div className='pb-[40px]'>
      <h1 className='text-[56px] font-semibold'>Famous</h1>
        <p className='text-[14px]'>A product by One Impression</p>
        <span>
            <h2 className='text-[12px] text-[rgba(255,255,255,0.58)] my-[40px_18px]'>Download our creator App</h2>
            <img className='h-[40px] w-[134px] mb-[16px]' src="https://www.famous.club/svg/appstore.svg" alt="" />
            <img  className='h-[40px] w-[134px] mb-[60px]'  src="https://www.famous.club/svg/googleplay.svg" alt="" />
        </span>
        <span className='block w-full '>
            <h4 className='text-[12px] my-[12px] text-[rgba(255,255,255,0.58)] '>Follow us</h4>
            <span className='flex mb-[24px] gap-[18px]'>
                <img className='w-[24px] h-[24px] invert' src="https://www.famous.club/svg/insta.svg" alt="" />
                <img className='w-[24px] h-[24px] invert' src="https://www.famous.club/svg/linkedin.svg" alt="" />
                <img className='w-[24px] h-[24px] invert' src="https://www.famous.club/svg/x.svg" alt="" />
                <img className='w-[24px] h-[24px] invert' src="https://www.famous.club/svg/fb.svg" alt="" />
            </span>
            <h3 className='text-[14px] font-medium'>© 2025 Anycast Technology Pvt. Ltd. All rights reserved</h3>
        </span>
      </div>
        <div className='w-full foot'>
            <ul>
                <li>For Creators</li>
                <li>IOS creator app</li>
                <li>fAMOUS</li>
                <li>Pricing</li>
                <li>Case studies</li>
                <li></li>
            </ul>
            <ul>
                <li>COMPANY</li>
                <li>Blogs</li>
                <li>Abous Us</li>
                <li>brand terms & conditions</li>
                <li>creator terms & conditions</li>
                <li>Privacy policy</li>
                <li>Cancellation & refund policy</li>
                <li>terms of service</li>
                <li>Security Announcement</li>
            </ul>
            <ul>
                <li>HELP</li>
                <li>contact us</li>
                <li>Knowledge base</li>
                <li>talk to sales</li>
            </ul>
        </div>

        </div>
    </div>
  )
}

export default footer
