import React from "react";

import Order from './Order.js';

class Restaurant extends React.Component{
  render(){
    
    return(
      <div>
        <h3>Restaurant Orders</h3> 
        <ul>
          <Order orderTypes = "Pizza"/>
          <Order orderTypes = "Salad"/>
          <Order orderTypes = "Sweets"/>
          <Order orderTypes = "Drinks"/>
        </ul>
      </div>
    )
  }
}
// const Restaurant = () => {
//   const pizzas = 0;
//   return (
//     <div>
//       <h3>Restaurant Orders</h3>
//       <ul>
//         <li>
//           Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default Restaurant;
