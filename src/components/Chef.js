import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chef1 from '../assets/chef01.jpg';
import chef2 from '../assets/chef02.jpg';
import chef3 from '../assets/chef03.jpg';
import signature1 from '../assets/chef_signature_01.png';
import signature2 from '../assets/chef_signature_02.png';
import signature3 from '../assets/chef_signature_03.png';

const Chef = () => {
  return (
    <div className="chef__wrapper" id="chefs">
      <div className="chef__container" >
        <div className="chef__info">
          <h1>Meet Our Chef</h1>
          <p>Lorem Ipsum is simply dummy text of the printing is simply dummy text of the pri and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
        <Carousel autoPlay={false} showThumbs={false} showStatus={false}>
          <div className="chef__content">
            <div className="chef__intro">
              <h1>Gustave Berneir</h1>
              <h5>Executive Chef</h5>
              <p>Lorem Iptext inting and typesetting industry. It has rem Ipsum is simply ext of the printing and typesetting industry. It has survived not only five centuries.</p>
              <br/>
              <p>Lorem Ipsum is simply dummysum is ssum is tex ofing industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
              <div>
                <img src={signature1} alt="de"></img>
              </div>
            </div>
            <div className="chef__pic">
              <img src={chef1} alt="dd"></img>
            </div>
          </div>
          <div className="chef__content">
            <div className="chef__intro">
              <h1>Bryan Johnson</h1>
              <h5>Executive Chef</h5>
              <p>Lored typesetting industry. It has survived notve centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
              <br/>
              <p>Lorem Ipsum is simply dummy text of the mrinting and typesetting d not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
              <div>
                <img src={signature2} alt="de"></img>
              </div>
            </div>
            <div className="chef__pic">
              <img src={chef2} alt="dd"></img>
            </div>
          </div>
          <div className="chef__content">
            <div className="chef__intro">
              <h1>Jeremy Dupont</h1>
              <h5>Executive Chef</h5>
              <p>Lorem Iptext of ng indas survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
              <br/>
              <p>Lorem Ipf th printing and typesetting industryhas survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
              <div>
                <img src={signature3} alt="de"></img>
              </div>
            </div>
            <div className="chef__pic">
              <img src={chef3} alt="dd"></img>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Chef;