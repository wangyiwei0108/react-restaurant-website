import React, {useState} from 'react';

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const setMenuFalse = () => {
    if(window.innerWidth >= 850) {
      setMenu(false)
    } else {
      return;
    }
  };

  window.addEventListener('resize', setMenuFalse);

  return(
    <div className="navbar__container">
      <div className="navbar__logo" onClick={() => setMenu(false)}>
        <h1>Flex Muel's</h1>
      </div>
      <ul className={menu? "navbar__links active" : "navbar__links"}>
        <li className="navbar__link"><a onClick={() => setMenu(false)} href="#about"><div>about</div></a></li>
        <li className="navbar__link"><a onClick={() => setMenu(false)} href="#menu"><div>menu</div></a></li>
        <li className="navbar__link"><a onClick={() => setMenu(false)} href="#gallery"><div>gallery</div></a></li>
        <li className="navbar__link"><a onClick={() => setMenu(false)} href="#chefs"><div>chefs</div></a></li>
        <li className="navbar__link"><a onClick={() => setMenu(false)} href="#book"><div>book now</div></a></li>
      </ul>
      <div className="navbar__menu" onClick={() => setMenu(!menu)}>
        <i className={menu? "fas fa-times" : "fa fa-bars"}></i>
      </div>
      <div className={menu? "navbar__footer-container active" : "navbar__footer-container"}>
        <ul className="navbar__info">
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms and Condition</a></li>
          <li><a href="/">Legal</a></li>
        </ul>
        <ul className="navbar__social-media">
          <li><a href="/"><i className='fab fa-facebook-f'/></a></li>
          <li><a href="/"><i className='fab fa-instagram'/></a></li>
          <li><a href="/"><i className='fab fa-youtube'/></a></li>
          <li><a href="/"><i className='fab fa-twitter'/></a></li>
        </ul>
        <p className="navbar__right">© 2021 Foodie All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Navbar;