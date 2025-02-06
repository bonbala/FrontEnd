import React from 'react'
import './style.scss'
import { IoMdDesktop } from "react-icons/io";
import { IoMdTabletPortrait } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import Logo from "../../assets/images/logo.png";

const SwitcherBar = () => {
  return (
    <div>
      {/* <div className="switcher-component">
          <div className="switcher-left">
            <div className="logo">
              <a href="">
                <img src={Logo} alt="" />
              </a>
            </div>
    
            <div className="drawer">FOX</div>
          </div>
    
          <div className="switcher-right">
            <div className="button-container">
              <div className="desktop btn">
                <IoMdDesktop />
              </div>
              <div className="table btn">
                <IoMdTabletPortrait />
              </div>
              <div className="phone btn">
                <IoIosPhonePortrait />
              </div>
              <div className="purchase btn">
                <FaCartShopping />
              </div>
              <div className="remove btn">
                <IoClose />
              </div>
            </div>
          </div>
        </div> */}

        <div className="nav-up container">
                <div className="brand">
                  <span>FOX. </span>
                  <p>university</p>
                </div>
                <div className="infos-container">
                <div className="email">
                  <FaPaperPlane />
                  <div className="infos">
                    <span>Email</span>
                    <p>youremail@email.com</p>
                  </div>
                </div>
                <div className="phone-contact">
                  <MdPhone />
                  <div className="infos">
                    <span>Call</span>
                    <p>Call Us: + 1235 2355 98</p>
                  </div>
                </div>
                <div className="button-apply">
                  <button>Apply Now</button>
                </div>
                </div>
              </div>
    </div>
  )
}

export default SwitcherBar
