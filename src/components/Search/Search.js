import React from 'react'
import "./Search.css"
import comment from "../../assests/envelope.svg";

const Search = (props) => {
  return (
    <div className='search'>
        <div className='s-left'>
            <h2>
                {props.search_txt}
            </h2>
        </div>
      <div className='s-right'>
      <i className='fas fa-magnifire'></i>
        <input type="text" placeholder='search product'/>
      </div>
    </div>
  )
}
export default Search
