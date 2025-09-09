import React from 'react'
import Container from '../Layouts/Container'
import sliderOne from '../../assets/slider1.png'
import sliderTwo from '../../assets/slider2.png'
import sliderThree from '../../assets/slider3.png'
import sliderFour from '../../assets/slider4.png'
const Slider = () => {
  return (
    <div className='flex justify-between ' >
      
      <img className="w-[458px]" src={sliderOne} alt="" />
      <img className='w-[458px]' src={sliderTwo} alt="" />
      <img className='w-[458px]' src={sliderThree} alt="" />
      <img className='w-[458px]' src={sliderFour} alt="" />
      
    </div>
  )
}

export default Slider
