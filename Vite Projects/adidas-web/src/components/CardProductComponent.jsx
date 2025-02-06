import React from 'react'
import {Products} from '../assets/Database/data.jsx'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const CardProductComponent = (props) => {
  const {id,productName,productPrice,productImage} =props
  return (
    <div className='product-card'>
        <div className='product-card-container'>
        <div className='image-card'>
            <img style={{minWidth: '100%', minHeight:'100%', maxWidth:'100%', maxHeight:'100%'}} src={Products[0].productImage} alt="" />
            <span className='title-card'>$120</span>
            <FaRegHeart className='heart-icon'/>
            <FaHeart className='heart-icon-active' />
        </div>

        <div className='context-card' style={{display: 'flex', flexDirection:'column'}}>
            <span className='product-name'>{Products[0].productName}</span>
            <span>Performance</span>
        </div>
        </div>
    </div>
  )
}

export default CardProductComponent
