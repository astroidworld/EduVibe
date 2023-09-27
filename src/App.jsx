// for layout 
import React from 'react'
import Header from './components/header/Header';
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import Headersec from './components/header/Headersec';




const App = ({layout}) => {

  return (
    <>

    {(layout !== "account")? <Header/> : <Headersec/>}  

    <Outlet/>
    <Footer/>      
    </>
  );
}

export default App