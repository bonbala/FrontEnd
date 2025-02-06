import React, { useState } from 'react'
import './style.scss'
import illustration from '../../assets/images/about-2.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
<div className="counter-component">
      <div className="content container">
        <div className="content-above">
          <div className="above-left">
            <img src={illustration} alt="" />
          </div>
          <div className="above-right">
            <h2>Fox University</h2>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>

        <div className="content-below">
          <div className="counter">
          { counterOn && <CountUp className='number' start={0} end={18} duration={5}/>}
            <strong className='label'>Certified Teachers</strong>
          </div>
          <div className="counter">
          { counterOn && <CountUp className='number' start={0} end={200} duration={5}/>}
            <strong className='label'>Students</strong>
          </div>
          <div className="counter">
          { counterOn && <CountUp className='number' start={0} end={30} duration={5}/>}
            <strong className='label'>Courses</strong>
          </div>
          <div className="counter">
          { counterOn && <CountUp className='number' start={0} end={500} duration={5}/>}
            <strong className='label'>Awards Won</strong>
          </div>
        </div>
      </div>
    </div>
    </ScrollTrigger>
    
  );
}

export default Counter
