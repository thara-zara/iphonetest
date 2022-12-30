import React from 'react';
import "./Big.css";
import phone from "../../assests/iphone12.png"
import cart from "../../assests/cart.svg";
import heart from "../../assests/heart.svg";

import Pro from '../Product/ProPro';
import ProData from "../Product/ProData";
import SingleSlider from './SingleSlider';

const Big = () => {

  const Products =()=>{
    return(
        ProData.map((item,index) =>{
            return(
                <Pro key={index}
                    name={item.name}
                    image={item.image}
                    color={item.color}
                    storage={item.storage}
                    price={item.price}
                />
            )
        })
    );
};

  return (

    <div className='big'>
      <div className='big-hero'>
      <div className='b-left'>
          <div className='b-img'>
             <SingleSlider/>
          </div>
      </div>
      <div className='b-right'>
        <h1>Buy iPhone 14</h1>
        <p>Get $25 - $515 of when you 
          teade in an iPhone Search(1st Generation)
          or newer.* <br/>
          <h5>Learn More</h5>
        </p>
        <div className='model'>
          <h5>Choose your model</h5>
          <div className='mod'>
              <div className='m-left'>
               
                  <div>
                    <h4>iPhone 14</h4>
                    <p>5.7-inch display</p>
                  </div>
                  <div className='price'>
                    <h4>From $799</h4>
                    <p>or $79 per month</p>
                  </div>
               
              </div>
              <div className='m-right'>
              
                <div>
                    <h4>iPhone 13 </h4>
                    <p>5.7-inch display</p>
                  </div>
                  <div className='price'>
                    <h4>From $799</h4>
                    <p>or $79 per month</p>
                  </div>
                
              </div>
          </div>
        </div>
        <div className="cart">
          <button><i className="fas fa-shopping-cart"></i>buy now</button>
          <i className="fas fa-heart"></i>
        </div>
      </div>
      </div>

      <div className='p-description'>
        <div>iPhone 14 - with Free USB-C power Adapter</div>
        <div>Product Code - AJJU5689TY54</div>
        <div>Model No - MG5487</div>

        <p>
        iPhone 14 - with Free USB-C power Adapter 5.7-inch display
        Product Code - AJJU5689TY54 Model No - MG5487 Get $25 - $515 of when you 
          teade in an iPhone Search(1st Generation) iPhone 14 - with Free USB-C power Adapter 5.7-inch display
        Product Code - AJJU5689TY54 Model teade in an iPhone Search(1st Generation)  with Free USB-C power Adapter 5.7-inch display
        Product Code - AJJU5689TY54 Model No - MG5487 Get $25 - $515 of when you 
          teade in an iPhone Search
          or newer.* 
        </p>
      </div>

      <div className='hr'></div>
      <div className='big-p-section'>
        {Products()} 
      </div>
    </div>

  )
}

export default Big
