import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResult from "./SearchResult.js";
import FakeBookings from "./data/fakeBookings.json";

function Bookings() {
  const [fakeBookings, setFakeBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setFakeBooking(data);
      });
  }, []);
  console.log(fakeBookings);

  let search = (searchVal) => {
    let infoarray = fakeBookings.filter(
      (x) =>
        x.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        x.surname.toLowerCase().includes(searchVal.toLowerCase())
    );

    setFakeBooking(infoarray);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!isLoading ? (
          <SearchResult results={fakeBookings} />
        ) : (
          <p>Loading... Please wait</p>
        )}
      </div>
    </div>
  );
}

export default Bookings;

// export default class Bookings extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fakeBookings: null,
//     };
//   }

//   componentDidMount() {
//     fetch(`https://cyf-react.glitch.me/delayed`)
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({
//           fakeBookings: data,
//         });
//       });
//   }

//   search = (searchVal) => {
//     let infoarray = this.state.fakeBookings.filter(
//       (x) =>
//         x.firstName.toLowerCase() === searchVal.toLowerCase() ||
//         x.surname.toLowerCase() === searchVal.toLowerCase()
//     );
//     if (infoarray.length === 0) {
//       this.setState({
//         fakeBookings: this.state.fakeBookings,
//       });
//     } else {
//       this.setState({
//         fakeBookings: infoarray,
//       });
//     }
//   };
//   render() {
//     return (
//       <div className="App-content">
//         <div className="container">
//           <Search search={this.search} />
//           {this.state.fakeBookings ? (
//             <SearchResult results={this.state.fakeBookings} />
//           ) : (
//             <h1>
//               <i class="fas fa-spinner fa-3x">looding...</i>
//             </h1>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
