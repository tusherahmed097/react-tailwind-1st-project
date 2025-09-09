import React from 'react'
import logoOne from '../../assets/logo1.png'
import logoTwo from '../../assets/logo2.png'
import logoThree from '../../assets/logo3.png'
import logoFour from '../../assets/logo4.png'
import Container from '../Layouts/Container'
const Logo = () => {
  return ( 
     <div className=' pt-[117px] pb-[116px]' >
      <Container>
        <div className=" flex justify-between">
            <img className='w-[265px] h-[94px] ' src={logoOne} alt="" />
            <img className='w-[265px] h-[94px]' src={logoTwo} alt="" />
            <img className='w-[265px] h-[94px]' src={logoThree} alt="" />
            <img className='w-[265px] h-[94px]' src={logoFour} alt="" />
        </div>
      </Container>
    </div>
      
   
  )
}

export default Logo
