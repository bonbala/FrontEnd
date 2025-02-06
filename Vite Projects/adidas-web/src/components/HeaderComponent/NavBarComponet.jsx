import * as React from 'react';
import { SiAdidas } from "react-icons/si";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import USFlag from '../../assets/images/USFlag.png'

const NavBarComponet = () => {
    
  return (
    <>
      <div className="nav-sale"></div>
      <nav className="nav-bar">
        <SiAdidas className="nav-logo" />
        <div className="nav-bar-top">
          <a href="">help</a>
          <a href="">orders and returns</a>
          <a href="">join adiClub</a>
          <button style={{ border: "none", background: "transparent" }}>
            <img
              src={USFlag}
              alt=""
              style={{ width: "20px", border: "solid 1px black", marginBottom:'0.7px'}}
            />
          </button>
        </div>
        <div className="nav-bar-bottom">
          <div className="mobile-nav">
            <button>
              <FaBars className="icon FaBars" />
            </button>
            <button>
              <FaRegHeart className="icon FaRegHeart" />
            </button>
          </div>
          <div className="main-mobile-nav">
            <SiAdidas className="nav-logo-mobile" />
          </div>
          <ul className="main-nav">
            <li>MAN</li>
            <li>WOMAN</li>
            <li>KIDS</li>
            <li>GIFTS</li>
            <li>SALE</li>
            <li>NEW & TRENDING</li>
          </ul>
          <div className="search-nav">
            <div className="input-search">
              <input placeholder="Search"></input>
              <IoSearch className="fa-magnifying-glass" />
            </div>
            <button>
              <LuUserRound className="icon LuUserRound" />
            </button>
            <button>
              <FaRegHeart className="icon FaRegHeart" />
            </button>
            <button>
              <IoSearch className="icon IoSearch" />
            </button>
            <button>
              <MdOutlineShoppingBag className="icon MdOutlineShoppingBag" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarComponet
