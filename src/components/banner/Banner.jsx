 import React from 'react'
import Container from '../Layouts/Container'

const Banner = () => {
  return (
   <div className=" relative bg-[url(./assets/banner.png)] py-[258px] bg-no-repeat bg-cover bg-center z-[1] ">
    <div className="w-full h-full bg-black/60 absolute top-0 left-0 z-[-1] "> </div>

    <Container>
       <h2 className='font-primary text-[64px] text-white w-[842px] font-bold pt-[]' > We exist since 1975 on the oil and gas industry.</h2>
       <button className='pt-[13px] pb-[13px] pl-[40px] pr-[40px] bg-[#F40404] w-[186px] text-primary text-[#FFFFFF] font-semibold mt-[31px] cursor-pointer rounded-lg transition transform-3d duration-300  shadow-2xl hover:bg-amber-600 hover:text-white hover:font-bold hover:drop-shadow-[0_0_15px_white]  ' >LEARN MORE</button>
    </Container>
    
   
   </div>
  )
}

export default Banner
