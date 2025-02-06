import React from 'react'
import {Card} from '../assets/Database/data'

const CardComponent = (props) => {
    const {cardImage, cardName, description,} = props
  return (
    <div className='card'>
      <div className='image' >
      <img src={cardImage} alt="" />
      </div>
      <div className='context'>
        <span>{cardName}</span>
        <span>{description}</span>    
        <span>SHOP NOW</span>
      </div>
    </div>
  )
}

export default CardComponent
