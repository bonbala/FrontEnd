import React from 'react'
import {Blogs} from '../../../assets/Database/data.jsx'
import '../BlogComponent/blog.css'
import BlogCardComponent from '../../BlogCardComponent.jsx'
const BlogComponent = () => {
  return (
    
      <div className='blog-component component'>
      <div>
      <h2 className='title-component'>RELATED RESOURCES</h2>
      <div className='blog-scroll'>
      {Blogs.map((item)=>{return<BlogCardComponent key={item.id} image={item.image} title={item.title} description={item.description}/>})}
      </div>
      </div>
    </div>
   
  )
}

export default BlogComponent
