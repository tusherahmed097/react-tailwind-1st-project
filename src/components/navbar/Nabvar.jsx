import React from 'react'
import Container from '../Layouts/Container'
import logo from '../../assets/logo.png'

const Nabvar = () => {
  return (
    <div className='bg-[#F40404] py-[30px]'>
      <Container>
            <div className="flex justify-between items-center ">

                <div className=""> 
                    <img src={logo} alt="" />
                </div>

                <div className="flex space-x-[47px] text-white cursor-pointer font-primary font-semibold text-[16px] items-center ">
                    <ul>
                        <li className='hover:bg-gray-100 duration-300 p-4 rounded hover:text-red-900 hover:font-medium' >Home</li>
                    </ul>
                    <ul>
                        <li className='hover:bg-gray-100 duration-300 p-4 rounded hover:font-medium hover:text-red-900' >About</li>
                    </ul>
                    <ul>
                        <li className='hover:bg-gray-100 duration-300 p-4 rounded hover:text-red-900 hover:font-medium ' >Services</li>
                    </ul>
                    <ul>
                        <li className='hover:bg-gray-100 duration-300 p-4 rounded hover:font-medium hover:text-red-900' >Gallery</li>
                    </ul>
                    <ul>
                        <li className='hover:bg-gray-100 duration-300 p-4 rounded hover:font-medium hover:text-red-900' >Blog</li>
                    </ul>
                    <button className='border py-[13px] px-[32px] cursor-pointer hover:scale-115 transition transform-3d duration-300 '>CONTACT</button>
                </div>

            </div>
      </Container>
    </div>
  )
}

export default Nabvar
