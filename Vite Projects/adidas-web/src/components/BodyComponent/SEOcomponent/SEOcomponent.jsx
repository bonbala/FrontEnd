import React from "react";
import "../SEOcomponent/SEO.css";
import { SiAdidas } from "react-icons/si";
const SEOcomponent = () => {
  return (
    <div className="SEO-component">
      <div className="container">
        <div className="context">
        <h1>A leader in athletic performance since 1949</h1>
        <p>
          We're inspired by athletes. From the very first track spikes Adi
          Dassler made in his workshop, creating the best gear for the athlete
          is what drives us to pursue technological breakthroughs and design
          innovations. Our sneakers and apparel are worn by world-record holders
          and medal winners, but it's just as important that road runners,
          weekend hikers, recreational soccer players, and fitness enthusiasts.
          From adidas Boost, the game-changing cushioning technology, to the
          world-beating design of Adizero Adios Pro running shoes to Terrex
          outdoor gear to soccer cleats with unbeatable touch, we're always
          iterating, innovating and improving with athletes in mind.
          <br />
          <br />
          The 3-Stripes have appeared on medal stands all around the world, but
          they've also had an influence that extends far beyond the field of
          play. adidas sneakers have been worn by hip-hop performers, skaters,
          artists and all the other change-makers who move the culture forward
          with their vision and uncompromising style. We've made our mark with
          legendary lifestyle shoes like the adidas Superstar, the Stan Smith
          and the Samba, shoes that began as athletic footwear before hitting
          the streets and leaving an indelible impression on the culture. <br />
          <br />
          adidas Originals apparel is a stylish complement to our lifestyle
          shoes. Our streetwear collections pull from the archives to put a
          modern spin on classics like the Firebird tracksuit and the Tiro pant.
          Luxe materials, sophisticated silhouettes and unexpected details
          elevate our streetwear and transcend sport while at the same time
          never losing sight of our heritage. Because our mantra is, and has
          always been, that through sport we have the power to change lives.
          <br />
        </p>
        </div>
        <div className="SEO-logo"><SiAdidas className="logo"/></div>
      </div>
    </div>
  );
};

export default SEOcomponent;
