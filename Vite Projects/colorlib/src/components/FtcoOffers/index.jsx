import React from "react";
import "./style.scss";
import illustration from "../../assets/images/about.jpg";
import { GiTeacher } from "react-icons/gi";

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
            <div className="icon"><GiTeacher /></div>

            <div className="offer-context">
              <h2>Safety First</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><GiTeacher /></div>
            <div className="offer-context">
              <h2>Safety First</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><GiTeacher /></div>
            <div className="offer-context">
              <h2>Safety First</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><GiTeacher /></div>
            <div className="offer-context">
              <h2>Safety First</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><GiTeacher /></div>
            <div className="offer-context">
              <h2>Safety First</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="icon"><GiTeacher /></div>
            <div className="offer-context">
              <h2>Safety First</h2>
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
