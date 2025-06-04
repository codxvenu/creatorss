import React, { useEffect, useState } from 'react'
import { lexend, poppins } from './_app'
const nav = () => {
  const[bg,setBg] = useState(false);
  const[nav,setNav] = useState(false);
  useEffect(() => {
    const handleBg = () => {
      if (window.scrollY > window.screen.height - 400) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener('scroll', handleBg);
    handleBg(); // Check once on mount

    return () => window.removeEventListener('scroll', handleBg);
  }, []);
  return (
    <div className={bg ? `${poppins.className} w-screen h-[80px] flex justify-between items-center fixed top-0 z-[100] p-[20px_32px_20px_20px] bg-black` : `${poppins.className} w-screen h-[80px] flex justify-between items-center fixed top-0 z-[100] p-[20px_32px_20px_20px]` }>

      <i className="ri-menu-line lg:hidden text-2xl text-white font-medium" onClick={()=>setNav(!nav)}></i>
      <img className='w-[124px] h-[24px]' src="./famousLogo.b8e1e88f.svg" alt="" />
      <ul className='lg:flex gap-4 items-center text-[16px] font-bold text-white hidden'><li>
        Pricing</li>
        <li>I'm a creator</li>
        <li><button className='bg-black border-[1px] border-white rounded-4xl p-[10px_28px]'>Login</button></li>
        <li><button className='bg-white border-[1px] !text-black border-black rounded-4xl p-[10px_28px]'>Signup</button></li>
        </ul>
        <span className='lg:hidden'></span>
        {nav && 
        <div className='h-screen w-screen flex flex-col fixed top-0 left-0'>

          <ul className={`lg:hidden grid items-center font-bold text-white h-fit w-screen bg-black text-2xl  p-[20px] pb-2 ${lexend.className}`}>
        <i className="ri-close-large-line mb-5 font-normal text-[16px]" onClick={()=>setNav(!nav)}></i>
        <li className='border-b-[1px] border-b-[#767676] py-5'>Home</li>
        <li className='border-b-[1px] border-b-[#767676] py-5'>Pricing</li>
        <li className='py-5'>I'm a creator</li>
        <li className='py-3 flex justify-between text-[16px]'><button className='bg-black border-[1px] border-white rounded-4xl p-[10px_28px]'>Login</button>
       <button className='bg-white border-[1px] !text-black border-black rounded-4xl p-[10px_28px]'>Signup</button></li>
        </ul>
        <div className='h-full w-full bg-[rgba(0,0,0,0.7)]' onClick={()=>setNav(!nav)}></div>
        </div>

        }
    </div>
  )
}

export default nav
