import React, { useEffect, useState } from 'react'
import Userpopup from './Userpopup'
import Style from "./accountdp.module.css"
import { useDetectClickOutside } from 'react-detect-click-outside';
import dpimage from "../../assets/Images/dpimg.png"

const Accountdp = ({user}) => {
const [clicked, setclicked] = useState(false)

const dpClickHandler = () => {
      clicked?setclicked(false):setclicked(true);
      console.log(user);
}
const ref = useDetectClickOutside({ onTriggered: dpClickHandler });
useEffect(() => {
  


}, [clicked])


  return (
    <div className={Style.dpContainer}>
        <img src={user.photoURL?user.photoURL:dpimage} title={user.displayName} alt="" className={Style.dpPhoto} onClick={dpClickHandler} ref={ref}/>

        <Userpopup user={user} clicked={clicked} setclicked={setclicked} 
        dpClickHandler={dpClickHandler }/>

    </div>
  )
}

export default Accountdp