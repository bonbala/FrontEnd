import React, { useState } from 'react';
import '../QuickLinkComponent/quicklink.css';
import { FaChevronDown } from "react-icons/fa6";

const QuickLinkComponent = () => {
  const handleDropDown = (event) => {
    const button = event.currentTarget;
    const ul = button.nextElementSibling;

    // Toggle trạng thái mở/đóng bằng cách thay đổi thuộc tính data-open
    const isOpen = ul.getAttribute('data-open') === 'true';
    ul.setAttribute('data-open', !isOpen);
  };

  return (
    <div className="quick-link-component component">
      <div className="container">
        <div>
          <span>2024 FAVORITES</span>
          <ul>
            <li>Samba</li>
            <li>Gazelle</li>
            <li>Campus</li>
            <li>Spezial</li>
            <li>Z.N.E.</li>
          </ul>
        </div>
        <div>
          <span>FAVORITE COLLABS</span>
          <ul>
            <li>Iconic Collabs</li>
            <li>Limited-Release Clothing</li>
            <li>Limited-Release Shoes</li>
            <li>Video Game Collabs</li>
            <li>Disney Outfits</li>
          </ul>
        </div>
        <div>
          <span>FRESH STARTS</span>
          <ul>
            <li>Metallic Sneakers</li>
            <li>Burgundy Shoes & Fits</li>
            <li>Ski Outfits</li>
            <li>Socks</li>
            <li>Backpacks</li>
          </ul>
        </div>
        <div>
          <span>SPORTING CONNECTIONS</span>
          <ul>
            <li>Golf Clothing</li>
            <li>Tennis and Court Outfits</li>
            <li>Baseball Clothing</li>
            <li>Gym Accessories</li>
            <li>New Soccer Gear</li>
          </ul>
        </div>
      </div>

      <div className="mobile-container">
        <button onClick={(e)=>handleDropDown(e)}>
          <div className="menu-title">
            <span>2024 FAVORITES</span> <FaChevronDown />
          </div>
        </button>
        <ul data-open="false">
          <li>Samba</li>
          <li>Gazelle</li>
          <li>Campus</li>
          <li>Spezial</li>
          <li>Z.N.E.</li>
        </ul>

        <button onClick={(e)=>handleDropDown(e)}>
          <div className="menu-title">
            <span>FAVORITE COLLABS</span> <FaChevronDown />
          </div>
        </button>
        <ul data-open="false">
          <li>Iconic Collabs</li>
          <li>Limited-Release Clothing</li>
          <li>Limited-Release Shoes</li>
          <li>Video Game Collabs</li>
          <li>Disney Outfits</li>
        </ul>

        <button onClick={(e)=>handleDropDown(e)}>
          <div className="menu-title">
            <span>FRESH STARTS</span> <FaChevronDown />
          </div>
        </button>
        <ul data-open="false">
          <li>Metallic Sneakers</li>
          <li>Burgundy Shoes & Fits</li>
          <li>Ski Outfits</li>
          <li>Socks</li>
          <li>Backpacks</li>
        </ul>

        <button onClick={(e)=>handleDropDown(e)}>
          <div className="menu-title">
            <span>SPORTING CONNECTIONS</span> <FaChevronDown />
          </div>
        </button>
        <ul data-open="false">
          <li>Golf Clothing</li>
          <li>Tennis and Court Outfits</li>
          <li>Baseball Clothing</li>
          <li>Gym Accessories</li>
          <li>New Soccer Gear</li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinkComponent;
