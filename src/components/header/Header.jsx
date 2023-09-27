import React, { useState } from "react";
import Style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { AiFillHome,AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ type }) => {
  const [clicked, setclicked] = useState(false)
  const [navStatus, setnavStatus] = useState(Style.navContainer)

  const clickHandler = () => {
    if (clicked === false) {
      setclicked(true);
      setnavStatus(Style.navContaineron)
    }
    else
    {
      setclicked(false);
      setnavStatus(Style.navContainer)
    }
  }
  return (
    <>
      
        <header className={Style.header}>
          <div className={Style.logosec}>
            <NavLink to={"/"}>
              <img src="./EduVibe_logo.png" alt="" className={Style.img} />
            </NavLink>
          </div>
          {/* navbar */}
          <div className="check" onClick={clickHandler}>
          {clicked?<AiFillCloseCircle className={Style.humbarg}/>:<GiHamburgerMenu className={Style.humbarg}/>}
          
          </div>
          
          <div className={navStatus}>

            <div className={Style.navbar}>
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return `${Style.navicon} ${isActive ? Style.active : ""}`;
                }}
                onClick={clickHandler}
              >
                Home
              </NavLink>

              <NavLink
                to={"courses"}
                className={({ isActive }) => {
                  return `${Style.navicon} ${isActive ? Style.active : ""}`;
                }}
                onClick={clickHandler}
              >
                Courses
              </NavLink>

              <NavLink
                to={"about"}
                className={({ isActive }) => {
                  return `${Style.navicon} ${isActive ? Style.active : ""}`;
                }}
                onClick={clickHandler}
              >
                About
              </NavLink>

              <NavLink
                to={"contact"}
                className={({ isActive }) => {
                  return `${Style.navicon} ${isActive ? Style.active : ""}`;
                }}
                onClick={clickHandler}
              >
                Contact us
              </NavLink>
            </div>

            <div className={Style.btnsec}>
              <NavLink to={"login"} className={Style.loginbtn} onClick={clickHandler}>
                Login
              </NavLink>
              <NavLink to={"signup"} className={Style.signupbtn} onClick={clickHandler}>
                Sign up
              </NavLink>
            </div>
            
          </div>

        </header>
      
      
    </>
  );
};

export default Header;
