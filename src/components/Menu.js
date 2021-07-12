import React, {useState} from 'react';
import starters from '../assets/icons8-omlette-100.png';
import meat from '../assets/icons8-rack-of-lamb-100.png';
import vegan from '../assets/icons8-collard-greens-100.png';
import dessert from '../assets/icons8-banana-split-100.png';
import drinks from '../assets/icons8-the-toast-100.png';

const Menu = () => {

  const [startersBtn, setStartersBtn] = useState(true);
  const [meatBtn, setMeatBtn] = useState(false);
  const [veganBtn, setVeganBtn] = useState(false);
  const [dessertBtn, setDessertBtn] = useState(false);
  const [drinksBtn, setDrinksBtn] = useState(false);

  const handleStarterBtn = () => {
    setStartersBtn(true);
    setMeatBtn(false);
    setVeganBtn(false);
    setDessertBtn(false);
    setDrinksBtn(false);
  }

  const handleMeatBtn = () => {
    setMeatBtn(true);
    setStartersBtn(false);
    setVeganBtn(false);
    setDessertBtn(false);
    setDrinksBtn(false);
  }

  const handleVeganBtn = () => {
    setVeganBtn(true);
    setMeatBtn(false);
    setStartersBtn(false);
    setDessertBtn(false);
    setDrinksBtn(false);
  }

  const handleDessertBtn = () => {
    setDessertBtn(true);
    setMeatBtn(false);
    setStartersBtn(false);
    setVeganBtn(false);
    setDrinksBtn(false);
  }

  const handleDrinksBtn = () => {
    setDrinksBtn(true);
    setMeatBtn(false);
    setStartersBtn(false);
    setVeganBtn(false);
    setDessertBtn(false);
  }

  return (
    <div className="menu__wrapper" id="menu">
      <div className="menu__container">
        <section className="menu__intro">
          <h1>Main Menu</h1>
        </section>
        <section className="menu__types">
          <div className="menu__type" onClick={handleStarterBtn}>
            <img src={starters} alt="starters"></img>
            <h3>Starters</h3>
          </div>
          <div className="menu__type" onClick={handleMeatBtn}>
            <img src={meat} alt="starters"></img>
            <h3>Meat</h3>
          </div>
          <div className="menu__type" onClick={handleVeganBtn}>
            <img src={vegan} alt="starters"></img>
            <h3>Vegan</h3>
          </div>
          <div className="menu__type" onClick={handleDessertBtn}>
            <img src={dessert} alt="starters"></img>
            <h3>Dessert</h3>
          </div>
          <div className="menu__type" onClick={handleDrinksBtn}>
            <img src={drinks} alt="starters"></img>
            <h3>Drinks</h3>
          </div>
        </section>
        <section>
          <ul className={ startersBtn? "menu__dishes active" : "menu__dishes"}>
            <li className="menu__dish">
              <h3>Green Salad</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
                <i className="fas fa-pepper-hot"></i>
              </div>
              <h4>$12.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Eggs Any Style</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$23.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Chicken Wings</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$45.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Appeteaser Platter</h3>
              <h4>$23.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Spicy Mixed Olives</h3>
              <h4>$53.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Wing Roulette</h3>
              <div className="menu__icon">
                <i className="fas fa-pepper-hot"></i>
              </div>
              <h4>$25.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
          </ul>

          <ul className={ meatBtn? "menu__dishes active" : "menu__dishes"}>
            <li className="menu__dish">
              <h3>Grilled Chicken Tenders</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$73.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Whole Chicken</h3>
              <div className="menu__icon">
                <i className="fas fa-pepper-hot"></i>
              </div>
              <h4>$23.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Meal Platter</h3>
              <h4>$28.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Mediterranean Salad</h3>
              <h4>$75.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Something Exotic</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$23.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Cataplana Algarve</h3>
              <h4>$37.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
          </ul>

          <ul className={ veganBtn? "menu__dishes active" : "menu__dishes"}>
            <li className="menu__dish">
              <h3>Spicy Rice</h3>
              <h4>$23.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Grilled Vegetables</h3>
              <h4>$55.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Three Bean Salad</h3>
              <div className="menu__icon">
                <i className="fas fa-pepper-hot"></i>
              </div>
              <h4>$42.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Feta Cheese</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$38.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Citrus Bliss</h3>
              <div className="menu__icon">
                <i className="fas fa-pepper-hot"></i>
              </div>
              <h4>$22.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
          </ul>

          <ul className={ dessertBtn? "menu__dishes active" : "menu__dishes"}>
            <li className="menu__dish">
              <h3>Choco Cake</h3>
              <h4>$18.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Creamy Cheesecake</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$24.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Jelly Doughnut</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$39.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Custard Pudding</h3>
              <h4>$41.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Berry Sundae</h3>
              <h4>$12.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Dondurma</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$33.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
          </ul>

          <ul className={ drinksBtn? "menu__dishes active" : "menu__dishes"}>
            <li className="menu__dish">
              <h3>Bottled Water</h3>
              <h4>$54.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Fruit Juice</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$28.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Portuguese Lemonade</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$23.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Fresh Lime Soda</h3>
              <h4>$19.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
            <li className="menu__dish">
              <h3>Red Wine</h3>
              <div className="menu__icon">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <h4>$65.00</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Menu;