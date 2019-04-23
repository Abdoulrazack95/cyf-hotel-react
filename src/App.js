import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from './TouristInfoCards';
import Footer from './Footer';
class App extends Component {
  render() { 
    return (
      <div className="App">
        <Heading />
        <div className = 'imagesContainer'>
          <TouristInfoCards link ="https://peoplemakeglasgow.com" cityName = 'Glassgow'/>
          <TouristInfoCards link ="https://visitmanchester.com" cityName = 'Manchester'/>
          <TouristInfoCards link ="https://visitlondon.com" cityName = 'london'/>
        </div>
        <Bookings />
        <Restaurant />
        <Footer array1={["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]}me = 'footer'/>
      </div>
    );
  }
}

export default App;
