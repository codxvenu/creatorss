import React, { useState } from 'react'
import { lexend } from './_app'

const footer = () => {
  const[open,setOpen] = useState();
  return (
    <div className={`${lexend.className} w-full bg-black text-white pt-[40px]`}>
        <div className='max-w-[1400px] grid md:grid-cols-2 mx-auto w-full font-normal border-b-[1px] border-b-[#767676]'>

      <div className='pb-[40px] px-5'>
      <h1 className='text-[56px] font-semibold'>Famous</h1>
        <p className='text-[14px]'>A product by <span className='font-bold'>One</span> Impression</p>
         <div className='w-full foot-small md:!hidden'>
            <ul>
                <li onClick={()=>{open===0? setOpen(-1) : setOpen(0)}}>For Creators <i className={`ri-add-line text-white text-2xl text-center font-normal ${open===0 ? "hidden":"block"}`}></i><i className={`ri-subtract-line text-white text-2xl text-center font-normal ${open===0 ? "block" : "hidden"}`}></i></li>
                {open===0 && (
                  <span>

                    <li>IOS creator app</li>
                    <li>Android creator app</li>
                  </span>
                    )
                }
            </ul>
                <ul>
                <li onClick={()=>{open===1? setOpen(-1) : setOpen(1)}}>fAMOUS <i className={`ri-add-line text-white text-2xl text-center font-normal ${open===1 ?  "hidden":"block"}`}></i><i className={`ri-subtract-line text-white text-2xl text-center font-normal ${open===1 ? "block" : "hidden"}`}></i></li>
                 {open===1 && (<span>

                   <li>Pricing</li>
                   <li>Case studies</li>
                 </span>
                )}
                </ul>
            <ul>
                <li onClick={()=>{open===2? setOpen(-1) : setOpen(2)}}>COMPANY <i className={`ri-add-line text-white text-2xl text-center font-normal ${open===2 ? "hidden":"block"}`}></i><i className={`ri-subtract-line text-white text-2xl text-center font-normal ${open===2 ? "block" : "hidden"}`}></i></li>
                 {open===2 && ( <span>

                <li>Blogs</li>
                <li>Abous Us</li>
                <li>brand terms & conditions</li>
                <li>creator terms & conditions</li>
                <li>Privacy policy</li>
                <li>Cancellation & refund policy</li>
                <li>terms of service</li>
                <li>Security Announcement</li>
                 </span>)}
            </ul>
            <ul>
                <li onClick={()=>{open===3? setOpen(-1) : setOpen(3)}}>HELP <i className={`ri-add-line text-white text-2xl text-center font-normal ${open===3 ? "hidden":"block"}`}></i><i className={`ri-subtract-line text-white text-2xl text-center font-normal ${open===3 ? "block" : "hidden"}`}></i></li>
                 {open===3 && (
                  <span>

                    <li>contact us</li>
                    <li>Knowledge base</li>
                    <li>talk to sales</li>
                  </span>
                 )}
            </ul>
        </div>
        <span className='md:border-0 border-b-[1px] border-[rgba(255,255,255,0.21)] block'>
            <h2 className={`md:text-[12px] text-[14px] text-[rgba(255,255,255,0.58)] md:my-[40px_18px] mb-[18px] mt-[20px]  ${lexend.className}`}>Download our creator App</h2>
            <span className='md:block flex justify-between'>

            <img className='h-[40px] w-[134px] mb-[16px]' src="https://www.famous.club/svg/appstore.svg" alt="" />
            <img  className='h-[40px] w-[134px] md:mb-[60px] mb-[20px]'  src="https://www.famous.club/svg/googleplay.svg" alt="" />
            </span>
        </span>
        <span className='block w-full '>
            <h4 className='md:text-[12px] text-[14px] my-[12px] text-[rgba(255,255,255,0.58)] '>Follow us</h4>
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
                <li>Android creator app</li>
                <li className='mt-6'>fAMOUS</li>
                <li>Pricing</li>
                <li>Case studies</li>
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
        <div className='max-w-[1400px] mx-auto grid gap-4 py-8 md:px-0 px-3'>
          Other products by One Impression
          <h1 className='text-center'>Cloned By Venu Sharma</h1>
        </div>
    </div>
  )
}

export default footer
