import React from 'react';
import pic1 from '../assets/02.jpg';
import pic2 from '../assets/03.jpg';
import pic3 from '../assets/04.jpg';

const Intro = () => {
  return (
    <div className="intro__container" id="about">
      <div className="intro__imgs">
        <img className="intro__img intro__img--1" src={pic1} alt="cuisine"></img>
        <img className="intro__img intro__img--2" src={pic2} alt="cuisine"></img>
        <img className="intro__img intro__img--3" src={pic3} alt="cuisine"></img>
      </div>
      <div className="intro__content">
        <h1>Tasty food in town at the best locations!</h1>
        <h3>Lorem Ipsum is the printing and typesetting industry. It has survived not only five centuries.</h3>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled.</p>
        <a className="intro__btn btn" href="#menu">Explore Menu</a>
      </div>
    </div>
  )
}

export default Intro;