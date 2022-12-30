import React from 'react'
import Big from '../Bigp/Big'
import Nav from '../Nav/Nav'
import Product from '../Product/Product'
import Search from '../Search/Search'
import Side from '../Side/Side'
import mobile2 from "../../assests/apple-iphone-14-3.jpg";

const Singlep = () => {
  return (
    <>
    <div className='nav-bar'>
        <Nav/>
    </div>
    <div className='container'>
        <div className='search-bar'>
            <Search 
            search_txt="iPhone 14"
            />
        </div>
        <div className='main'>
          <Side
           image={mobile2}
          />
          <Big/>
        </div>
    </div>
    </>
  )
}

export default Singlep
