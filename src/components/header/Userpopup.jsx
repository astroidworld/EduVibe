import React from 'react'
import Style from './userpopup.module.css'
import { MdAccountBox } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { BiLogOutCircle,BiSolidBookBookmark } from 'react-icons/bi';
import { auth } from '../../Firebase-config';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Userpopup = ({user,clicked,setclicked,dpClickHandler}) => {

    

  const navigate = useNavigate(); 

  const logoutHandler = () => {        
    signOut(auth).then(() => {
    console.log("Sign out successfull");
    setclicked(false);
    navigate("/");
}).catch((error) => {    
    console.log("An error happened"+error.message);
    setclicked(false);
    });
}

  

  return (
    <div className={clicked?Style.containeron:Style.containeroff}>
      <div className={Style.triangle}></div>
      <div className={Style.name}>Hello, {user.displayName}</div>
      <div className={Style.optionContainer}>
        <div className={Style.option}><MdAccountBox className={Style.icon}/> Account</div>
        <div className={Style.option}><BiSolidBookBookmark className={Style.icon}/> My Courses</div>
        <div className={Style.option}><AiFillSetting className={Style.icon}/> Settings</div>
        <div className={`${Style.icon} ${Style.optionred}`} onClick={logoutHandler}><BiLogOutCircle className={Style.icon}/> Log out</div>
      </div>
    </div>
  )
}

export default Userpopup