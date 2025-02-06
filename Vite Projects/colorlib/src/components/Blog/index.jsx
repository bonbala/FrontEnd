import React from 'react'
import './style.scss'
import imageBlog from '../../assets/images/image_1.jpg'
import { BiSolidCommentDetail } from "react-icons/bi";
const Blog = () => {
  return (
    <div className="blog-component">
      <div className="title">
        <h2>Certified Teachers</h2>
        <p>
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>

      <div className="blog-container container">
        <div className="blog">
          <div className="illustration">
            <img src={imageBlog} alt="" />
            <div className="posted-day">
              <span className="day">26</span>
              <span className="moth">June</span>
              <span className="year">2025</span>
            </div>
          </div>

          <div className="text">
            <h3>Skills To Develop Your Child Memory</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
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

        <div className="blog">
          <div className="illustration">
            <img src={imageBlog} alt="" />
            <div className="posted-day">
              <span className="day">26</span>
              <span className="moth">June</span>
              <span className="year">2025</span>
            </div>
          </div>

          <div className="text">
            <h3>Skills To Develop Your Child Memory</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
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

        <div className="blog">
          <div className="illustration">
            <img src={imageBlog} alt="" />
            <div className="posted-day">
              <span className="day">26</span>
              <span className="moth">June</span>
              <span className="year">2025</span>
            </div>
          </div>

          <div className="text">
            <h3>Skills To Develop Your Child Memory</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
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
      </div>
    </div>
  );
}

export default Blog
