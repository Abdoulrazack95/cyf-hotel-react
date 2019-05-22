import React from 'react';

const TouristInfoCards = (props) =>{
    return  (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.source} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 className="card-title">{props.cityName}</h5>
                <p className="card-text">{props.paragraph}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default TouristInfoCards;