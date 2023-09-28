import React from 'react'
import Style from "./herosection.module.css"
import { Link } from 'react-router-dom'
import  Banner  from "../../../assets/Images/video.mp4";




const Herosection = () => {
  return (
    <div className={Style.HeroContainer}>
    
        <div className={Style.leftSection}>
            <h1 className={Style.headeing}>Ignite Your Learning <span className='bluetext bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]   text-transparent bg-clip-text font-bold lg:w-[70%]'> Journey with EduVibe</span></h1>

            <p className={Style.para}>Embark on a Transformative Educational Journey where Knowledge  <span className=' text-[#18c2fd] font-semibold'>Intersects with Creativity</span>, Guided by Passionate Instructors and Empowered by <span className=' text-[#18c2fd] font-semibold'>Cutting-Edge Technology</span>.</p>
            
            <div className={Style.btnsec}>
            <Link to="login"><button className={Style.btn1}>Student</button></Link>
            <Link to="login"><button className={Style.btn2}>Instructor</button></Link>
            </div>

        </div>
    

   
        <div className={Style.rightSection}>
            <video
            muted
            loop
            autoPlay
            className={Style.video}
            >
            <source  src={Banner} type="video/mp4" className={Style.video}/>
            </video>
        </div>
        


    </div>
    
  )
}

export default Herosection