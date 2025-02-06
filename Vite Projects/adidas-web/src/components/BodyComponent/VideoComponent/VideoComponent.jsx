import React from "react";
import video from "../../../assets/videos/Sneakers & Sportswear - adidas US.mp4";
import '../VideoComponent/video.css'

const VideoComponent = () => {
  return (
    <section className="video-component">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      
      </video>
      <div className="video-context">
        <div className="banner-title">
        <span>FASTER. FASTEST. ADIZERO</span>
        </div>
        <div className="banner-summary">
        <span>Adios Pro 4 is here. Designed to break records.</span>
        </div>
        <div className="button">
          <div className="nav-shop-men"><a>SHOP MEN</a></div>
          <div className="nav-shop-women"><a>SHOP WOMEN</a></div>
          
          
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
