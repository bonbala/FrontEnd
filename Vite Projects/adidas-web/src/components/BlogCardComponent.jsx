import React from 'react'
const BlogCardComponent = (props) => {
    const {image,title,description}=props
  return (
    <div className='blog-card'>
     <div className='image'>
        <img src={image} alt="" />
        
     </div>
     <div className='blog-context'>
        <div>
        <span className='title'>{title}</span>
        <span className='description'>{description}</span>
        </div>
     </div>
    </div>
  )
}

export default BlogCardComponent
