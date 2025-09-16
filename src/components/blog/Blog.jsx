import React from 'react'
import Container from '../Layouts/Container'
import blogOne from '../../assets/blog1.png'
import blogTwo from '../../assets/blog2.png'
import blogThree from '../../assets/blog3.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Blog = () => {
  return (
    <div className='bg-[#C4C4C4] pt-[110px] pb-[162px]  ' >
        <Container>
          <div className="flex justify-between   ">
            <div className="relative z-[1] ">
                <img className='h-[401px] w-[339px] ' src={blogOne} alt="" />
                <div className="absolute top-0 left-0 w-[339px] h-[401px] bg-black/60 z-[100] "></div>
                <h2 className='font-bold text-[24px] w-[249px] absolute top-[75px] left-[46px] font-primary text-[#ffff] z-[120] ' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                <button className='absolute top-[307px] left-[46px] text-[#fff] font-primary font-semibold pt-[10px] pb-[10px] pl-[22px] pr-[22px] bg-white/50 z-[120]  hover:bg-amber-700 hover:text-emerald-50 cursor-pointer hover:rounded-[8px] hover:scale-115 duration-500  hover:animate-bounce ' >Read more</button>
            </div>
           <div className="relative z-[1]">
             <img className='h-[401px] w-[339px] ' src={blogTwo} alt="" />
             <div className="absolute top-0 left-0 w-[339px] h-[401px] bg-black/60 z-[100] "></div>
             <h2 className='font-bold text-[24px] w-[249px] absolute top-[75px] left-[46px] font-primary text-[#ffff] z-[120] ' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
             <button className='absolute top-[307px] left-[46px] text-[#fff] font-primary font-semibold pt-[10px] pb-[10px] pl-[22px] pr-[22px] bg-white/50 z-[120] hover:bg-amber-700  hover:text-emerald-50 cursor-pointer hover:rounded-[8px] hover:scale-115 duration-500 ' >Read more</button>
           </div>
           <div className="relative z-[1]">
            <img className='h-[401px] w-[339px] ' src={blogThree} alt="" />
            <div className="absolute top-0 left-0 w-[339px] h-[401px] bg-black/60 z-[100] "></div>
            <h2 className='font-bold text-[24px] w-[249px] absolute top-[75px] left-[46px] font-primary text-[#ffff] z-[120] ' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
            <button className=' absolute top-[307px] left-[46px] text-[#fff] font-primary font-semibold pt-[10px] pb-[10px] pl-[22px] pr-[22px] bg-white/50 z-[120] hover:bg-amber-700  hover:text-emerald-50 cursor-pointer hover:rounded-[8px] hover:scale-115 duration-500 hover:animate-pulse ' >Read more</button>
           </div>
          </div>
          
          <div className="flex items-center gap-[10px] justify-end font-bold font-primary mt-10 ">
          <div className=""> 
              MORE FROM THE BLLOG
          </div>
          <div className="">
            <FaArrowRightLong />
          </div>
          </div>
        </Container>
      
    </div>
  )
}

export default Blog
