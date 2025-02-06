import React from "react";
import "./style.scss";
import imgCertified1 from "../../assets/images/teacher-1.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Certified = () => {
  return (
    <div className="certified-component">
      <div className="title">
        <h2>Certified Teachers</h2>
        <p>
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>
      <div className="certified-container">
        <div className="certified">
          <div className="teacher">
            <div className="image">
              <img src={imgCertified1} alt="" />
            </div>
            <div className="social">
              <FaTwitter />
              <FaFacebookF />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
            <h3>Bianca Wilson</h3>
            <span>TEACHER</span>
          </div>

          <div className="text">
            
            <p>
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="certified">
          <div className="teacher">
            <div className="image">
              <img src={imgCertified1} alt="" />
            </div>
            <div className="social">
              <FaTwitter />
              <FaFacebookF />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
            <h3>Bianca Wilson</h3>
            <span>TEACHER</span>
          </div>
          <div className="text">
            <p>
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="certified">
          <div className="teacher">
            <div className="image">
              <img src={imgCertified1} alt="" />
            </div>
            <div className="social">
              <FaTwitter />
              <FaFacebookF />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
            <h3>Bianca Wilson</h3>
            <span>TEACHER</span>
          </div>

          <div className="text">          
            <p>
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="certified">
          <div className="teacher">
            <div className="image">
              <img src={imgCertified1} alt="" />
            </div>
            <div className="social">
              <FaTwitter />
              <FaFacebookF />
              <FaGooglePlusG />
              <FaInstagram />
            </div>
            <h3>Bianca Wilson</h3>
            <span>TEACHER</span>
          </div>
          <div className="text">
            <p>
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
