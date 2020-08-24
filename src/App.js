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

  let tempScreen = null;

  switch(currentScreen) {
    case 'home':
      tempScreen = <Home/>
      break;
    case 'about':
      tempScreen = <About/>
      break;
    case 'calendar':
      tempScreen = <Calendar/>
      break;
    case 'contact':
      tempScreen = <Contact/>
      break;
    default:
      break;
  }

  const handleCurrentScreen = (screen) => {
    setCurrentScreen(screen)
  }

  return (
    <Fragment>
      <Header handleCurrentScreen={(value) => {handleCurrentScreen(value)}}/>
      {tempScreen}
      <Footer/>
    </Fragment>
  );
}





