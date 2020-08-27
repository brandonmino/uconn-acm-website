import React, { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Calendar from './components/Calendar/Calendar';
import Contact from './components/Contact/Contact';
import './App.css';

export default function App(props) {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleCurrentScreen = (screen) => {
    setCurrentScreen(screen)
  }

  return (
    <Fragment>
      <Header handleCurrentScreen={(value) => {handleCurrentScreen(value)}}/>
      <Home visible={currentScreen === "home" ? true : false}/>
      <About visible={currentScreen === "about" ? true : false}/>
      <Calendar visible={currentScreen === "calendar" ? true : false}/>
      <Contact visible={currentScreen === "contact" ? true : false}/>
      <Footer/>
    </Fragment>
  );
}





