import React, { useEffect, useState,useRef } from 'react'
import { lexend, poppins } from './_app'
import {Image_urls ,creators, faqData, mediaImages, testimonial , testimonials} from '@/data'
const home = () => {
  const ScrollRef = useRef();
  const [active,setActive] = useState(1);
  const[activeVedio , setActiveVedio] = useState("");
  const[tab,setTab] = useState(1);
  const[creator,setCreator] = useState("celebrity");
  const[scrollTab,setScrollTab] = useState(0);
  const[Page,setPage] = useState(true);
  const[appTab,setAppTab] = useState(0);
  const[page10,setPage10] = useState(0);
  const[qna,setQna] = useState(0);
  const[reset,setReset] = useState(false);
  useEffect(()=>{
    if(active === 1){
      setActiveVedio("https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/relevantCreators/Find-Creators.mp4")
    }else if(active === 2){
      setActiveVedio("https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/relevantCreators/Add-to-Cart.mp4")
    }else if(active === 3){
      setActiveVedio("https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/relevantCreators/Place-an-Order.mp4")
    }else if(active === 4){
      setActiveVedio("https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/relevantCreators/Content%20Creation.mp4")
    }else if(active === 5){
      setActiveVedio("https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/relevantCreators/Performance.mp4")
    }
  },[active]);

  useEffect(()=>{
   const handleAutoTab = ()=>{
    if(ScrollRef.current.scrollTop < window.innerHeight && ScrollRef.current.scrollTop >= 0){
      setScrollTab(0)
    }else if(ScrollRef.current.scrollTop < window.innerHeight*2 && ScrollRef.current.scrollTop >= window.innerHeight){
      setScrollTab(1)
    }else if(ScrollRef.current.scrollTop < window.innerHeight*3 & ScrollRef.current.scrollTop >= window.innerHeight*2){
      setScrollTab(2)
    }else if(ScrollRef.current.scrollTop < window.innerHeight*4 & ScrollRef.current.scrollTop >= window.innerHeight*3){
      setScrollTab(3)
    }
  }
      ScrollRef.current.addEventListener("scroll" , handleAutoTab);
  },[])
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(appTab !== 4){
        setAppTab(appTab+1)
      }else{
        setAppTab(0)
      }
    },3000)
    return ()=> clearTimeout(timer)
  },[appTab]);
  const handleAutoScroll = (i)=>{
    setScrollTab(i)
    if(ScrollRef){
    ScrollRef.current.scrollTo({
      top : window.innerHeight*i,
      behavior : "smooth"
    });
  }
  }
  useEffect(() => {
  const timer2 = setTimeout(() => {
    setPage10(prev => (prev !== 6 ? prev + 1 : 0));
  }, 3000);
  return () => clearTimeout(timer2);
}, [page10]);

useEffect(()=>{
  setReset(true);
  const timer3 = setTimeout(()=>{
    setReset(false);
  },50)
  return ()=>clearTimeout(timer3)
},[creator])

  return (
    <div className='scrollable-hidden-scrollbar'>
      <div className="page1 h-[92vh] flex justify-center w-full relative ">
        <div className='w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] z-10 absolute'></div>
        <video autoPlay loop muted playsInline className='object-cover absolute z-0 h-full w-full' src="https://oneimpressionproductioncrm.s3.amazonaws.com/oneimpressionproductioncrm/1740145375864168"></video>
     <div className='gillb flex flex-col text-center items-center justify-center max-w-[677.2px] h-full z-30 text-white'>
        <h1 className={`${poppins.className} text-[62px] leading-[1.3] font-extrabold mb-[14px] w-max`}>Reinventing Influencer <br />
Marketing</h1>
<p className='text-[20px] mb-[28px] font-medium'>The most advanced Influencer Marketplace to <br />
connect with the best creators</p>
<button className='font-bold p-[18px_34px] text-black bg-white rounded-4xl text-[20px] '>Unlock your free trial</button>
     </div>
      </div>
       <ul className={`${lexend.className} bg-black text-white flex text-[20px] gap-[28px] py-[23px] items-center justify-center`}>
        <li className='flex gap-[28px]'>
            <h2>Advanced creator search</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px]'>
            <h2>Transparent pricing</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px]'>
            <h2>Quick checkout</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px]'>
            <h2>Direct creator connect</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px]'>
            <h2>Easy cancellations</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
      </ul>
      <div className='relative overflow-x-hidden'>
         
     
<div className='absolute top-1/2 -translate-y-1/2 w-full h-[103px] flex justify-between z-50'>
   <span className='bg-white block opacity-[.9] blur-[4px] w-[90px] h-[103px]'></span> 
   <span className='bg-white block opacity-[.9] blur-[4px] w-[90px] h-[103px]'></span> 
</div>

      <p className={`${poppins.className} text-[12px] leading-[16px] my-[60px_46px] text-center font-bold text-black`}>TRUSTED BY 1000+ BRANDS</p>
      <ul className='flex gap-[50px] pb-20 hover:transition-none marquee  whitespace-nowrap '>
        {Image_urls.map((url,index)=>(
        
            <li className='shrink-0' key={index}><img className='h-[30px] w-auto' src={url.link} alt="" /></li>
        ))}
      </ul>

       </div>
       <div className="page2 bg-[rgb(237,234,252)] h-[1160px] pt-[140px] mb-[280px] grid justify-items-center">
        <h1 className='text-[64px] font-bold mb-[36px] text-center'>
          Get Famous in just 5 steps
        </h1>
        <ul className={`${poppins.className} flex justify-center items-center text-[16px] font-bold gap-[12px] cursor-pointer`}>
          <li className='p-[14px_26px] mb-[36px]  rounded-4xl' style={{background : active === 1 ? "rgba(101,49,255,0.22)" : "white"}} onClick={()=>setActive(1)}>
            <h1>1. Find creators</h1>
          </li>
          <li className='p-[14px_26px] mb-[36px]  rounded-4xl' style={{background : active === 2 ? "rgba(101,49,255,0.22)" : "white"}} onClick={()=>setActive(2)}>
            <h1>2. Add to cart</h1>
          </li>
          <li className='p-[14px_26px] mb-[36px]  rounded-4xl' style={{background : active === 3 ? "rgba(101,49,255,0.22)" : "white"}} onClick={()=>setActive(3)}>
            <h1>3. Place an order</h1>
          </li>
          <li className='p-[14px_26px] mb-[36px]  rounded-4xl' style={{background : active === 4 ? "rgba(101,49,255,0.22)" : "white"}} onClick={()=>setActive(4)}>
            <h1>4. Content creation</h1>
          </li>
          <li className='p-[14px_26px] mb-[36px]  rounded-4xl' style={{background : active === 5 ? "rgba(101,49,255,0.22)" : "white"}} onClick={()=>setActive(5)}>
            <h1>5. Track performance</h1>
          </li>
        </ul>
        <p className='max-w-[750px] mb-[36px] text-[20px] leading-[30px] text-black text-center'>Famous enables seamless communication with creators by allowing direct calls & 1:1 chat feature to review scripts & share feedbacks on content versions for a <br />smooth go live</p>
       <div className='w-[1240px] h-[860px] rounded-[30px] bg-white border-2 border-[rgb(101,49,255)] outline-[rgba(101,49,255,0.1)] outline-[10px] '>
        <video loop autoPlay muted className='rounded-[30px] object-cover w-full h-full' src={activeVedio}></video>
       </div>
       </div>
       <div className="page3 py-[140px] bg-black relative overflow-x-hidden">
        <h1 className='text-[72px] mb-[60px] font-bold text-white text-center' ><span className='text-[#caff30]'>Industry-first 
          </span> Marketplace <br />features</h1>
          <div className="tab_shift absolute top-[50%] w-[64.4%] h-fit flex justify-between left-[17%] z-50">
            <span className={`${tab===0? "opacity-0" : "opacity-100"} flex items-center justify-center bg-white text-black w-[48px] h-[48px] text-[28px] rounded-full text-center transition-opacity duration-200 ease-in-out`} onClick={()=>{tab !== 0 ? setTab(tab-1) : ""}}><i className="ri-arrow-left-s-line"></i></span>
            <span className={`${tab===3? "opacity-0" : "opacity-100"} flex items-center justify-center bg-white text-black w-[48px] h-[48px] text-[28px] rounded-full text-center transition-opacity duration-200 ease-in-out`} onClick={()=>{tab < 3 ? setTab(tab+1) : ""}}><i className="ri-arrow-right-s-line"></i></span>
          </div>
          <ul className={`${poppins.className} flex justify-center items-center w-max  transition-transform duration-500 ease-in-out`} style={{ transform: `translateX(${375 - 760*tab}px)` }}
>
            <li className={`grid justify-items-center shrink-0 mx-[45px] py-[64px] transition-all duration-500 ease-in-out ${tab===0? `scale-[1.2] opacity-100` : `scale-[1] opacity-60`}`}>
              <img className='h-[386px] w-[670px] rounded-4xl p-5 object-cover'  src="./image0.webp"/>
             <small className='text-[rgb(101,49,255)] text-[16px] mt-[26px] font-bold' >CREATOR RANKING ALGORITHM</small> 
              <h1 className='mt-[17px] text-[36px] mb-[12px] text-white font-bold text-center'>See the best creators on top</h1>
              <p className='w-[566px] text-[20px] leading-[30px] text-white text-center'>'Famous recommended’ is a pioneering feed ranking algorithm which uses 70+ creator data metrics to show the most relevant creators on top
</p>
            </li>
            <li className={`grid justify-items-center shrink-0 mx-[45px] py-[64px] transition-all duration-500 ease-in-out ${tab===1? `scale-[1.2] opacity-100` : `scale-[1] opacity-60`}`}>
              <video className='h-[386px] w-[670px] rounded-4xl p-5 object-cover' autoPlay muted playsInline src="https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/industryMarketplace/Know-the-Best-Price-of-Creators.mp4"></video>
             <small className='text-[rgb(101,49,255)] text-[16px] mt-[26px] font-bold' >PRICE PREDICTION ENGINE</small> 
              <h1 className='mt-[17px] text-[36px] mb-[12px] text-white font-bold text-center'>Know the best prices of creators</h1>
              <p className='w-[566px] text-[20px] leading-[30px] text-white text-center'>Our Pricing Wizard uses 20+ data inputs like past campaign performance, profile growth etc to predict the best prices of 1Mn+ creators
</p>
            </li>
            <li className={`grid justify-items-center shrink-0 mx-[45px] py-[64px] transition-all duration-500 ease-in-out  ${tab===2? `scale-[1.2] opacity-100` : `scale-[1] opacity-60`}`}>
              <img className='h-[386px] w-[670px] rounded-4xl p-5 object-cover'  src="./image2.webp"></img>
             <small className='text-[rgb(101,49,255)] text-[16px] mt-[26px] font-bold' >CHAT/CALL CREATORS DIRECTLY</small> 
              <h1 className='mt-[17px] text-[36px] mb-[12px] text-white font-bold text-center'>1:1 Connect with creators</h1>
              <p className='w-[566px] text-[20px] leading-[30px] text-white text-center'>Famous allows you to connect with creators directly via our chat & calling features. Creators use the Famous Creator App to seamlessly connect with you
</p>
            </li>
            <li className={`grid justify-items-center shrink-0 mx-[45px] py-[64px] transition-all duration-500 ease-in-out ${tab===3? `scale-[1.2] opacity-100` : `scale-[1] opacity-60`}`}>
              <img className='h-[386px] w-[670px] rounded-4xl p-5 object-cover' src="./image3.webp"></img>
             <small className='text-[rgb(101,49,255)] text-[16px] mt-[26px] font-bold' >AUDIENCE INSIGHTS</small> 
              <h1 className='mt-[17px] text-[36px] mb-[12px] text-white font-bold text-center'>Know the followers of creators</h1>
              <p className='w-[566px] text-[20px] leading-[30px] text-white text-center'>Check the demographic details like credibility score, age, gender & location of the creators’ follower base to understand the real audience of your campaigns
</p>
            </li>
          
          </ul>
       </div>
       <div className={`pag4 grid justify-items-center py-[140px] ${poppins.className} bg-[rgb(202,255,48)] overflow-x-hidden`}>
        <h1 className='text-[72px] mb-[40px] font-bold text-black text-center'>Work with the <span className='text-[rgb(101,49,255)]'>best creators
          </span> <br />from the industry</h1>
          <ul className='flex items-center justify-center gap-3 mb-[60px]'>
            <li className={`${creator === "celebrity"? "text-white bg-black" : "text-black bg-white"} p-[10px_16px] cursor-pointer rounded-4xl transition-all duration-300`} onClick={()=>setCreator("celebrity")}>
            Celebrity
            </li>
            <li className={`${creator === "comedy"? "text-white bg-black" : "text-black bg-white"} p-[10px_16px] cursor-pointer rounded-4xl transition-all duration-300`} onClick={()=>setCreator("comedy")}>
            Comedy
            </li>
            <li className={`${creator === "entertainment"? "text-white bg-black" : "text-black bg-white"} p-[10px_16px] cursor-pointer rounded-4xl transition-all duration-300`} onClick={()=>setCreator("entertainment")}>
            Entertainment
            </li>
            <li className={`${creator === "infotainment"? "text-white bg-black" : "text-black bg-white"} p-[10px_16px] cursor-pointer rounded-4xl transition-all duration-300`} onClick={()=>setCreator("infotainment")}>
            Infotainment
            </li>
            <li className={`${creator === "lifestyle"? "text-white bg-black" : "text-black bg-white"} p-[10px_16px] cursor-pointer rounded-4xl transition-all duration-300`} onClick={()=>setCreator("lifestyle")}>
            Lifestyle
            </li>
            <li className={`${creator === "technology"? "text-white bg-black" : "text-black bg-white"} p-[10px_16px] cursor-pointer rounded-4xl transition-all duration-300`} onClick={()=>setCreator("technology")}>
            Technology
            </li>
            <li className={`${creator === "fitness"? "text-white bg-black" : "text-black bg-white"} p-[10px_16px] cursor-pointer rounded-4xl transition-all duration-300`} onClick={()=>setCreator("fitness")}>
            Fitness
            </li>
            </ul>
            <ul className={`flex justify-center items-center overflow-x-hidden h-max ${reset && "reset" } hover:reset marquee`}>
              {creators.filter((ctor)=>(ctor.category === creator)).map((creator)=>(

              <li className='grid justify-items-center items-center w-[240px] ml-[30px] bg-white rounded-2xl min-h-[142px] relative' key={creator.username}>
                <i className="ri-instagram-line absolute top-[10px] left-[14px] text-2xl font-normal text-white"></i>
                <img className='w-[240px] h-[290px] object-cover rounded-t-2xl' src={creator.image} alt="" />
                <span className='block p-[16px_16px_20px] w-[240px] h-[113px]'>
                  <h1 className='text-[20px] font-bold mb-1.5'>{creator.name}</h1>
                  <span className='flex  items-center text-[14px] text-[rgba(29,37,45,0.58)] mb-2'><h2 className='text-ellipsis max-w-[96px] overflow-hidden whitespace-nowrap'>{creator.username} </h2> <h2>{creator.followers} followers</h2></span>
                  <p className='text-[14px] text-[rgb(101,49,255)] flex items-center gap-1 font-medium'><img className='w-[16px] h-[16px]' src="./priceIcon.7d899ac3.svg" alt="" /> Last Deal Price : {creator.lastDealPrice} </p>
                </span>
                </li>
              ))}
              {creators.filter((ctor)=>(ctor.category === creator)).map((creator)=>(

              <li className='grid justify-items-center items-center w-[240px] ml-[30px] hover:reset bg-white rounded-2xl min-h-[142px] relative' key={creator.username}>
                <i className="ri-instagram-line absolute top-[10px] left-[14px] text-2xl font-normal text-white"></i>
                <img className='w-[240px] h-[290px] object-cover rounded-t-2xl' src={creator.image} alt="" />
                <span className='block p-[16px_16px_20px] w-[240px] h-[113px]'>
                  <h1 className='text-[20px] font-bold mb-1.5'>{creator.name}</h1>
                  <span className='flex  items-center text-[14px] text-[rgba(29,37,45,0.58)] mb-2'><h2 className='text-ellipsis max-w-[96px] overflow-hidden whitespace-nowrap'>{creator.username} </h2> <h2>{creator.followers} followers</h2></span>
                  <p className='text-[14px] text-[rgb(101,49,255)] flex items-center gap-1 font-medium'><img className='w-[16px] h-[16px]' src="./priceIcon.7d899ac3.svg" alt="" /> Last Deal Price : {creator.lastDealPrice} </p>
                </span>
                </li>
              ))}
            </ul>
       </div>
       <div className={`page5 grid grid-cols-2 w-screen h-[400vh]`} ref={ScrollRef}>
        <div className='bg-black text-white h-screen sticky z-[80] top-0'>
          <ul className='flex justify-center items-center gap-4 mt-[130px]'>
            <li className={`flex gap-1.5 items-center p-[10px_16px] rounded-3xl text-[14px] cursor-pointer border-[1px] border-white font-semibold ${scrollTab ===0? "text-black bg-white" : "text-white bg-black"}`} onClick={()=>{handleAutoScroll(0);}}>
              <img className='w-[24px] h-[24px]' src={scrollTab===0 ? "./costActive.bf3332ed.svg" : "./costInactive.66b42569.svg"} alt="" /><h1>Save cost</h1>
            </li>
            <li className={`flex gap-1.5 items-center p-[10px_16px] rounded-3xl text-[14px] cursor-pointer border-[1px] border-white font-semibold ${scrollTab ===1? "text-black bg-white" : "text-white bg-black"}`} onClick={()=>{handleAutoScroll(1)}}>
              <img className='w-[24px] h-[24px]' src={scrollTab ===1 ? "./workflowActive.70779927.svg" : "./workflowInactive.c1817266.svg" }alt="" /><h1>Easier workflow</h1>
            </li>
            <li className={`flex gap-1.5 items-center p-[10px_16px] rounded-3xl text-[14px] cursor-pointer border-[1px] border-white font-semibold ${scrollTab ===2? "text-black bg-white" : "text-white bg-black"}`} onClick={()=>{handleAutoScroll(2)}}>
              <img className='w-[24px] h-[24px]' src={scrollTab ===2 ? "./fastActive.aae3b042.svg" : "./fast.802a2595.svg"} alt="" /><h1>Faster campaign</h1>
            </li>
            <li className={`flex gap-1.5 items-center p-[10px_16px] rounded-3xl text-[14px] cursor-pointer border-[1px] border-white font-semibold ${scrollTab ===3? "text-black bg-white" : "text-white bg-black"}`} onClick={()=>{handleAutoScroll(3)}}>
              <img className='w-[24px] h-[24px]' src={scrollTab === 3 ? "./controlActive.15f2b301.svg" : "./controlInactive.edc54679.svg" } alt="" /><h1>More control</h1>
            </li>
          </ul>
          <div className='w-full flex justify-center items-center mt-20'>
            <img className='w-[544px] h-[400px]' src="./image4.webp" alt="" />
          </div>
        </div>
        <div className={`overflow-hidden bg-white text-black  relative flex flex-col`} >
 <ul>
  <li className='h-[100vh] flex flex-col justify-center ml-[50px] gap-[34px] '>
            <h1 className='font-bold text-[48px]'>Save up to 30% <br />costs</h1>
            <ul>
              <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" /> No middlemen: Work directly with creators/exclusive agents</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />No hidden charges: Transparent pricing</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />True marketplace: Industry-first pricing guidance</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />Cutting-edge pricing engine: Predicts the best prices</li>
            </ul>

  </li>
  <li className='h-[100vh] flex flex-col justify-center ml-[50px] gap-[34px]'>
            <h1 className='font-bold text-[48px]'>Save up to 30% <br />costs</h1>
            <ul>
              <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" /> No middlemen: Work directly with creators/exclusive agents</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />No hidden charges: Transparent pricing</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />True marketplace: Industry-first pricing guidance</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />Cutting-edge pricing engine: Predicts the best prices</li>
            </ul>

  </li>
  <li className='h-[100vh] flex flex-col justify-center ml-[50px] gap-[34px]'>
            <h1 className='font-bold text-[48px]'>Save up to 30% <br />costs</h1>
            <ul>
              <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" /> No middlemen: Work directly with creators/exclusive agents</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />No hidden charges: Transparent pricing</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />True marketplace: Industry-first pricing guidance</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />Cutting-edge pricing engine: Predicts the best prices</li>
            </ul>

  </li>
  <li className='h-[100vh] flex flex-col justify-center ml-[50px] gap-[34px]'>
            <h1 className='font-bold text-[48px]'>Save up to 30% <br />costs</h1>
            <ul>
              <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" /> No middlemen: Work directly with creators/exclusive agents</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />No hidden charges: Transparent pricing</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />True marketplace: Industry-first pricing guidance</li>
               <li className='text-[20px] flex gap-[21px] justify-start items-center'><img src="./pointerStar.2bf3bd47.svg" alt="" />Cutting-edge pricing engine: Predicts the best prices</li>
            </ul>

  </li>
 </ul>
 <div className='absolute h-[400vh] right-10'>

 <ul className='sticky top-1/2 -translate-y-1/2 gap-[12px] right-5 flex flex-col items-center justify-center w-max z-50'>
  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===0 ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===1 ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===2 ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===3 ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
 </ul>
 </div>
 </div>
       </div>
       <div className={`${lexend.className} page6 grid justify-items-center my-[130px]`}>
        <h1 className={`${poppins.className} text-[64px] font-bold  ml-[-130px] mb-[60px]`}>
          Navigating creator collaborations <br /> to <span className=' text-[rgb(101,49,255)]'>achieve growth</span>
        </h1>
        <div className='flex justify-between gap-[60px]'>
          <span className='flex w-[534px] h-[360px] p-[20px_40px] gap-2 bg-[rgb(237,234,252)] rounded-3xl items-center'>
            <span className='flex flex-col h-full items-start w-full'>
             <img src="./cetaphil.webp" className='w-[76px] mb-[28px]' alt="" />
             <h1 className='text-[21px] font-bold'>How Cetaphil Made <br /> Skincare Relatable in India?</h1>
             <span className='flex justify-between mt-[40px]'>

             <span className='flex flex-col justify-between text-[20px] font-medium'>
              <h3 className='font-semibold'>100M+</h3>
              <h3 className='text-[16px] text-[#1d252d94]'>Reach</h3>
             </span>
             <span className='flex flex-col justify-between text-[20px] font-medium'>
              <h3 className='font-semibold'>1.4x</h3><h3 className='text-[16px] text-[#1d252d94]'>Organic search</h3>
             </span>
             </span>
              <h1 className='text-[20px] text-[#6531ff] mt-[31px] '>Read More <i className="ri-arrow-right-s-line text-2xl align-text-top"></i></h1>
            </span>
            <img className='w-[136px] h-[267px] font-semibold  border-[rgb(101,49,255)] rounded-3xl border-2' src="https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/creatorCollaboration/myMahina.png" alt="" />
          </span>
          <span className='flex w-[534px] h-[360px] p-[20px_40px] gap-2 bg-[rgb(237,234,252)] rounded-3xl items-center'>
            <span className='flex flex-col items-start h-full w-full'>
             <img src="./mahinawebp.webp" className='w-[136px] mb-[28px]' alt="" />
             <h1 className='text-[21px] font-bold'>How MyMahina used <br /> Famous to unlock growth?
</h1>
             <span className='flex justify-between mt-[40px]'>

             <span className='flex flex-col justify-between text-[20px] font-medium'>
              <h3>₹ 0.06</h3>
              <h3 className='text-[16px] text-[#1d252d94]'>CPV (Cost per view)</h3>
             </span>
             <span className='flex flex-col justify-between text-[20px] font-medium'>
              <h3>874%</h3><h3 className='text-[16px] text-[#1d252d94]'>ROI</h3>
             </span>
             </span>
              <h1 className='text-[20px] text-[#6531ff] mt-[31px] '>Read More <i className="ri-arrow-right-s-line text-2xl align-text-top"></i></h1>
            </span>
            <img className='w-[136px] h-[267px] font-semibold  border-[rgb(101,49,255)] rounded-3xl border-2' src="https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/creatorCollaboration/cetaphil.png" alt="" />
          </span>

          
        </div>
       </div>
       <div className={`page7 ${poppins.className} text-white pt-[130px] bg-black`}>
        <h1 className="text-[80px] font-bold pl-[210px]">100K+ creators on our app</h1>
        <h2 className='text-[24px] font-bold py-[24px] pl-[210px] mb-[80px]'>Famous creator app enables seamless campaign participation for our creators</h2>
       <div className='flex pl-[194px] relative'>
        <div className='w-[374px] h-[660px] shrink-0 '>

        <video src="https://oneimpressionproductioncrm.s3.amazonaws.com/oneimpressionproductioncrm/1741677178878316" autoPlay loop playsInline muted className='w-full h-full'/>
        </div>
        <div className='overflow-hidden'>

        <ul className='ml-[146px] mt-[120px] flex transition-transform duration-500 ease-out w-max' style={{transform : `translateX(-${100*appTab}%)`}}>
          {testimonials.map((i)=>(

         
          <li className='shrink-0 min-w-full h-fit ' key={i.username}><img className='w-[90px] h-[90px] rounded-full mb-5' src={i.image} alt="" />
          <p className={`${lexend.className} text-[36px] mb-[20px] font-medium w-[662px]`}>{i.text}</p>
         <h3 className={`${lexend.className} text-[20px] font-semibold text-[rgba(255,255,255,0.6)]`  }>{i.username} • {i.followers} followers</h3>
          </li>
           ))}
        </ul>
        </div>
        <div className='w-fit h-fit absolute left-[48%] bottom-[50px]'>

        <ul className='flex gap-[12px]'>
          <li className={`block h-[12px] rounded-full ${appTab ===0 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(0)}></li>
          <li className={`block h-[12px] rounded-full ${appTab ===1 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(1)}></li>
          <li className={`block h-[12px] rounded-full ${appTab ===2 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(2)}></li>
          <li className={`block h-[12px] rounded-full ${appTab ===3 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(3)}></li>
          <li className={`block h-[12px] rounded-full ${appTab ===4 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(4)}></li>

          </ul>
        </div>
        </div>
       </div>
       <div className={`${lexend.className} page8 min-h-[994px] py-[130px] flex flex-col items-center bg-[rgb(202,255,48)]`}>
        <h1 className={`${poppins.className} font-extrabold text-[48px] text-center `}>Famous Guarantee: <span className='text-[rgb(101,49,255)]'>Easy Cancellations!</span></h1>
        <p className='px-[28px] text-[24px] leading-[34px] mb-[60px] font-medium'>Our standard cancellation policy keeps your money 100% safe, cancel <br /> whenever to get a refund upto 100% of the campaign budget</p>
        <ul className='flex items-center justify-center '>
          <li className='w-[340px] h-[420px] perspective-[1000px]  ' >
            <div className='relative transition-transform scale-[0.9] duration-500 transform-3d hover:rotate-y-180 w-full h-full  '>

            <div className=' backface-hidden absolute flex flex-col items-center w-full h-full bg-white rounded-4xl'>
              <img className='w-[120px] h-[120px] mb-5 mt-[56px]' src="https://www.famous.club/svg/contentDislike.svg" alt="" /><h2 className='text-[30px] w-[256px] text-center font-bold'>I don't like <br /> the content created</h2>
              </div>
            <div className=' rotate-y-180 backface-hidden absolute flex flex-col items-center justify-center w-full h-full rounded-4xl bg-[rgba(255,255,255,0.6)]'>
              <h2 className='text-[30px] font-bold w-[256px] flex items-center text-center'>No worries! Get upto 100% refund within minutes</h2>
              </div>
            </div>
              </li>
          <li className='w-[340px] h-[420px] perspective-[1000px]  ' >
            <div className='relative transition-transform scale-[0.9] duration-500 transform-3d hover:rotate-y-180  w-full h-full '>

            <div className=' backface-hidden absolute flex flex-col items-center w-full h-full bg-white rounded-4xl'>
              <img className='w-[120px] h-[120px] mb-5 mt-[56px]' src="https://www.famous.club/svg/notResponding.svg" alt="" /><h2 className='text-[30px] w-[256px] text-center font-bold'>Creator isn't <br /> responding to my calls</h2>
              </div>
            <div className=' rotate-y-180 backface-hidden absolute flex flex-col items-center justify-center w-full h-full rounded-4xl bg-[rgba(255,255,255,0.6)]'>
              <h2 className='text-[30px] font-bold w-[256px] flex items-center text-center'>No worries! Get upto 100% refund within minutes</h2>
              </div>
            </div>
              </li>
          <li className='w-[340px] h-[420px] perspective-[1000px]  ' >
            <div className='relative transition-transform scale-[0.9] duration-500 transform-3d hover:rotate-y-180 w-full h-full '>

            <div className=' backface-hidden absolute flex flex-col items-center w-full h-full rounded-4xl bg-white'>
              <img className='w-[120px] h-[120px] mb-5 mt-[56px]' src="https://www.famous.club/svg/goLiveDelayed.svg" alt="" /><h2 className='text-[30px] w-[256px] text-center font-bold'>Creator has   <br /> delayed the planned go live date </h2>
              </div>
            <div className=' rotate-y-180 backface-hidden absolute flex flex-col items-center justify-center w-full h-full rounded-4xl bg-[rgba(255,255,255,0.6)]'>
              <h2 className='text-[30px] font-bold w-[256px] flex items-center text-center'>No worries! Get upto 100% refund within minutes</h2>
              </div>
            </div>
              </li>
          <li className='w-[340px] h-[420px] perspective-[1000px]  ' >
            <div className='relative transition-transform scale-[0.9] duration-500 transform-3d hover:rotate-y-180  w-full h-full '>

            <div className=' backface-hidden absolute flex flex-col items-center w-full h-full bg-white rounded-4xl'>
              <img className='w-[120px] h-[120px] mb-5 mt-[56px]' src="https://www.famous.club/svg/backedOut.svg" alt="" /><h2 className='text-[30px] w-[256px] text-center font-bold'>Creator backed out<br /> at the last minute</h2>
              </div>
            <div className=' rotate-y-180 backface-hidden absolute flex flex-col items-center justify-center w-full h-full  rounded-4xl bg-[rgba(255,255,255,0.6)]'>
              <h2 className='text-[30px] font-bold w-[256px] flex items-center text-center'>No worries! Get upto 100% refund within minutes</h2>
              </div>
            </div>
              </li>
        </ul>
       </div>
       <div className={`${lexend.className} page9 py-[130px] bg-[rgb(237,234,252)] grid justify-items-center`}>
        <h1 className={`${poppins.className} text-[60px] font-bold mb-[60px] w-[80%]`}>Share all your custom requirements <br />with ease</h1>
        <div className="grid grid-cols-2 gap-12">
          <span className='block h-[400px] w-[606px] bg-white  pt-[36px] rounded-3xl'>
            <div className="data flex flex-col gap-2 mb-5 pl-[36px]">
              <h1 className='text-[36px] font-medium'>Deliverables</h1>
              <small className='text-[20px] font-normal text-[rgba(29,37,45,0.58)]'>Select content type from a list of over 100 options</small>
            </div>
            <img src="https://www.famous.club/_next/static/media/deliverablePills.0c0e9d65.svg" alt="" />
          </span>
          <span className='block h-[400px] w-[606px] bg-white  pt-[36px] rounded-3xl'>
            <div className="data flex flex-col gap-2 mb-5 pl-[36px]">
              <h1 className='text-[36px] font-medium'>Content licensing</h1>
              <small className='text-[20px] font-normal text-[rgba(29,37,45,0.58)]'>Buy content rights add-ons with the content</small>
            </div>
            <img src="https://www.famous.club/_next/static/media/contentLicensing.36625d50.svg" alt="" />
          </span>
          <span className='block h-[400px] w-[606px] bg-white  pt-[36px] rounded-3xl'>
            <div className="data flex flex-col gap-2 mb-5 pl-[36px]">
              <h1 className='text-[36px] font-medium'>Exclusive deals</h1>
              <small className='text-[20px] font-normal text-[rgba(29,37,45,0.58)]'>Get creators to be exclusive for your category</small>
            </div>
            <img src="https://www.famous.club/_next/static/media/exclusiveDetails.b5c1b748.svg" alt="" />
          </span>
          <span className='block h-[400px] w-[606px] bg-white  pt-[36px] rounded-3xl'>
            <div className="data flex flex-col gap-2 mb-5 pl-[36px]">
              <h1 className='text-[36px] font-medium'>Advanced settings</h1>
              <small className='text-[20px] font-normal text-[rgba(29,37,45,0.58)]'>Add upto 15 custom requirements in a jiffy!</small>
            </div>
            <img src="https://www.famous.club/_next/static/media/advancedSettings.455e6dd6.svg" alt="" />
          </span>
        </div>
       </div>
       <div className={`${lexend.className} page10 grid grid-cols-2 justify-items-center py-[130px]`}>
<div className='pt-[72px]'>
  <h1 className={`${poppins.className} text-[65px] font-bold text-start mb-[26px]`}>
    Hear from our <br />community
  </h1>
  <h2 className='text-[20px] font-medium'>Here's what our clients have to say about <br /> our products</h2>
</div>
<div className='w-full h-full overflow-hidden' >
  <img className='w-[66px] h-[56px] mb-[32px]' src="https://www.famous.club/svg/quote.svg" alt="" />
  <div className='flex w-full max-h-617px transition-transform duration-500 ease-out' style={{transform : `translateX(-${100*page10}%)`}}>

{testimonial.map((i)=>(
  <span className='block w-full max-h-617px shrink-0'>
    <h1 className="text-[48px] font-semibold mb-[36px]">{i.quote}</h1>
    <h2 className='text-[28px] font-semibold mb-[10px]'>{i.name}</h2>
    <small className='text-[20px] text-[rgba(29,37,45,0.576)]'> {i.position} </small>
  </span>
))}
  </div>
   <div className="tab_shift w-full h-fit flex gap-[22px] z-50">
            <span className={` shadow-[0_4px_6px_rgba(0,0,0,.1)] flex items-center justify-center border-[1px] border-[rgba(29,37,45,.1)] bg-white text-black w-[48px] h-[48px] text-[28px] rounded-full text-center transition-opacity duration-200 ease-in-out`} onClick={()=>{page10 !== 0 && setPage10(page10-1)}}><i className="ri-arrow-left-s-line"></i></span>
            <span className={` shadow-[0_4px_6px_rgba(0,0,0,.1)] flex items-center justify-center border-[1px] border-[rgba(29,37,45,.1)] bg-white text-black w-[48px] h-[48px] text-[28px] rounded-full text-center transition-opacity duration-200 ease-in-out`} onClick={()=>{page10 < 6 && setPage10(page10+1)}}><i className="ri-arrow-right-s-line"></i></span>
          </div>
</div>
       </div>
       <div className={`page11 grid justify-items-center h-[524px] w-full bg-black ${poppins.className}`}>
        <div className="flex flex-col items-center justify-center">
          <span className={`${lexend.className} font-semibold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent text-[64px] mb-[30px]`}>
Why wait when you can <br /> experience it yourself?
</span>
<button className='text-[20px] rounded-4xl cursor-pointer p-[18px_34px] bg-white text-black w-fit font-bold'>Start your 72hrs trial</button>
        </div>
       </div>
       <div className={`${lexend.className} page12 flex mx-auto py-[60px] gap-[70px] max-w-[1260px]`}>
        <div>
          <h1 className={`${poppins.className} text-[65px] font-bold`}>Frequently <br />
Asked <br />
Questions</h1>
        </div>
        <div>
          {faqData.map((i,index)=>(
            <div className='cursor-pointer' key={index} onClick={()=>{qna === index+1 ? setQna(0): setQna(index+1)}}>

              <span>
                <span className='flex'>
                  <h1 className='text-[26px] font-semibold mb-4 w-full'>{i.question}</h1>
                  <i className={`ri-arrow-down-s-line text-4xl transition-transform duration-300 ease-in h-[40px] ${qna===index+1 ?"rotate-180" : "rotate-0"}`}></i>
                </span>
                <p className={`${qna===index+1 ? "block" : "hidden"} font-normal text-[20px]`}>
    {i.answer}
                </p>
              </span>
              <hr className={`my-[32px] border-[rgb(228,235,246)] ${faqData.length === index+1 && "hidden"}  border-[1px] w-full`}/>
            </div>
          ))}
        </div>
       </div>
       <div className="page13 bg-[rgb(237,234,252)] flex justify-center">
        <div className='max-w-[1260px] p-[44px_0_55px]'>
  <h1 className='mb-[50px] text-[24px] font-medium uppercase'>We’ve been featured In</h1>
  <div className='flex gap-[36px]'>
    {mediaImages.map((i)=>(
    <img className='h-[28px]' src={i.url} alt="" />
    ))}
  </div>
        </div>
       </div>
       <div className={`${lexend.className} page14 w-full h-full bg-[rgb(33,33,33)] flex justify-center `}>
        <div className='flex max-w-[1260px] gap-[24px] w-full py-[30px] text-white items-center justify-start relative'>
        <h2 className='text-[16px]'>Subscribe to our newsletter </h2>
        <input className='py-[20px] rounded-4xl px-6 w-[532px] bg-[rgb(72,72,72)] text-[16px] outline-0 border-0 max-h-[60px]' type="text" placeholder='Enter your email'/>
        <button className='bg-white text-black p-[20px_43px] ml-1.5 rounded-4xl text-[16px] max-h-[60px] font-semibold'>Subscibe</button>
        <img className='w-[224px] h-[133px] absolute bottom-[5px] right-0' src="https://www.famous.club/svg/newsletter.svg" alt="" />
        </div>
       </div>

    </div>
  )
}

export default home
