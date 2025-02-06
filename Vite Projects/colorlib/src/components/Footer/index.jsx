import React from 'react'
import './style.scss'

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import imageBlog1 from '../../assets/images/image_1.jpg'
import imageBlog2 from '../../assets/images/image_2.jpg'

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="footer-container container">
        <div className="column">
          <h2 className="title">Have a Questions?</h2>
          <ul>
            <li>
                <FaMapMarkerAlt style={{height:'20px', width:'25px'}}/>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </li>
            <li>
                <MdPhone  style={{height:'20px', width:'20px'}}/>
              <p>+2 392 3929 210</p>
            </li>
            <li>
                <IoMdMail style={{height:'20px', width:'20px'}}/>
              <p>info@yourdomain.com</p>
            </li>
          </ul>
        </div>
        <div className="column">
          <h2 className="title">Recent Blog</h2>
          <div className="blog">
            <img src={imageBlog1} alt="" />
            <div className='text'>
                <p className='blog-title'>Even the all-powerful Pointing has no control about</p>
                <span><FaRegCalendarDays/> June 27, 2019</span>
                <span><FaUser/> Admin <BiSolidCommentDetail/> 19</span>
            </div>
          </div>
          <div className="blog">
            <img src={imageBlog2} alt="" />
            <div className='text'>
                <p className='blog-title'>Even the all-powerful Pointing has no control about</p>
                <span><FaRegCalendarDays/>June 27, 2019</span>
                <span><FaUser/> Admin <BiSolidCommentDetail/> 19</span>
            </div>
          </div>
        </div>
        <div className="column">
          <h2 className="title">Links</h2>
          <ul>
            <li><FaArrowRight/>Home</li>
            <li><FaArrowRight/>About</li>
            <li><FaArrowRight/>Services</li>
            <li><FaArrowRight/>Deparments</li>
            <li><FaArrowRight/>Contact</li>
          </ul>
        </div>
        <div className="column">
          <h2 className="title">Subscribe Us!</h2>
          <input type="text" placeholder="Enter email address" />
          <button>Subrscribe</button>

          <h2 className='contact'>Connect With Us</h2>
          <div className="social">
            <div className='icon'><FaTwitter /></div>
            <div className='icon'><FaFacebookF /></div>
            <div className='icon'><FaInstagram /></div>
          </div>
        </div>
      </div>
      <p className='CR'>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
    </div>
  );
}

export default Footer
