import React from 'react';


const RestaurantButton = (props) => {
 return  ( 
    <button className="btn btn-primary" onClick = {props.handleClick}>{props.name}</button>
    
    )
}




export default RestaurantButton;