import React, { useEffect, useState } from 'react'
import { poppins } from './_app'
const nav = () => {
  const[bg,setBg] = useState(false);
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

      <img className='w-[124px] h-[24px]' src="./famousLogo.b8e1e88f.svg" alt="" />
      <ul className='flex gap-4 items-center text-[16px] font-bold text-white'><li>
        Pricing</li>
        <li>I'm a creator</li>
        <li><button className='bg-black border-[1px] border-white rounded-4xl p-[10px_28px]'>Login</button></li>
        <li><button className='bg-white border-[1px] !text-black border-black rounded-4xl p-[10px_28px]'>Signup</button></li>
        </ul>
    </div>
  )
}

export default nav
