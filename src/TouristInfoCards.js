import React from "react";

const TouristInfoCards = ({ cardDetails }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={cardDetails.source} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 className="card-title">{cardDetails.cityName}</h5>
        <p className="card-text">{cardDetails.paragraph}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
