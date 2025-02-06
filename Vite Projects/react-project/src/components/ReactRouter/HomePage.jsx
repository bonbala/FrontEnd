import React, { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../../Store/Context";
const Menu = () => {
  const {user,theme,setTheme} = useContext(ThemeContext)
  return (
    <ul
      className={`header-component ${ theme ? '' : 'dark'}`}
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "30px" }}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/managerEmployeePage"}>Manager Employee</NavLink>
        </li>
        <li>
          <NavLink to={"/managerHuman"}>Manager Human</NavLink>
        </li>
      </div>
      <div>
        {theme ? (
          <>
            <button onClick={()=>setTheme(!theme)}>Light</button>
          </>
        ) : (
          <>
            <button onClick={()=>setTheme(!theme)}>Dark</button>{" "}
          </>
        )}
      </div>
      <div>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            margin: "10px 20px 10px 0",
          }}
        >
          {user.name && user.image ? (
            <>
              <img src={user.image} alt="" style={{ borderRadius: "50%" }} />
              <p>{user.name}</p>
            </>
          ) : null}
        </li>
      </div>
    </ul>
  );
};

export default Menu;
