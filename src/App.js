import React, { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Calendar from './components/Calendar/Calendar';
import Contact from './components/Contact/Contact';
import './App.css';
import { Helmet } from 'react-helmet';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleCurrentScreen = (screen) => {
    setCurrentScreen(screen)
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UConn ACM</title>
        <link rel="canonical" href="https://uconnacm.netlify.app/" />
      </Helmet>
      <div className="app-container">
        <Header handleCurrentScreen={(value) => {handleCurrentScreen(value)}}/>
        <Home visible={currentScreen === "home" ? true : false}/>
        <About visible={currentScreen === "about" ? true : false}/>
        <Calendar visible={currentScreen === "calendar" ? true : false}/>
        <Contact visible={currentScreen === "contact" ? true : false}/>
        <Footer/>
      </div>
    </Fragment>
  );
}





