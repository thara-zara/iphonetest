import React from 'react'
import { useState } from 'react';
import "./Side.css"
import { Link } from 'react-router-dom';

const Side = (props) => {

const [showcat, setShowNav] = useState(false);
const handleClick = () =>setShowNav(!showcat);

  return (
    <>
    <div className='side-bar'>
    <i className='fas fa-plus' onClick={handleClick}></i>
    <div className={showcat ? 'side active':"side"}>
      <ul>
        <li>
            <i className='fas fa-mobile-alt'></i>
            <Link to="/ProductCategory"><span>iPhone</span></Link>
        </li>
        <li>
            <i className='fas fa-tablet-alt'></i>
            <span>iPads</span>
        </li>
        <li>
        <i className='fas fa-desktop'></i>
            <span>MacBook</span>
        </li>
        <li>
        <i className='fas fa-wifi'></i>
            <span>Smart Watch</span>
        </li>
        <li>
        <i className='fas fa-headphones'></i>
            <span>AirPods</span>
        </li>
        <li>
        <i className='fas fa-wifi'></i>
            <span>Drones</span>
        </li>
        <li>
        <i className='fas fa-home'></i>
            <span>Camaras</span>
        </li>
        <li>
       
        <i className='fas fa-gamepad'></i>
            <span>Gaming</span>
        </li>
        <li>
        <i className='fas fa-user'></i>
            <span>Appliance</span>
        </li>
   
        
      </ul>
    </div>
    <div className='side-btm'>
       <div className='side-btm-m'>
       <img src={props.image} alt="img" />
       </div>
    </div>
    </div>
    </>
  )
}

export default Side
