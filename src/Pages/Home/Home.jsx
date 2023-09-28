import React from 'react';
import Style from './home.module.css';
import Herosection from './components/Herosection.jsx';
import Codesites from './components/Codesites';
import LowerSection from './components/LowerSection.jsx';



const Home = () => {
  return (
    <div className={Style.homecontainer}>
       <Herosection/> 
       <Codesites/>
       <LowerSection/>
    </div>
  )
}

export default Home