import React from 'react'
import Container from '../Layouts/Container'

const Area = () => {
  return (
    <div className='bg-[#F40404] h-[145px]  '>
      <Container>
       <div className="flex gap-[100px] pt-[46px] pb-[42px] ">
        <h1 className='font-primary font-bold text-[36px] text-[#ffff]  ' >Want to join as member branch in your area?</h1>
         <button className=' border-white border-2 px-[32px] py-[13px] cursor-pointer hover:scale-120 hover:duration-400 transform-3d text-white  font-semibold font-primary ' >CONTACT</button>
       </div>
      </Container>
      <div className="bg-[#FFB800] h-[5px] w-[full] "></div>
    </div>
  )
}

export default Area
