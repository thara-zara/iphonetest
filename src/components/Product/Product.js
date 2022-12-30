import React from 'react'
import "./Product.css"
import Pro from './ProPro';
import ProData from "./ProData";
import Watch from "./Watch";
import { Link } from 'react-router-dom';

const Product = () => {
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
    const Watchs =()=>{
        return(
            Watch.map((item,index) =>{
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
    <div className='product'>
        <h2>iPhones</h2>
        <div className='p-gal'>
            {Products()} 
        </div>
         <div className='watch'>
            <h2>Watch</h2>
        <div className='p-gal'>
            {Watchs()}
        </div>
        </div>
        
    </div>
  )
};

export default Product
