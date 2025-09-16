import React from 'react'
import Container from '../Layouts/Container'
import learn from '../../assets/learn.png'
const Learn = () => {
  return (
    <div className='bg-[#C4C4C4] ' >
      <Container>
       <div className="flex pt-[136px] pb-[136px] justify-between ">
         <div className=" pr-[77px] pl-[74px] pt-[100px] pb-[99px] bg-[#F40404]  font-primary font-bold text-[36px] w-[420px] h-[361px] text-[#ffff] "> Learn more about our company </div>
        <div className=" relative  ">
          <img className='w-[726px] h-[361px]  ' src={learn} alt="" />
          <button className='absolute left-[282px] cursor-pointer hover:bg-orange-700 hover:text-amber-50 hover:scale-125  top-[168px] w-[102px] font-primary text-[#F40404] p-[5px] bg-white transform-3d duration-500 hover:font-medium hover:rounded-[5px] hover:drop-shadow-[0_0_15px_white]' > Learn More </button>
        </div>
       </div>
      </Container>
    </div>
  )
}

export default Learn
