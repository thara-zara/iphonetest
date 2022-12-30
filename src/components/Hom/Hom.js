import React from 'react';
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import Side from '../Side/Side';
import "./Hom.css"
import mobile2 from "../../assests/iphone-14-pro-model.png";

const Home = () => {
  return (
    <>
    <div className='nav-bar'>
        <Nav/>
    </div>
    <div className='container'>
        <div className='search-bar'>
            <Search
            search_txt="GET MORE, PAY LESS"
            />
        </div>
        <div className='main'>
          <Side
          image={mobile2}
          />
          <Main/>
        </div>
    </div>
    </>
  )
}

export default Home