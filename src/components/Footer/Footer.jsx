import React from 'react'
import Style from "./footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={Style.footer}>

        <div className={Style.uppersec}>
          <img src="./EduVibe_logo.png" alt="" className={Style.footerlogo}/>
        </div>

      </footer>
      <div className={Style.copyrightSec}>Made by ❤️ astroidworld © 2023 EduVibe | All copyright reserved</div>
    </>
  )
}

export default Footer