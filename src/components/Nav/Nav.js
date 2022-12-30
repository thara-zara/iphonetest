import React from 'react'
import "./Nav.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

const [shownav, setShowNav] = useState(false);
const handleClick = () =>setShowNav(!shownav);


  return (
    <div className='nav'>
         <Link to="/"> 
        <div className='nav-logo'>
        <i class="fa-sharp fa-solid fa-shop"></i> 
        </div>
        </Link> 
        <i className='fas fa-bars' onClick={handleClick}></i>
        <div className={shownav ?'nav-right active':"nav-right"}>
       
            <div className='mail'>
                <input type="text" placeholder='your@email' />
                <button>subscribe</button>
            </div>
            <div className='account'>
            <i className='fas fa-user'></i>
                <span>account</span>
            </div>
            <div className='cart'>
            <i className='fas fa-shopping-cart'></i>
                <span>cart</span>
            </div>
        </div> 
    </div>
  )
}

export default Nav