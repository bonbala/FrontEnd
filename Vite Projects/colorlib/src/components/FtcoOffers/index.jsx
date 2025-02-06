import React from "react";
import "./style.scss";
import illustration from "../../assets/images/about.jpg";
import { GiTeacher } from "react-icons/gi";
import { LiaBookReaderSolid } from "react-icons/lia";
import { TbFileCertificate } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GiPuzzle } from "react-icons/gi";
import { GiHumanPyramid } from "react-icons/gi";




const FtcoOffers = () => {
  return (
    <div className="offers-component container">
      <div className="content">
        <h1>What We Offer</h1>
        <p className="context">
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word.
        </p>

        <div className="offers-container">
          <div className="offer">
            <div className="icon"><IoShieldCheckmarkOutline /></div>

            <div className="offer-context">
              <h2>Safety First</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><LiaBookReaderSolid /></div>
            <div className="offer-context">
              <h2>Regular Classes</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><TbFileCertificate /></div>
            <div className="offer-context">
              <h2>Certified Teachers</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><GiTeacher /></div>
            <div className="offer-context">
              <h2>Sufficient Classrooms</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><GiPuzzle /></div>
            <div className="offer-context">
              <h2>Creative Lessons</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><GiHumanPyramid /></div>
            <div className="offer-context">
              <h2>Sports Facilities</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="illustration">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};

export default FtcoOffers;
