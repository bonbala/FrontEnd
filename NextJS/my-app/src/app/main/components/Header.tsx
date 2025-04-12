import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaPatreon } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { LiaBarsSolid } from "react-icons/lia";
import logo from '../../../assets/logo.png'
import Image from 'next/image';
import './header.scss'
const Header = () => {
  return (
    <div>
      
      <div className='top-bar flex justify-between p-[10px] pr-[15px] bg-[#181f15] max-md:hidden'>
        <ul className='social-icons flex'>
        <li className='p-[5px]'><FaFacebookF/></li> 
        <li className='p-[5px]'><FaPatreon/></li>
        <li className='p-[5px]'><FaInstagram/></li>
        <li className='p-[5px]'><GoMail/></li>
        </ul>

        <div className='top-bar-right flex'>
          <div className='login-container flex items-center text-[14px] p-[5px] gap-x-[5px]'>
          <CiUser className='text-[18px]'/>Login
          </div>
          <div className='cart-container flex items-center text-[12px] p-[5px] gap-x-[5px]'>
          <SlHandbag className='text-[18px]'/>0
          </div>
        </div>
      </div>

      <div className='main-nav bg-white text-black px-[20px] py-[10px] flex  max-md:hidden'>
        <ul className='left-nav flex gap-x-[13px] cursor-pointer flex-wrap w-[45%]'>
          <li className='nav-item flex items-center gap-x-[5px]'><span>Men</span><SlArrowDown/></li>
          <li className='nav-item flex items-center gap-x-[5px]'><span>Women</span><SlArrowDown/></li>
          <li className='nav-item flex items-center'><span>Felted Slippers & Mittens</span></li>
          <li className='nav-item flex items-center'><span>Leather Bags</span></li>
        </ul>
        <div className='middle-nav w-[165px]'>
          <Image src={logo} alt="logo" />
        </div>
        <div className='right-nav flex justify-end w-[45%]'>
          <ul className='flex items-center justify-end flex-wrap  gap-x-[13px] mr-[20px]'>
            <li className='nav-item flex items-center gap-x-[5px]  '><span className='text-end '>Customer Care</span><SlArrowDown/> </li>
            <li className='nav-item'>FAQ</li>
          </ul>
          <div className='flex items-center'>
            <div className='border flex items-center h-[44px] p-[10px]'>
              <input type="text" placeholder='Search' className='!outline-none w-[140px]'/>
              <IoSearchOutline className='text-[20px]'/>
            </div>
          </div>
        </div>

      </div>

      <div className='h-30px md:hidden'>12</div>
      <div className='main-nav-mobile fixed w-[100%] top-0 z-50 bg-white text-black py-[4px] flex justify-between items-center md:hidden  '>

        <div className='left-nav flex items-center'>
            <LiaBarsSolid className='text-[35px] ml-[5px] mr-[8px]'/>
            <span>MENU</span>
        </div>
        <div className='middle-nav'>
            <Image src={logo} alt="logo" className='w-[92px]' />
        </div>
        <div className='right-nav flex items-center justify-center bg-[#181f15] text-white  w-[60px] h-[40px]'>
            <SlHandbag className='text-[18px]'/>0
        </div>
      </div>

    </div>
  )
}

export default Header
