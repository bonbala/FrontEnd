import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";;
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import InstaICon from '../../assets/images/instaIcon.png'
import TiktokIcon from '../../assets/images/TiktokIcon.png'
import YoutubeIcon from '../../assets/images/YoutubeIcon.png'
import TwitterIcon from '../../assets/images/TwitterIcon.png'
const FooterDesktopComponent = () => {
  return (
    <div className="footer-component-desktop">
      <div>
        <h5>PRODUCTS</h5>
        <ul>
          <li><a href="">Shoes </a></li>
          <li><a href="">Clothing </a></li>
          <li><a href="">Accessories </a></li>
          <li><a href="">Gift Cards </a></li>
          <li><a href="">//</a></li>
          <li><a href="">New Arrivals </a></li>
          <li><a href="">Best Sellers </a></li>
          <li><a href="">Release Dates </a></li>
          <li><a href="">Sale </a></li>
        </ul>
      </div>
      <div>
        <h5>Sports</h5>
        <ul>
          <li><a href="">Soccer</a></li>
          <li><a href="">Running</a></li>
          <li><a href="">Basketball</a></li>
          <li><a href="">Football</a></li>
          <li><a href="">Outdoor</a></li>
          <li><a href="">Golf</a></li>
          <li><a href="">Baseball</a></li>
          <li><a href="">Tennis</a></li>
          <li><a href="">Skateboarding</a></li>
          <li><a href="">Training</a></li>
          <li><a href="">Motorsports</a></li>
        </ul>
      </div>
      <div>
        <h5>Collections</h5>
        <ul>
        <li><a href="">adicolor</a></li>
        <li><a href="">Ultraboost</a></li>
        <li><a href="">NMD</a></li>
        <li><a href="">Forum</a></li>
        <li><a href="">Superstar</a></li>
        <li><a href="">Running Shoes</a></li>
        <li><a href="">adilette</a></li>
        <li><a href="">Stan Smith</a></li>
        <li><a href="">adizero</a></li>
        <li><a href="">Tiro</a></li>
        <li><a href="">Cloudfoam Pure</a></li>
        </ul>
      </div>
      <div>
        <h5>SUPPORT</h5>
        <ul>
          <li><a href="">Help </a></li>
          <li><a href="">Returns & Exchanges</a></li>
          <li><a href="">Shipping </a></li>
          <li><a href="">Order Tracker</a></li>
          <li><a href="">Store Locator</a></li>
          <li><a href="">Size Charts</a></li>
          <li><a href="">Gift Card Balance</a></li>
          <li><a href="">How to Clean Shoes</a></li>
          <li><a href="">Bra Fit Guide</a></li>
          <li><a href="">Breathing for Running</a></li>
          <li><a href="">Promotions </a></li>
          <li><a href="">Sitemap </a></li>
        </ul>
      </div>
      <div>
        <h5>COMPANY INFO</h5>
        <ul>
          <li><a href="">About Us</a></li>
          <li><a href="">Student Discount</a></li>
          <li><a href="">Military & Healthcare Discount</a></li>
          <li><a href="">adidas Stories</a></li>
          <li><a href="">adidas Apps</a></li>
          <li><a href="">Impact</a></li>
          <li><a href="">People</a></li>
          <li><a href="">Planet</a></li>
          <li><a href="">adiClub</a></li>
          <li><a href="">Affiliates</a></li>
          <li><a href="">Press</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">California Transparency in Supply Chains Act</a></li>
          <li><a href="">Responsible Disclosure</a></li>
          <li><a href="">Transparency in Coverage</a></li>
        </ul>
      </div>
      <div>
        <h5>FOLLOW US</h5>
        <ul>
        <li><a href=""><FaFacebook/></a></li>
        <li><a href=""><img src={InstaICon} alt="" /></a></li>
        <li><a href=""><AiFillTwitterCircle style={{borderRadius:'50%'}}/></a></li>
        <li><a href=""><FaPinterest/></a></li>
        <li><a href=""><img src={TiktokIcon} alt="" /></a></li>
        <li><a href=""><img src={YoutubeIcon} alt="" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterDesktopComponent
