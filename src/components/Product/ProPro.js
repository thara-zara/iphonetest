import React from 'react';
import "./ProPro.css"
import cart from "../../assests/cart.svg";
import heart from "../../assests/heart.svg";
import { Link } from 'react-router-dom';

function Pro(props){
    return(
        <Link to="/Singlep"> 
        <div className='single-p'>
            <div className='p-img'>
                <img src={props.image} alt="img"/>
            </div>
            <div className='body'>
                <div className='name'>
                    <span>{props.name}</span>
                </div>
                <div className='color'>
                    <span>{props.color}</span>
                </div>
                <div className="storage">
                    <span>{props.storage}</span>
                </div>
                <div className="price">
                    <span>{props.price}</span>
                </div>
                <div className="cart">
                    <button><i className="fas fa-shopping-cart"></i>buy now</button>
                    <i className="fas fa-heart"></i>
                </div>
            </div>
        </div>
        </Link>  
    )
}
export default Pro
