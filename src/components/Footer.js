import React from 'react';

const Footer = () => {

  return (
    <div className="footer__container">
      <ul className="footer__info">
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Terms and Condition</a></li>
        <li><a href="/">Legal</a></li>
      </ul>
      <ul className="footer__social-media">
        <li><a href="/"><i className='fab fa-facebook-f'/></a></li>
        <li><a href="/"><i className='fab fa-instagram'/></a></li>
        <li><a href="/"><i className='fab fa-youtube'/></a></li>
        <li><a href="/"><i className='fab fa-twitter'/></a></li>
      </ul>
      <p className="footer__right">© 2021 Flex Muel's All Rights Reserved.</p>
    </div>
  )
}

export default Footer;