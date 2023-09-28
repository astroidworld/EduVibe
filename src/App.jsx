// for layout 
import React from 'react'
import Header from './components/header/Header';
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import Headersec from './components/header/Headersec';
import ScrollToTop from './Scrolltotop';




const App = ({layout}) => {

  return (
    <>

    {(layout !== "account")? <Header/> : <Headersec/>}  
    <ScrollToTop/>
    <Outlet/>
    <Footer/>      
    </>
  );
}

export default App