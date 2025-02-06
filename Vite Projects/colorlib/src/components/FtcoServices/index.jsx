import React from 'react'
import './style.scss'
import { GiTeacher } from "react-icons/gi";
import { LiaBookReaderSolid } from "react-icons/lia";
import { IoLibraryOutline } from "react-icons/io5";
import { TbFileCertificate } from "react-icons/tb";

const FtcoServices = () => {
  return (
    <div className="Ftco-component">
      <div className='Ftco-card-blue'>
        <GiTeacher/>
        <h1>Certified Teachers</h1>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
      </div>
      <div className='Ftco-card-orange'>
        <IoLibraryOutline/>
        <h1>Special Education</h1>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
      </div>
      <div className='Ftco-card-blue'>
        <LiaBookReaderSolid/>
        <h1>Book & Library</h1>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
      </div>
      <div className='Ftco-card-orange'>
        <TbFileCertificate/>
        <h1>Sport Clubs</h1>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
      </div>
    </div>
  );
}

export default FtcoServices
