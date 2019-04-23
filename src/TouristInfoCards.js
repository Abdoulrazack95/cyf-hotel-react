import React from 'react';

const TouristInfoCards = (props) =>{
    return  (
        <div>
            <div className="card" style={{width: '18 rem'}}>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{props.cityName}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href= {props.link} className="btn btn-primary" target = '_blank'>Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default TouristInfoCards;