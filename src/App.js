import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <div className="cardContainer">
          <TouristInfoCards
            cardDetails={{
              source:
                "https://dimg.visitscotland.com/wsimgs/visitscotland_26057864194_1356855539.jpg",
              link: "https://peoplemakeglasgow.com",
              paragraph:
                "Willing to visite monumental buildings? in Glasgow you will find every types of fun ",
              cityName: "Glassgow",
            }}
          />
          <TouristInfoCards
            cardDetails={{
              source:
                "https://upload.wikimedia.org/wikipedia/commons/6/69/Piccadilly-Gardens-Manchester-UK-1.JPG",
              paragraph:
                "Willing to visite monumental buildings? in Glasgow you will find every types of fun",
              cityName: "Manchester",
            }}
          />
          <TouristInfoCards
            cardDetails={{
              source:
                "https://www.cbronline.com/wp-content/uploads/2017/02/UK.jpg",
              link: "https://visitlondon.com",
              paragraph:
                "Willing to visite monumental buildings? in Glasgow you will find every types of fun ",
              cityName: "london",
            }}
          />
        </div>
        <Bookings />
        <Restaurant />
        <Footer
          array1={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789",
          ]}
          me="footer"
        />
      </div>
    );
  }
}

export default App;
