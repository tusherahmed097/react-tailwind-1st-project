import React from 'react'
import { TbMailPin } from "react-icons/tb";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaFacebook,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";
import Container from '../Layouts/Container';

const Header = () => {
  return (
   <div className="bg-[#282828] border-b-3 border-[#FFB800] ">
     <Container>
      <div className='font-primary py-[15px] text-white ' >
      <div className="flex justify-between">
        <div className='flex gap-[49px]  '> 
            <div className="flex items-center gap-[5px] ">
            <TbMailPin className='size-[20px]' />
            <p className='text-[12px]' >mail@yourcompany.com</p>
            </div>
            
            <div className="relative after:content-[''] after:absolute after:bottom-[2px] after:left-[-27px] after:h-[16px] after:w-[1px] after:bg-white flex items-center ">
            <MdOutlinePhoneInTalk className='size-[20px]' />
            <p className='text-[12px]' >+896 120 5889 (Toll free)</p>
            </div>
        </div>
        <div>
          <div className="flex space-x-[19px]">
              <FaFacebook size={16} />
            <FaTwitter size={16} />
            <FaLinkedin size={16} />
            <FaInstagram size={16} />
          </div>

        </div>
      </div>
    </div>
     </Container>
     
   </div>
  )
}

export default Header
