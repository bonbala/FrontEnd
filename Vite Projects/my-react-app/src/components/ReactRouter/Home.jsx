import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router";
import { ThemeContext } from "../../Store/Context";

const Home = () => {
  const [product, setProduct] = useState([]);
  const {listShoes}=useContext(ThemeContext)


  return (
    <div className="d-flex gap-2"> 
      {listShoes.map((item) => {
        return <NavLink to={`/${item.id}`} key={item.id} className="btn btn-success w-20">{item.id}</NavLink>;
      })}
    </div>
  );
};

export default Home;
