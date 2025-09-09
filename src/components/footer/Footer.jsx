import React from 'react'
import Container from '../Layouts/Container'
import logo from '../../assets/logo.png'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkdin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
const Footer = () => {
  return (
    <div className='bg-[#1F1F1F] h-[552px] w-[full] ' >
      <Container>
       <div className=" flex pt-[140px] items-center ">
        <div className="">
          <img className='h-[44px] w-[192px]  ' src={logo} alt="" />
          <div className="flex items-center mt-[33px] ">
            <MdOutlineMarkEmailUnread className='text-[#fff]' />
            <p className='font-primary text-[14px] text-[#FFFFFF] ' >mail@yourcompany.com</p>
          </div>
          <div className="flex items-center mt-[15px] ">
            <MdOutlinePhoneInTalk className='text-white' />
            <p className='font-primary text-[14px] text-[#FFFFFF]' >+896 120 5889 (Toll free)</p>
          </div>
          <div className="flex items-center mt-[15px] ">
            <TfiLocationPin className='text-white' />
            <p className='font-primary text-[14px] text-[#FFFFFF]'  >101 Baker Street, New York, USA, 12345</p>
          </div>
          <div className="flex gap-5 mt-[34px] ">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkdin} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className=" ml-[145px] ">
            <p className='font-primary font-bold text-white ' >Company</p>
            <p className='font-primary mt-[15px] text-white'  >Home</p>
            <p className='font-primary  mt-[15px] text-white'  >About</p>
            <p className='font-primary  mt-[15px] text-white'  >Services</p>
            <p className='font-primary  mt-[15px] text-white'  >Services</p>
            <p className='font-primary  mt-[15px] text-white'  >Gallery</p>
        </div>
        <div className=" ml-[145px] ">
            <p className='font-primary font-bold text-white ' >Others</p>
            <p className='font-primary  mt-[15px] text-white'  >Blog</p>
            <p className='font-primary  mt-[15px] text-white'  >Contact</p>
            <p className='font-primary  mt-[15px] text-white'  >Terms & Conditions</p>
            <p className='font-primary  mt-[15px] text-white'  >Privacy Policy</p>
        </div>
        <div className=" ml-[148px] mb-[120px] ">
            <p className='font-primary font-bold text-white ' >Certificate</p>
            <div className="flex gap-4 mt-[21px]  ">
              <div className=" h-[44px] w-[110px] bg-white pl-[10px]  "> 
                <p  className=' text-[20px] font-bold text-[#008AD8]  ' >ISO 88</p>
                <p className='font-primary font-medium text-[8px]  text-[#008AD8] ' >Environmentally Safe</p>
              </div>
              <div className="h-[44px] w-[110px] bg-white pl-[10px] flex  ">
                   <p className='text-[#980077] font-bold pt-[10px] ' >Liquid</p>
                   <p className='text-[#009818] font-bold pt-[10px] ' >Green</p>
              </div>
            </div>
        </div>
       </div>
      </Container>
    </div>
  )
}

export default Footer
