import React from "react";
import "./style.scss";
import imgCertified1 from "../../assets/images/teacher-1.jpg";
import imgCertified2 from "../../assets/images/teacher-2.jpg";
import imgCertified3 from "../../assets/images/teacher-3.jpg";
import imgCertified4 from "../../assets/images/teacher-4.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const teachers = [
  {
    name: 'Bianca Wilson',
    subject: 'TEACHER',
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imgTeacher: imgCertified1
  },
  {
    name: 'Mitch Parker',
    subject: 'ENGLISH TEACHER',
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imgTeacher: imgCertified2
  },
  {
    name: 'Stella Smith',
    subject: 'ART TEACHER',
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imgTeacher: imgCertified3
  },
  {
    name: 'Monshe Henderson',
    subject: 'SCIENCE TEACHER',
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imgTeacher: imgCertified4
  },
]



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
        {teachers.map((item, index) => (
          <div className="certified" key={index}>
            <div className="teacher">
              <div className="image">
                <img src={item.imgTeacher} alt="" />
              </div>
              <div className="social">
                <FaTwitter />
                <FaFacebookF />
                <FaGooglePlusG />
                <FaInstagram />
              </div>
              <h3>{item.name}</h3>
              <span>{item.subject}</span>
            </div>

            <div className="text">
              <p>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certified;
