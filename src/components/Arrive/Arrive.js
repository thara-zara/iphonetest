import React from 'react'
import "./Arrive.css";

function Arrive(props){
    return(
     
            <div className='new-card'>
                <div className={props.class}>
                    <div className='top'>
                        <img src={props.image} alt="img"/>
                    </div>
                    <div className="btm">
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        <h4>{props.price}</h4>
                    </div>
                </div>
            </div>
    
    )
}

export default Arrive
