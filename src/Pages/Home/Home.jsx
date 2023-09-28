import React from 'react';
import Style from './home.module.css';
import Herosection from './components/Herosection';


const Home = () => {
  return (
    <div className={Style.homecontainer}>
       <Herosection/> 
        
    </div>
  )
}

export default Home