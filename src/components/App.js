import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Intro from './Intro';
import Menu from './Menu';
import Gallery from './Gallery';
import Chef from './Chef';
import Book from './Book';
import Footer from './Footer';

const App = () => {
  return(
    <>
      <Navbar/>
      <HeroSection/>
      <Intro/>
      <Menu/>
      <Gallery/>
      <Chef/>
      <Book/>
      <Footer/>
    </>
  )
}

export default App;