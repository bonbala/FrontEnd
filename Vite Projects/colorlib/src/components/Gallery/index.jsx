import React from 'react'
import imageGallery1 from '../../assets/images/course-1.jpg'
import imageGallery2 from '../../assets/images/course-2.jpg'
import imageGallery3 from '../../assets/images/course-3.jpg'
import imageGallery4 from '../../assets/images/course-4.jpg'

import { FaInstagram } from "react-icons/fa";

import './style.scss'

const Gallery = () => {
  return (
    <div className='gallery-component'>
     <div className='gallery'>
        <img src={imageGallery1} alt="" />
        <div className='connected'>
            <FaInstagram/>
        </div>
     </div>
     <div className='gallery'>
        <img src={imageGallery2} alt="" />
        <div className='connected'>
            <FaInstagram/>
        </div>
     </div>
     <div className='gallery'>
        <img src={imageGallery3} alt="" />
        <div className='connected'>
            <FaInstagram/>
        </div>
     </div>
     <div className='gallery'>
        <img src={imageGallery4} alt="" />
        <div className='connected'>
            <FaInstagram/>
        </div>
     </div>
    </div>
  )
}

export default Gallery
