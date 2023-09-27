import React from 'react'
import Style from "./Header.module.css";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Headersec = () => {
  return (
    <header className={Style.header}>
    <div className={Style.logosec}>
      <NavLink to={"/"}>
        <img src="./EduVibe_logo.png" alt="" className={Style.img} />
      </NavLink>
    </div>

    <NavLink to={"/"} className={Style.homebtn}>
      <AiFillHome />
      Home
    </NavLink>
  </header>
  )
}

export default Headersec