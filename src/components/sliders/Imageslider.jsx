import React from 'react'
import Slider from "react-slick";
import sliderOne from '../../assets/slider1.png'
import sliderTwo from '../../assets/slider2.png'
import sliderThree from '../../assets/slider3.png'
import sliderFour from '../../assets/slider4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Imageslider = () => {
    var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    
  };
  return (
    
       <div  >
       <Slider {...settings}>
     
              <img className="w-[458px] pr-[20px] " src={sliderOne} alt="" />
            <img className='w-[458px] pr-[20px] ' src={sliderTwo} alt="" />
            <img className='w-[458px] pr-[20px] ' src={sliderThree} alt="" />
            <img className='w-[458px] pr-[20px] ' src={sliderFour} alt="" />
             <img className='w-[458px] pr-[20px] ' src={sliderTwo} alt="" />
    
    </Slider>
    </div>
   
  )
}

export default Imageslider

