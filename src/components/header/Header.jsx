import React, { useEffect, useState } from "react";
import Style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { AiFillHome,AiFillCloseCircle,AiOutlineLogin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonPlusFill} from "react-icons/bs";
import { auth } from '../../Firebase-config.jsx';
import Accountdp from "./Accountdp.jsx";

const Header = ({ type }) => {
  const [clicked, setclicked] = useState(false)
  const [navStatus, setnavStatus] = useState(Style.navContainer)
  const [user, setuser] = useState(null);
 

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

  useEffect(()=>{
        
    auth.onAuthStateChanged((user)=>{
        if(user)
        {
            // setusername(user.displayName)
            setuser(auth.currentUser);
        }
        else
        setuser(null)
    })

},user)


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

            {
              !user?
              <div className={Style.btnsec}>
              <NavLink to={"login"} className={Style.loginbtn} onClick={clickHandler}>
              <AiOutlineLogin className={Style.icon}/>Login
              </NavLink>
              <NavLink to={"signup"} className={Style.signupbtn} onClick={clickHandler}>
                <BsPersonPlusFill className={Style.icon}/>Sign up
              </NavLink>
            </div>
            :
            <div className={Style.dpsection}>
            <Accountdp user={user} ></Accountdp>
            </div>

            }


            
          </div>

        </header>
      
      
    </>
  );
};

export default Header;
