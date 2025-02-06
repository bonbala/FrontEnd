import React from 'react'
import './style.scss'

const Quote = () => {
  return (
    <div className="quote-component">
      <div className="quote-container container">
        <div className="quote-form">
          <h2>Request A Quote</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className="form">
            <div className="form-filed">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-filed">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-filed">
              <select>
                <option value="">Select Your Course</option>
                <option value="">Art Lesson</option>
                <option value="">Language Lesson</option>
                <option value="">Music Lesson</option>
                <option value="">Sports</option>
              </select>
            </div>
            <div className="form-filed">
              <input type="text" placeholder="Phone" />
            </div>
            <div className="form-filed">
              <textarea placeholder='Massage'></textarea>
            </div>
            <div className="form-filed">
              <button>Request A Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote
