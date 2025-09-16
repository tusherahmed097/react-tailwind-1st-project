import React from 'react'
import supplyOne from '../../assets/supply1.png'
import supplyTwo from '../../assets/supply2.png'
const Supply = () => {
  return (
    <div className='flex' >
      <div className=" relative z-[-33] ">
        <img src={supplyOne} alt="" />
        <div className='absolute top-0 left-0  w-full h-full bg-black/60 z-[33] ' ></div>
        <h2 className='font-primary mb-[205px] absolute left-[116px] top-[151px] z-[40] text-white text-[36px] font-bold  ' >Supply of national industries.</h2>
        <button className='font-primary absolute top-[224px] left-[116px] text-white z-[38]  pt-[14px] pb-[14px] pl-[30px] pr-[30px] bg-[#F40404] font-semibold cursor-pointer ' >Learn More</button>
      </div>
      <div className="relative z-[-33] ">
        <img src={supplyTwo} alt="" />
        <div className='absolute top-0 left-0  w-full h-full bg-black/60 z-[33] ' ></div>
        <h2 className='font-primary mb-[205px] absolute left-[116px] top-[151px] z-[40] text-white text-[36px] font-bold  ' >National fuel distribution and supply.</h2>
        <button className='font-primary absolute top-[224px] left-[116px] cursor-pointer text-white z-[38]  pt-[14px] pb-[14px] pl-[30px] pr-[30px] bg-[#F40404] font-semibold  ' >Learn More</button>
      </div>
    </div>
  )
}

export default Supply
