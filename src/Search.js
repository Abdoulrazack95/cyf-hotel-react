import React, { useState } from "react";
import Button from "./Button";

function Search(props) {
  const [seachInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(seachInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={seachInput}
                className="form-control"
                placeholder="Customer Id"
                onChange={handleChange}
              />
              <Button />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// class Search extends React.Component {
//   // setInputRef = (input) => {
//   //   this.input = input;
//   // };

//   // handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   this.props.search(this.input.value);
//   // };

//   render() {
//     return (
//       <div className="search">
//         <div className="page-header">
//           <h4 className="text-left">Search Bookings</h4>
//         </div>
//         <div className="row search-wrapper">
//           <div className="col">
//             <form
//               className="form-group search-box"
//               onSubmit={this.handleSubmit}
//             >
//               <label htmlFor="customerName">Customer name</label>
//               <div className="search-row">
//                 <input
//                   ref={this.setInputRef}
//                   type="text"
//                   id="customerName"
//                   className="form-control"
//                   placeholder="Customer Id"
//                 />
//                 <Button />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Search;
