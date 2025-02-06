import React from "react";
import USFlag from '../../assets/images/USFlag.png'

const FooterMobileComponent = () => {
  return (
    <div className="footer-component-mobile">
      <div className="feed-back">
        <h5>YOUR OPINITON ACCOUNTS</h5>
        <p>We strive to serve you better and appreciate your feedback</p>
        <a href="">Please fill out this short survey</a>
      </div>
      <button className="back-to-top">
        <span>ICON</span>
        <span>BACK TO TOP</span>
      </button>
      <div className="menu">
        <div className="context-menu left">
          <h3>LOGIN</h3>
          <ul>
            <li>Help</li>
            <li>Returns & Exchanges</li>
            <li>Order Tracker</li>
            <li>Shipping</li>
            <li>Promotions</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="context-menu right">
          <h3>YOUR BAG</h3>
          <ul>
            <li>adiClub</li>
            <li>Store Finder</li>
            <li>Gift Cards</li>
            <li>adidas Apps</li>
            <li>Size Charts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMobileComponent;
