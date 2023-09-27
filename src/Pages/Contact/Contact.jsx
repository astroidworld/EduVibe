import React from 'react'
import Style from "./contact.module.css"
import { BsFillChatLeftQuoteFill,BsGlobeCentralSouthAsia } from 'react-icons/bs'
import { FcCallback } from 'react-icons/fc'


const Contact = () => {
  return (
    <div className={Style.mainContainer}>
        <div className={Style.divcontainer }>
          <div className={Style.sec1}>

            <div className="part1">
            <h1 className={Style.h1}><BsFillChatLeftQuoteFill className={Style.h1}/> Chat on us</h1>
            <p className={Style.p}>
            Our friendly team is here to help.<br/>info@EduVibe.com
            </p>            
            </div>

            <div className="part2">
            <h1 className={Style.h1}><BsGlobeCentralSouthAsia className={Style.h1}/> Our Address</h1>
            <p className={Style.p}>
            Come and say hello at our office HQ.
            <br/>Sarat Chatterjee 1st Block 1st Cross, Shibpur, Howrah-711101
            </p>            
            </div>

            <div className="part3">
            <h1 className={Style.h1}><FcCallback className={Style.h1}/> Call us</h1>
            <p className={Style.p}>
            Mon - Fri From 8am to 5pm.<br/>+91 758-695-2587
            </p>            
            </div>

          </div>

          <div className={Style.sec2}>

          <h1 className={Style.formh1}></h1>

          </div>
         </div>
    </div>
  )
}

export default Contact