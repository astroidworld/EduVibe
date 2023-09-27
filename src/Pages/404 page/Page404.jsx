import React from 'react'
import Style from "./page404.module.css"
import { NavLink } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <div className={Style.page404Container}>
        <div className={Style.card}>
          <h1 className={Style.h1}>Ooops...</h1>

          <div className={Style.imgback}></div>

          <h2 className={Style.h2}>Look like you're lost</h2>

          <h3 className={Style.h3}>The page you are looking for not avaible!</h3>

          <NavLink to={"/"} className={Style.btn}> Go Back Home</NavLink>
        </div>
      </div>
    </>
  );
}

export default Page404