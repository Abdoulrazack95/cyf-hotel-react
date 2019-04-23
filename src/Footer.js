import React from 'react';

const Footer = (props) => {
    const arrayInfo = props.array1;
    const array =  arrayInfo.map((item, index) =>  <li key = {index} >{item}</li> )
    return(
        <ul className = {props.me}>
           
           {array}
            
        </ul>

    )
}



export default Footer;