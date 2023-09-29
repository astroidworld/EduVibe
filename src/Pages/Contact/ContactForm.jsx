import React from 'react'
import Style from "./form.module.css"
import Formele from './Formele.jsx'


const ContactForm = () => {
  return (
    <div>

        <h1 className={Style.formh1}>
                Contact Our Experts  
               <br/> 
               <span className='bluetext bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]   text-transparent bg-clip-text font-bold lg:w-[70%]'> Feel Free to contact with us</span>              
        </h1>

        <form action="#" className={Style.form}>
            <Formele type="text" lable={"Full Name"} placeholder={"Enter your name..."} id="fullname" isrequired={true}/>
            <Formele type="email" lable={"Email"} placeholder={"Enter your email..."} id="fullname2" isrequired={true}/>
            <Formele type="textarea" lable={"Message"} placeholder={"Write your message here..."} id="fullname2" isrequired={true}/>
            <button type="submit" className={Style.submitbtn}>Send Us Message</button>
        </form>
    
    </div>
  )
}

export default ContactForm