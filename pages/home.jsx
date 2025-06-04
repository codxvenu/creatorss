import React, { useEffect, useState,useRef } from 'react'
import { lexend, poppins } from './_app'
import {DataPage2, DataPage5, Image_urls ,benefitsData,cards,cardsData,creators, faqData, mediaImages, testimonial , testimonials} from '@/data'
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
  const[type,setType]=useState("");
  const[page6,setPage6]= useState(0);
  const[page9,setPage9]=useState(0);
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
    if(window.innerWidth > 1024){
   const handleAutoTab = ()=>{
     const{ top }= ScrollRef.current.getBoundingClientRect();
     const value = -top/window.innerHeight
    if( value > 0 && value < .6){
      setScrollTab(0);
    }else if(value > 0.6 && value < 1.6){
      setScrollTab(1);
    }else if(value > 1.6 && value < 2.6){
      setScrollTab(2);
    }else if(value > 2.6 && value < 3.6){
      setScrollTab(3);
    }
    //console.log(-top / window.innerHeight);
    }
      window.addEventListener("scroll" , handleAutoTab);
  }
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
  const handleAutoScroll = (i) => {
  setScrollTab(i);

  const topValue = ScrollRef.current.offsetTop;

  window.scrollTo({
    top: topValue + window.innerHeight * i,
    behavior: "smooth"
  });
};
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
useEffect(()=>{
  let timer;
  const handleDataWidth= ()=>{
  if(window.innerWidth < 1024){
      setType(`-${100*tab}%`)
        timer = setTimeout(()=>{
        setTab(prev=> (prev !==3? prev+1 : 0));
        setScrollTab(prev=> (prev !==3? prev+1 : 0))
        setPage6(prev=> (prev !==1? prev+1 : 0))
        setPage9(prev=> (prev !==3? prev+1 : 0))
      },3000)
    }else{
      setType(`${375 - 760*tab}px`)
    }
  }
  handleDataWidth();
  window.addEventListener("resize",handleDataWidth)
  return ()=>{clearTimeout(timer); window.removeEventListener("resize",handleDataWidth)}
},[tab])

  return (
    <div className='scrollable-hidden-scrollbar'>
      <div className="page1 h-[92vh] flex justify-center w-full relative ">
        <div className='w-full h-full bg-[rgba(0,0,0,0.7)] z-10 absolute'></div>
        <video autoPlay loop muted playsInline className='object-cover absolute z-0 h-full w-full lg:block hidden' src="https://oneimpressionproductioncrm.s3.amazonaws.com/oneimpressionproductioncrm/1740145375864168"></video>
        <video autoPlay loop muted playsInline className='object-cover absolute z-0 h-full w-full lg:hidden' src="https://oneimpressionproductioncrm.s3.amazonaws.com/oneimpressionproductioncrm/1741158789340401"></video>
        
     <div className='gillb flex flex-col text-center items-center justify-center  h-full z-30 text-white p-1'>
        <h1 className={`${poppins.className} lg:text-[62px] text-[44px] leading-[1.3] font-extrabold mb-[14px]`}>Reinventing Influencer <br />
Marketing</h1>
<p className='lg:text-[20px] text-[16px] mb-[28px] font-medium'>The most advanced Influencer Marketplace to <br className='lg:flex hidden'/>
connect with the best creators</p>
<button className='font-bold lg:p-[18px_34px] p-[12px_28px] text-black bg-white rounded-4xl lg:text-[20px] text-[16px]'>Unlock your free trial</button>
     </div>
      </div>
      {/* <div className='overflow-hidden'>

       <ul className={`${lexend.className} bg-black text-white flex text-[20px] gap-[28px] py-[23px] items-center justify-center lg:overflow-hidden overflow-scroll max-[1024px]:w-max max-[1024px]:marquee`}>
        <li className='flex gap-[28px]'>
            <h2 className="shrink-0">Advanced creator search</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px]'>
            <h2 className="shrink-0">Transparent pricing</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px]'>
            <h2 className="shrink-0">Quick checkout</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px]'>
            <h2 className="shrink-0">Direct creator connect</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px]'>
            <h2 className="shrink-0">Easy cancellations</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>

        <li className='flex gap-[28px] lg:hidden'>
            <h2 className="shrink-0">Advanced creator search</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px] lg:hidden'>
            <h2 className="shrink-0">Transparent pricing</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px] lg:hidden'>
            <h2 className="shrink-0">Quick checkout</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px] lg:hidden'>
            <h2 className="shrink-0">Direct creator connect</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
        <li className='flex gap-[28px] lg:hidden'>
            <h2 className="shrink-0">Easy cancellations</h2>
            <img width={14} height={14} src="./star_round.svg" alt="" />
        </li>
      </ul>
      </div>
      <div className='relative overflow-x-hidden'>
         
     
<div className='absolute top-1/2 -translate-y-1/2 w-full h-[103px] lg:flex hidden justify-between z-50'>
   <span className='bg-white block opacity-[.9] blur-[4px] w-[90px] h-[103px]'></span> 
   <span className='bg-white block opacity-[.9] blur-[4px] w-[90px] h-[103px]'></span> 
</div>

      <p className={`${poppins.className} text-[12px] leading-[16px] my-[60px_46px] text-center font-bold text-black`}>TRUSTED BY 1000+ BRANDS</p>
      <ul className='flex w-max gap-[50px] pb-20 hover:transition-none marquee !animate-[scroll_60s_infinite] whitespace-nowrap '>
        {Image_urls.map((url,index)=>(
        
            <li className='shrink-0' key={index}><img className='h-[30px] w-auto' src={url.link} alt="" /></li>
        ))}
        {Image_urls.map((url,index)=>(
        
            <li className='shrink-0 lg:hidden' key={index}><img className='h-[30px] w-auto' src={url.link} alt="" /></li>
        ))}
      </ul>

       </div>
       <div className="page2 bg-[rgb(237,234,252)] lg:h-[1160px] lg:pt-[140px] pt-[40px] lg:mb-[280px] mb-[40px] grid justify-items-center w-screen px-2">
        <h1 className='lg:text-[64px] text-[40px] font-bold mb-[36px] text-center'>
          Get Famous in just 5 steps
        </h1>
        <div className='overflow-scroll w-[calc(100vw-12px)] scrollable-hidden-scrollbar h-max'>

        <ul className={`${poppins.className} flex justify-center items-center lg:text-[16px] text-[14px] font-bold gap-[12px] cursor-pointer lg:w-full w-max`}>
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
        </div>
        <p className={`${lexend.className} lg:max-w-[50vw] mb-[36px] text-[20px] leading-[30px] text-black text-center`}>Famous enables seamless communication with creators by allowing direct calls & 1:1 chat feature to review scripts & share feedbacks on content versions for a <br />smooth go live</p>
       <div className='lg:w-[1240px] lg:h-[860px] lg:rounded-[30px] rounded-2xl bg-white border-2 border-[rgb(101,49,255)] outline-[rgba(101,49,255,0.1)] outline-[10px] '>
        <video loop autoPlay muted className='rounded-[30px] object-cover w-full h-full' src={activeVedio}></video>
       </div>
       </div>
       <div className="page3 lg:py-[140px] py-[40px] bg-black relative overflow-x-hidden ">
        <h1 className='lg:text-[72px] text-[40px] lg:mb-[60px] mb-[10px] font-bold text-white text-center' ><span className='text-[#caff30]'>Industry-first 
          </span> Marketplace <br />features</h1>
          <div className="ltab_shift absolute top-[50%] w-[64.4%] h-fit lg:flex hidden justify-between left-[17%] z-50">
            <span className={`${tab===0? "opacity-0" : "opacity-100"} flex items-center justify-center bg-white text-black w-[48px] h-[48px] text-[28px] rounded-full text-center transition-opacity duration-200 ease-in-out`} onClick={()=>{tab !== 0 ? setTab(tab-1) : ""}}><i className="ri-arrow-left-s-line"></i></span>
            <span className={`${tab===3? "opacity-0" : "opacity-100"} flex items-center justify-center bg-white text-black w-[48px] h-[48px] text-[28px] rounded-full text-center transition-opacity duration-200 ease-in-out`} onClick={()=>{tab < 3 ? setTab(tab+1) : ""}}><i className="ri-arrow-right-s-line"></i></span>
          </div>
          <ul className={`${poppins.className} flex lg:justify-center items-center lg:w-max  transition-transform duration-500 ease-in-out max-[1024px]: `} style={{ transform: `translateX(${type})` }}
>
  {DataPage2.map((item,index)=>(

            <li className={`grid justify-items-center shrink-0 lg:mx-[45px] lg:py-[64px] py-[20px] transition-all duration-500 ease-in-out max-[1024px]:w-screen lg:text-center text-start px-5 ${tab===index? `lg:scale-[1.2] opacity-100` : `scale-[1] lg:opacity-60`}`}>
             {item.type === "image" &&   <img className='lg:h-[386px] lg:w-[670px] w-[400px] h-[194px] lg:rounded-4xl lg:p-5 object-contain'  src={item.src}/>}
             {item.type === "video" &&   <video autoPlay muted loop className='lg:h-[386px] lg:w-[670px] w-[400px] h-[194px] lg:rounded-4xl lg:p-5 object-contain'  src={item.src}/>}
             <small className='text-[rgb(101,49,255)] text-[16px] mt-[26px] font-bold max-[1024px]:w-full' >{item.title}</small> 
              <h1 className='mt-[17px] lg:text-[36px] text-[24px] mb-[12px] text-white font-bold '>{item.heading}</h1>
              <p className='lg:w-[566px] w-full lg:text-[20px] text-[16px] leading-[30px] text-white '>{item.description}</p>
            </li>
  ))}
        
          
          </ul>
           <ul className='h-max gap-[12px] right-5 flex p-5 items-center justify-center w-max z-50'>
          {  [0,1,2,3].map((index)=>(

  <li className={`h-[20px] w-[20px] rounded-full ${tab ===index ? "bg-[white]": "bg-[rgba(255,255,255,0.22)]" }`}></li>
            ))}
 </ul>
       </div>
       <div className={`pag4 grid lg:justify-items-center lg:py-[140px] py-[40px] px-4 ${poppins.className} bg-[rgb(202,255,48)] overflow-x-hidden`}>
        <h1 className='lg:text-[72px] text-[40px] mb-[40px] font-bold text-black text-center lg:w-full w-[calc(100vw-24px)]'>Work with the <span className='text-[rgb(101,49,255)]'>best creators
          </span> <br />from the industry</h1>
          <div className='overflow-scroll w-[calc(100vw-24px)] scrollable-hidden-scrollbar h-max'>
          <ul className='flex items-center justify-center gap-3 mb-[60px] lg:w-full w-max'>
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
            </div>
            <ul className={`flex justify-center items-center overflow-x-hidden h-max ${reset && "reset" } hover:reset marquee lg:w-full w-max`}>
              {creators.filter((ctor)=>(ctor.category === creator)).map((creator)=>(

              <li className='grid justify-items-center items-center w-[240px] ml-[30px] bg-white rounded-2xl min-h-[142px] relative' key={creator.username}>
                <i className="ri-instagram-line absolute top-[10px] left-[14px] text-2xl font-normal text-white"></i>
                <img className='w-[240px] h-[290px] object-cover rounded-t-2xl' src={creator.image} alt="" />
                <span className='block p-[16px_16px_20px] w-[240px] h-[113px]'>
                  <h1 className='text-[20px] font-bold mb-1.6'>{creator.name}</h1>
                  <span className='flex  items-center text-[14px] text-[rgba(29,37,45,0.68)] mb-2'><h2 className='text-ellipsis max-w-[96px] overflow-hidden whitespace-nowrap'>{creator.username} </h2> <h2>{creator.followers} followers</h2></span>
                  <p className='text-[14px] text-[rgb(101,49,255)] flex items-center gap-1 font-medium'><img className='w-[16px] h-[16px]' src="./priceIcon.6d899ac3.svg" alt="" /> Last Deal Price : {creator.lastDealPrice} </p>
                </span>
                </li>
              ))}
              {creators.filter((ctor)=>(ctor.category === creator)).map((creator)=>(

              <li className='grid justify-items-center items-center w-[240px] ml-[30px] hover:reset bg-white rounded-2xl min-h-[142px] relative' key={creator.username}>
                <i className="ri-instagram-line absolute top-[10px] left-[14px] text-2xl font-normal text-white"></i>
                <img className='w-[240px] h-[290px] object-cover rounded-t-2xl' src={creator.image} alt="" />
                <span className='block p-[16px_16px_20px] w-[240px] h-[113px]'>
                  <h1 className='text-[20px] font-bold mb-1.6'>{creator.name}</h1>
                  <span className='flex  items-center text-[14px] text-[rgba(29,37,45,0.68)] mb-2'><h2 className='text-ellipsis max-w-[96px] overflow-hidden whitespace-nowrap'>{creator.username} </h2> <h2>{creator.followers} followers</h2></span>
                  <p className='text-[14px] text-[rgb(101,49,255)] flex items-center gap-1 font-medium'><img className='w-[16px] h-[16px]' src="./priceIcon.6d899ac3.svg" alt="" /> Last Deal Price : {creator.lastDealPrice} </p>
                </span>
                </li>
              ))}
            </ul>
            
       </div>*/} 
        <div className={`page5 grid lg:grid-cols-2  lg:h-[400vh] h-max relative`} ref={ScrollRef}>
        <div className='bg-black text-white lg:h-screen lg:sticky z-[80] top-0  max-[1024px]:w-screen overflow-hidden'>
          <div className='overflow-scroll lg:w-full scrollable-hidden-scrollbar px-3'>

          <ul className='flex justify-center items-center gap-4 lg:mt-[130px] mt-[40px] lg:w-full w-max '>
            {DataPage5.map((item,index)=>(

            <li className={`flex gap-1.6 items-center p-[10px_16px] rounded-3xl text-[14px] cursor-pointer border-[1px] border-white font-semibold ${scrollTab ===index? "text-black bg-white" : "text-white bg-black"}`} onClick={()=>{handleAutoScroll(index);}}>
              <img className='w-[24px] h-[24px]' src={scrollTab===index ? item.activeIcon : item.inactiveIcon} alt="" />
              <h1>{item.label}</h1>
            </li>
            ))}
          </ul>
          </div>
          <div className='w-full justify-center items-center lg:mt-20 mt-10 lg:flex hidden'>
            <img className='lg:w-[544px] lg:h-[400px] w-[300px] h-[220px]' src={`./scroll${scrollTab}.webp`} alt="" />
          </div>
         
           <ul className='flex w-screen h-max lg:hidden transition-transform duration-300 ease-out' style={{transform : `translateX(-${100 * scrollTab }%)`}}>
  {benefitsData.map((item,index)=>(
    
  <li className='h-max flex flex-col justify-center lg:ml-[50px] lg:gap-[34px] px-3 gap-4 w-full shrink-0'>
     <div className='w-full flex justify-center items-center lg:mt-20 mt-10 lg:hidden'>
            <img className='lg:w-[544px] lg:h-[400px] w-[300px] h-[220px]' src={`./scroll${scrollTab}.webp`} alt="" />
          </div>
            <h1 className={`font-bold lg:text-[48px] text-[35px] ${lexend.className}`}>{item.title[0]} {item.title[1]}</h1>
            <ul className={`flex flex-col gap-5 ${poppins.className}`}>
              {item.benefits.map((idx)=>(

              <li className='lg:text-[20px] text-[14px] flex gap-[21px] justify-start items-center lg:leading-[44px] leading-[20px]'><img src="./pointerStar.2bf3bd47.svg" alt="" /> {idx}</li>
              ))}
               </ul>

  </li>
  ))}
 </ul>
  <ul className='h-max gap-[12px]  mb-5 flex lg:flex-col items-center justify-center w-max z-50 p-5 lg:hidden'>
   {  [0,1,2,3].map((index)=>(

  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===index ? "bg-[white]": "bg-[rgba(255,255,255,0.22)]" }`}></li>
            ))}
 </ul>
        </div>
        <div className={` lg:bg-white lg:text-black bg-black text-white  relative lg:block hidden`} >
 <ul>
  {benefitsData.map((item,index)=>(
    
  <li className='h-[100vh] flex flex-col justify-center lg:ml-[50px] gap-[34px] p-3'>
            <h1 className='font-bold lg:text-[48px] text-[40px]'> {item.title[0]} <br /> {item.title[1]}</h1>
            <ul className={`flex flex-col gap-5 max-[1024px]:${poppins.className}`}>
              {item.benefits.map((idx)=>(

              <li className='lg:text-[20px] text-[14px] flex gap-[21px] justify-start items-center lg:leading-[44px] leading-[20px]'><img src="./pointerStar.2bf3bd47.svg" alt="" /> {idx}</li>
              ))}
               </ul>

  </li>
  ))}
 </ul>
 <div className='absolute lg:h-[400vh] w-max right-10 top-0'>

 <ul className='sticky top-[40px] h-screen gap-[12px] right-5 flex lg:flex-col items-center justify-center w-max z-50'>
  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===0 ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===1 ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===2 ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
  <li className={`h-[20px] w-[20px] rounded-full ${scrollTab ===3 ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
 </ul>
 </div>
 </div>
       </div>
       {/*  <div className={`${lexend.className} page6 grid justify-items-center lg:my-[130px] my-[40px] overflow-hidden`}>
        <h1 className={`${poppins.className} lg:text-[64px] text-[35px] font-bold  lg:ml-[-130px] mb-[60px] max-[1024px]:px-4`}>
          Navigating creator collaborations <br /> to <span className=' text-[rgb(101,49,255)]'>achieve growth</span>
        </h1>
        <div className='flex justify-between gap-5 lg:gap-[60px] max-[1024px]:w-[calc(100vw)] px-2 ml-2' style={{transform : `translateX(calc(-${100*page6}% - 10px))`}}>
          <span className='flex lg:w-[534px] shrink-0 lg:h-[360px] lg:p-[20px_40px] p-[10px] gap-2 bg-[rgb(237,234,252)] rounded-3xl items-center w-full'>
            <span className='flex flex-col h-full items-start w-full'>
             <img src="./cetaphil.webp" className='w-[76px] mb-[28px]' alt="" />
             <h1 className='lg:text-[21px] font-bold'>How Cetaphil Made <br /> Skincare Relatable in India?</h1>
             <span className='flex justify-between mt-[40px]'>

             <span className='flex flex-col justify-between text-[20px] font-medium'>
              <h3 className='font-semibold'>100M+</h3>
              <h3 className='lg:text-[16px] text-[12px] text-[#1d252d94]'>Reach</h3>
             </span>
             <span className='flex flex-col justify-between lg:text-[20px] font-medium'>
              <h3 className='font-semibold text-center'>1.4x</h3><h3 className='lg:text-[16px] text-[12px] text-[#1d252d94] w-max text-center'>Organic search</h3>
             </span>
             </span>
              <h1 className='lg:text-[20px] text-[14px] text-[#6531ff] mt-[31px] '>Read More <i className="ri-arrow-right-s-line text-2xl align-text-top"></i></h1>
            </span>
            
           <span className='block w-fit h-fit relative shrink-0'>

           <img className='lg:w-[136px] lg:h-[267px] w-[104px] font-semibold  border-[rgb(101,49,255)] rounded-3xl border-2' src="https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/creatorCollaboration/myMahina.png" alt="" />
            <span className='absolute top-1/2 bg-white rounded-full h-[36px] w-[36px] block translate-x-1/2 -translate-y-1/2 right-1/2'>
             <img src="https://www.famous.club/_next/static/media/playerLogo.f9de067c.svg" alt="" />
             </span>
            </span>
          </span>
          <span className='flex lg:w-[534px] shrink-0 lg:h-[360px] lg:p-[20px_40px] p-2.5 gap-2 bg-[rgb(237,234,252)] rounded-3xl items-center relative w-full'>
            <span className='flex flex-col items-start h-full w-full '>
             <img src="./mahinawebp.webp" className='w-[136px] mb-[28px]' alt="" />
             
             <h1 className='lg:text-[21px] text-[16px] font-bold'>How MyMahina used <br /> Famous to unlock growth?
</h1>
             <span className='flex justify-between mt-[40px]'>

             <span className='flex flex-col justify-between lg:text-[20px] text-[16px] font-medium'>
              <h3>₹ 0.06</h3>
              <h3 className='lg:text-[16px] text-[12px] text-[#1d252d94]'>CPV (Cost per view)</h3>
             </span>
             <span className='flex flex-col justify-between text-[20px] font-medium'>
              <h3>874%</h3><h3 className='lg:text-[16px] text-[12px] text-[#1d252d94]'>ROI</h3>
             </span>
             </span>
              <h1 className='lg:text-[20px] text-[14px] text-[#6531ff] mt-[31px] '>Read More <i className="ri-arrow-right-s-line text-2xl align-text-top"></i></h1>
            </span>
            <span className='block w-fit h-fit relative shrink-0'>

            <img className='w-[136px] h-[267px] font-semibold  border-[rgb(101,49,255)] rounded-3xl border-2' src="https://oneimpressionproductioncrm.s3.ap-south-1.amazonaws.com/famous-website-assets/creatorCollaboration/cetaphil.png" alt="" />
            <span className='absolute top-1/2 bg-white rounded-full h-[36px] w-[36px] block translate-x-1/2 -translate-y-1/2 right-1/2'>
             <img src="https://www.famous.club/_next/static/media/playerLogo.f9de067c.svg" alt="" />
             </span>
            </span>
          </span>

          
        </div>
        <ul className='h-max gap-[12px]  mb-5 flex lg:flex-col items-center justify-start w-full z-50 p-5'>
   {  [0,1].map((index)=>(

  <li className={`h-[20px] w-[20px] rounded-full lg:hidden ${page6 ===index ? "bg-[black]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
            ))}
 </ul>
       </div>
       <div className={`page7 ${poppins.className} text-white lg:pt-[130px] pt-[40px] bg-black px-3 lg:text-start text-center`}>
        <h1 className="lg:text-[80px] text-[35px] font-bold lg:pl-[210px]">100K+ creators on our app</h1>
        <h2 className='lg:text-[24px] text-[16px] font-medium py-[24px] lg:pl-[210px] lg:mb-[80px]'>Famous creator app enables seamless campaign participation for our creators</h2>
       <div className='lg:flex lg:pl-[194px] relative'>
        <div className='w-[374px] h-[660px] shrink-0 lg:block hidden'>

        <video src="https://oneimpressionproductioncrm.s3.amazonaws.com/oneimpressionproductioncrm/1741677178878316" autoPlay loop playsInline muted className='w-full h-full'/>
        </div>
        <div className='overflow-hidden'>

        <ul className='lg:ml-[146px] h-max lg:mt-[120px] mt-[30px] flex transition-transform duration-500 ease-out lg:w-full w-[calc(100vw-24px)] mb-10 lg:text-start' style={{transform : `translateX(-${100*appTab}%)`}} >
          {testimonials.map((i)=>(

         
          <li className='shrink-0 min-w-full max-[1024px]:max-w-full h-fit grid max-[1024px]:justify-items-center' key={i.username}><img className='w-[90px] h-[90px] rounded-full mb-5' src={i.image} alt="" />
          <p className={`${lexend.className} lg:text-[36px] text-[16px] mb-[20px] font-medium lg:w-[662px]`}>{i.text}</p>
         <h3 className={`${lexend.className} lg:text-[20px] text-[14px] font-semibold text-[rgba(255,255,255,0.6)]`  }>{i.username} • {i.followers} followers</h3>
          </li>
           ))}
        </ul>
        </div>
        <div className='w-fit h-fit lg:absolute sticky lg:left-[50.5%] lg:translate-0 left-[50%] -translate-x-[50%] bottom-[50px]'>

        <ul className='flex gap-[12px]'>
          <li className={`block h-[12px] rounded-full ${appTab ===0 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(0)}></li>
          <li className={`block h-[12px] rounded-full ${appTab ===1 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(1)}></li>
          <li className={`block h-[12px] rounded-full ${appTab ===2 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(2)}></li>
          <li className={`block h-[12px] rounded-full ${appTab ===3 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(3)}></li>
          <li className={`block h-[12px] rounded-full ${appTab ===4 ? "bg-white w-[30px]" : "w-[12px] bg-[rgba(255,255,255,0.22)]"} `} onClick={()=>setAppTab(4)}></li>

          </ul>

        </div>
        <div className='w-[280px] h-[495px] mx-auto lg:hidden mt-10'>

           <video src="https://oneimpressionproductioncrm.s3.amazonaws.com/oneimpressionproductioncrm/1741677178878316" autoPlay loop playsInline muted className='w-full h-full'/>
        </div>
        </div>
       </div>*/}
       <div className={`${lexend.className} page8 lg:min-h-[994px] lg:py-[130px] py-[30px] flex flex-col items-center bg-[rgb(202,255,48)]`}>
        <h1 className={`${poppins.className} font-extrabold lg:text-[48px] text-[32px] text-center `}>Famous Guarantee: <span className='text-[rgb(101,49,255)]'>Easy Cancellations!</span></h1>
        <p className='px-[28px] lg:text-[24px] text-[16px] leading-[34px] lg:mb-[60px] mb-[20px] font-medium lg:text-start text-center mt-2'>Our standard cancellation policy keeps your money 100% safe, cancel <br /> whenever to get a refund upto 100% of the campaign budget</p>
       <div className='overflow-hidden w-screen'>
        <ul className='flex items-center justify-center lg:w-full w-max lg-marquee'>
          {cards.map((item)=>(

          <li className='lg:w-[340px] lg:h-[420px] w-[252px] h-[306px] perspective-[1000px]  ' >
            <div className='relative transition-transform scale-[0.9] duration-500 transform-3d hover:rotate-y-180  w-full h-full '>

            <div className=' backface-hidden absolute flex flex-col items-center w-full h-full bg-white rounded-4xl'>
              <img className='lg:w-[120px] lg:h-[120px] w-[108px] h-[108px] mb-5 mt-[56px]' src={`https://www.famous.club/${item.icon}`} alt="" /><h2 className='lg:text-[30px] text-2xl w-[256px] text-center font-bold'>{item.frontText[0]} <br /> {item.frontText[1]}</h2>
              </div>
            <div className=' rotate-y-180 backface-hidden absolute flex flex-col items-center justify-center w-full h-full rounded-4xl bg-[rgba(255,255,255,0.6)]'>
              <h2 className='lg:text-[30px] text-2xl font-bold w-[256px] flex items-center text-center'>{item.backText}</h2>
              </div>
            </div>
              </li>
          ))}
        </ul>
       </div>
       </div>
       <div className={`${lexend.className} page9 lg:py-[130px] py-10 bg-[rgb(237,234,252)] grid justify-items-center overflow-hidden`}>
        <h1 className={`${poppins.className} lg:text-[60px] text-[40px] font-bold lg:mb-[60px] mb-[20px] w-[80%]`}>Share all your custom requirements <br />with ease</h1>
        <div className="lg:grid grid-cols-2 flex gap-12 max-[1024px]:p-[12px] max-[1024px]:w-[calc(100vw-12px)] transition-transform duration-300 ease-out" style={{transform : `translateX(calc(-${100*page9}% - ${24*page9}px))`}}>
         {cardsData.map((item)=>(
          <span className='lg:block flex flex-col lg:h-[400px] lg:w-[606px] w-full h-[320px] bg-white lg:pt-[36px] pt-[20px] rounded-3xl shrink-0'>
            <div className="data flex flex-col gap-2 mb-5 lg:pl-[36px] pl-[20px]">
              <h1 className='lg:text-[36px] text-[20px] font-medium'>{item.title}</h1>
              <small className='lg:text-[20px] text-[14px] font-normal text-[rgba(29,37,45,0.68)]'>{item.description}</small>
            </div>
            <img className='lg:h-auto h-full w-full' src={item.image} alt="" />
          </span>
         ))}
        
        </div>
        <ul className='h-max gap-[12px] right-5 flex p-5 pb-0 items-center justify-start w-screen z-50 lg:hidden'>
          {  [0,1,2,3].map((index)=>(

  <li className={`h-[20px] w-[20px] rounded-full ${page9 ===index ? "bg-[rgb(29,37,45)]": "bg-[rgba(29,37,45,0.14)]" }`}></li>
            ))}
 </ul>
       </div>
      <div className={`${lexend.className} page10 lg:grid grid-cols-2 justify-items-center lg:py-[130px] py-[30px] px-3`}>
<div className='pt-[72px] lg:mb-0 mb-[32px]'>
  <h1 className={`${poppins.className} lg:text-[65px] text-[40px] font-bold text-start mb-[26px]`}>
    Hear from our <br />community
  </h1>
  <h2 className='text-[20px] font-medium'>Here's what our clients have to say about <br /> our products</h2>
</div>
<div className='w-full h-full overflow-hidden' >
  <img className='lg:w-[66px] lg:h-[56px] w-[40px] h-[34px] mb-[32px] ' src="https://www.famous.club/svg/quote.svg" alt="" />
  <div className='flex w-full max-h-617px transition-transform duration-500 ease-out' style={{transform : `translateX(-${100*page10}%)`}}>

{testimonial.map((i)=>(
  <span className='block w-full max-h-617px shrink-0'>
    <h1 className="lg:text-[48px] text-[24px] font-semibold mb-[36px]">{i.quote}</h1>
    <h2 className='text-[28px] font-semibold mb-[10px]'>{i.name}</h2>
    <small className='text-[20px] text-[rgba(29,37,45,0.676)]'> {i.position} </small>
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
          <span className={`${lexend.className} lg:text-start text-center font-semibold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent lg:text-[64px] text-[28px] mb-[30px]`}>
Why wait when you can <br className='lg:block hidden' /> experience it yourself?
</span>
<button className='lg:text-[20px] text-[16px] rounded-4xl cursor-pointer p-[18px_34px] bg-white text-black w-fit font-bold'>Start your 72hrs trial</button>
        </div>
       </div>
       <div className={`${lexend.className} page12 flex lg:flex-row flex-col mx-auto py-[60px] gap-[70px] max-w-[1260px] px-3`}>
        <div>
          <h1 className={`${poppins.className} lg:text-[65px] text-[40px] font-bold lg:text-start text-center`}>Frequently <br />
Asked <br />
Questions</h1>
        </div>
        <div>
          {faqData.map((i,index)=>(
            <div className='cursor-pointer' key={index} onClick={()=>{qna === index+1 ? setQna(0): setQna(index+1)}}>

              <span>
                <span className='flex'>
                  <h1 className='lg:text-[26px] text-[16px] font-semibold mb-4 w-full'>{i.question}</h1>
                  <i className={`ri-arrow-down-s-line text-4xl transition-transform duration-300 ease-in h-[40px] ${qna===index+1 ?"rotate-180" : "rotate-0"}`}></i>
                </span>
                <p className={`${qna===index+1 ? "block" : "hidden"} font-normal lg:text-[20px] text-[14px]`}>
    {i.answer}
                </p>
              </span>
              <hr className={`my-[32px] border-[rgb(228,235,246)] ${faqData.length === index+1 && "hidden"}  border-[1px] w-full`}/>
            </div>
          ))}
        </div>
       </div>
       <div className="page13 bg-[rgb(237,234,252)] flex justify-center overflow-hidden">
        <div className='max-w-[1260px] p-[44px_0_55px]'>
  <h1 className='mb-[50px] text-[24px] font-medium uppercase lg:text-start text-center'>We’ve been featured In</h1>
  <div className='flex gap-[36px] lg-marquee max-[1024px]:w-max'>
    {mediaImages.map((i)=>(
    <img className='h-[28px]' src={i.url} alt="" />
    ))}
    {mediaImages.map((i)=>(
    <img className='h-[28px] lg:hidden' src={i.url} alt="" />
    ))}
  </div>
        </div>
       </div>
       <div className={`${lexend.className} page14 w-full h-full bg-[rgb(33,33,33)] flex lg:flex-row flex-col justify-center `}>
        <div className='flex lg:flex-row flex-col lg:max-w-[1260px] gap-[24px] w-full py-[30px] lg:px-0 px-[20px] text-white items-center justify-start relative'>
        <h2 className=' lg:text-[16px] text-[20px]'>Subscribe to our newsletter </h2>
        <input className='lg:py-[20px] py-3 rounded-4xl px-6 lg:w-[532px] w-full bg-[rgb(72,72,72)] text-[16px] outline-0 border-0 max-h-[60px]' type="text" placeholder='Enter your email'/>
        <button className='bg-white text-black max-[1024px]:w-full lg:p-[20px_43px] py-3 ml-1.6 rounded-4xl text-[16px] max-h-[60px] font-semibold'>Subscibe</button>
        <img className='lg:w-[224px] lg:h-[133px] w-[140px] h-[83px] absolute lg:bottom-[5px] bottom-43 right-0' src="https://www.famous.club/svg/newsletter.svg" alt="" />
        </div>
       </div>

    </div>
  )
}

export default home
