import React from 'react';


const HeroSection = () => {

  return(
    <div className="hero__container">
        <h1 className="hero__title">Flex Muel's</h1>
        <div className="hero__subtitle">
          <div className="hero__line"></div>
          <h5>Italian Cuisine．Since 1986</h5>
          <div className="hero__line"></div>
        </div>
        <h5 className="hero__slogan">FRESH / HEALTHY / TASTY</h5>
        <div className="hero__info">
          <p>Mon. - Sat. 11:30 - 22:00</p>
          <p>155 W 51ST ST, NEW YORK, NY 10019</p>
          <p>(212) 554 - 1515</p>
        </div>
        <a className="hero__btn" href="#book">Reservation</a>
    </div>
  )
}

export default HeroSection;