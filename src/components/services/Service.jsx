import React from 'react'
import service from '../../assets/service.png'
const Service = () => {
  return (
    <div className='pt-[28px] flex ' >
      <div className="font-primary pt-[106px] pl-[390px] pb-[142px]  w-1/2 ">
        <h2 className='font-bold text-[64px] w-[509px] ' >Our Services</h2>
        <p className='text-[#6C6C6C] w-[405px] font-medium  ' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div className="relative z-[-1] w-1/2 ">
        
          <img className='w-full h-full object-cover  ' src={service} alt="" />
          <div className='absolute top-0 left-0  w-full h-full bg-black/60 z-[1] ' ></div>
          <h2 className='font-primary text-[36px] font-bold absolute top-[147px] left-[116px] text-[#FFFFFF] z-[10] mb-[209px] '>Modern natural oil and gas refineries.</h2>
          <button className='pt-[14px] pb-[14px] pl-[30px] pr-[30px] bg-[#F40404] rounded-[5px]  text-white font-primary font-semibold absolute top-[220px] left-[116px] z-[11] mb-[139px] ' >Learn More</button>
      </div>
      </div>
  )
}

export default Service
