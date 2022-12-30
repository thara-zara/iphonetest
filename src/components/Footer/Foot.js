import React from 'react'
import { Link } from 'react-router-dom';
import "./Foot.css";


const Foot = () => {
  return (
    <>
    <div className='footer'>
        <div className='cat'>
          There are many variations passages of Lorem Ipsum available, but the majority have
        </div>
        <div className='location'>
        <h4>Contact</h4>
          <p>+99 (0) 101 0000 888 </p>
          <p>  Patricia C. Amedee </p>
          <p>4401 Waldeck Street </p>
          <p> Grapevine Nashville,</p>
          <p> Tx 76051</p>
        </div>
        <div className='link'>
        <h4>Categories</h4>
    <div className='cate'>
        <div>iPhone</div>
            <div>iPhone</div>
            <div>iPads</div>
            <div>MacBook</div>
            <div>Smart Watch</div>
            <div>AirPods</div>
            <div>Camaras</div>
            <div>Gaming</div>
            <div>Appliance</div>
        </div>
        </div>
        <Link to="/"> 
        <div className='logo'>
        <i class="fa-sharp fa-solid fa-shop"></i> 
        </div>
        </Link> 
    </div>
    <div className='copyright'>
    © 2022 iphone shop(react js development R.tharindu). All rights reserved.
    </div>
    </>
  )
}

export default Foot