import React from "react";
import CPRA from '../../assets/images/Capture.png'
import USFlag from '../../assets/images/USFlag.png'
const FooterBottomComponent = () => {
  return (
    <div className="footer-bottom-component">
      <ul className="legal-menu">
        <li>
          <img src={USFlag} alt="" className="US-logo" />
            <a href="">United States</a>
        </li>
        <li>
          <a href="">Your Privacy Choices</a>
          {/* <span><img src={CPRA} alt="" /></span> */}
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Terms and Conditions</a>
        </li>
      </ul>
      <div className="colophon">
        <div><span>© 2025 adidas America, Inc.</span></div>
      </div>
    </div>
  );
};

export default FooterBottomComponent;
