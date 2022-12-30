import React from 'react'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import Side from '../Side/Side'
import mobile2 from "../../assests/0.jpg";
import hero from "../../assests/nike.png";
import Hero from '../Hero/Hero';
import "./ProductCategory.css"

import Pro from '../Product/ProPro';
import ProData from "../Product/ProData";

const ProductCategory = () => {

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
    <div>
        <div className='nav-bar'>
        <Nav/>
    </div>
    <div className='container'>
        <div className='search-bar'>
            <Search
            search_txt="iPhones"
            />
        </div>
        <div className='main'>
          <Side
          image={mobile2}
          />
          <div className='cat'>
            <div className='cat-top'>
            <Hero
              img1={hero}
              img2={hero}
              img3={hero}
              img4={hero}
            />
            </div>
            <div className='all-producct'>
                {Products()}
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ProductCategory