import React from 'react'
import './style.scss'
import imgCourse1 from '../../assets/images/course-1.jpg'
import imgCourse2 from '../../assets/images/course-2.jpg'
import imgCourse3 from '../../assets/images/course-3.jpg'
import imgCourse4 from '../../assets/images/course-4.jpg'
import { FaUser } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";

const course = [
  {
    courseName: 'Electric Engineering',
    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
    teacherName: 'MR. KHAN',
    seats: 10,
    duration: 4,
    illustration: imgCourse1, 
  },
  {
    courseName: 'Electric Engineering',
    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
    teacherName: 'MR. KHAN 2',
    seats: 10,
    duration: 4,
    illustration: imgCourse2, 
  },
  {
    courseName: 'Electric Engineering',
    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
    teacherName: 'MR. KHAN 3',
    seats: 10,
    duration: 4,
    illustration: imgCourse3, 
  },
  {
    courseName: 'Electric Engineering',
    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
    teacherName: 'MR. KHAN 4',
    seats: 10,
    duration: 4,
    illustration: imgCourse4, 
  }
]

const Course = () => {
  return (
    <div className="course-component">
      <div className="title">
        <h2>Our Courses</h2>
        <p>
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>
      <div className="course-container">
        {course.map((item,index)=>(
          <div className="course" key={index}>
          <img src={item.illustration} alt="" />
          <div className="info">
            <span><FaUser/> {item.teacherName}</span>
            <span><FaTableCells/> {item.seats} SEATS</span>
            <span><FaRegCalendarDays/> {item.duration} YEARS</span>
          </div>
          <div className="text">
            <h3>{item.courseName}</h3>
            <p>
              {item.description}
            </p>
            <button>Apply Now</button>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default Course
