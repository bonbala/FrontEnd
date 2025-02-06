import React from "react";
import "../FooterComponent/index.css";
import FooterDesktopComponent from "./FooterDesktopComponent";
import FooterMobileComponent from "./FooterMobileComponent";
import FooterBottomComponent from "./FooterBottomComponent";
const FooterComponent = () => {
  return (
    <>
    <FooterDesktopComponent/>
    <FooterMobileComponent/>
    <FooterBottomComponent/>
    </>
    
  );
};

export default FooterComponent;
