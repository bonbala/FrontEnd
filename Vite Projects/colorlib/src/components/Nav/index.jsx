import { Box } from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import "./style.scss";

import { IoIosSearch } from "react-icons/io";
const NavComponent = () => {
  return (
    <div className="nav-component">
      <div className="nav-down  container">
        <div className="menu">
          <FaBars/>
          MENU
        </div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Staff</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <div className="search-input">
          <input placeholder="Search">
          </input>
          <IoIosSearch/>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
