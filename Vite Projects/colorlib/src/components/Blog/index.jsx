import React from 'react'
import './style.scss'
import imageBlog1 from '../../assets/images/image_1.jpg'
import imageBlog2 from '../../assets/images/image_2.jpg'
import imageBlog3 from '../../assets/images/image_3.jpg'
import { BiSolidCommentDetail } from "react-icons/bi";

const blogs = [
  {
    postDate: { day: 26, moth: "June", year: 2024 },
    title: "Skills To Develop Your Child Memory",
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    imageBlog: imageBlog1
  },
  {
    postDate: { day: 18, moth: "May", year: 2024 },
    title: "Skills To Develop Your Child Memory",
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    imageBlog: imageBlog2
  },
  {
    postDate: { day: 21, moth: "Sep", year: 2024 },
    title: "Skills To Develop Your Child Memory",
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    imageBlog: imageBlog3
  },
];
const Blog = () => {
  return (
    <div className="blog-component">
      <div className="title">
        <h2>Recent Blog</h2>
        <p>
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>

      <div className="blog-container container">
        {blogs.map((item, index)=> (
          <div className="blog" key={index}>
          <div className="illustration">
            <img src={item.imageBlog} alt="" />
            <div className="posted-day">
              <span className="day">{item.postDate.day}</span>
              <span className="moth">{item.postDate.moth}</span>
              <span className="year">{item.postDate.year}</span>
            </div>
          </div>

          <div className="text">
            <h3>{item.title}</h3>
            <p>
              {item.description}
            </p>
            <div className='bt-text'>
                <button>Read More</button>
                <div className='comment'>
                  <p>Admin</p>
                    <BiSolidCommentDetail/>
                    <span>3</span>
                </div>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default Blog
