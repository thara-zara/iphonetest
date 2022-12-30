import React from 'react';
import "./Main.css";
import Arrive from '../Arrive/Arrive';
import dji from '../../assests/dji.png';
import lap from '../../assests/Laptop.png';
import G from '../../assests/G.png';
import Product from '../Product/Product';
import Hero from '../Hero/Hero';
import Slider from '../Slider/Slider';

import hero from "../../assests/nike.png";
import hero2 from "../../assests/12p.jpg";
import hero3 from "../../assests/w1.png";
import hero4 from "../../assests/w2.png";


const Main = () => {
  return (
    <div className='main-main'>
      <div className='hero'>
          <Hero
          img1={hero}
          img2={hero}
          img3={hero}
          img4={hero}
          />
          
      </div>
      <div className='arrive'>
        <h2>new arrivals</h2>
        <div className='new'>
          <Arrive
            name="iMac"
            image={dji}
            description="dji fps drone"
            price="114,000 LKR"
            class="one"
          />
          <Arrive
            name="AirPods"
            image={G}
            description="dji fps drone"
            price="114,000 LKR"
            class="two"
          />
          <Arrive
            name="MacBook"
            image={lap}
            description="dji fps drone"
            price="114,000 LKR"
            class="three"
          />
          <Arrive
            name="Drones"
            image={dji}
            description="dji fps drone"
            price="114,000 LKR"
            class="four"
          />
        </div>
      </div>

      <div className='product'>
        <Product/>
      </div>
    </div>
  )
}

export default Main
