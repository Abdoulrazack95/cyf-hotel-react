import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const intialCountOrder = 0;
  const [orders, setOrder] = useState(intialCountOrder);

  const addOrder = () => {
    setOrder((prestate) => prestate + 1);
  };

  const subOrder = () => {
    if (orders <= 0) {
      setOrder((prestate) => (prestate = 0));
    } else {
      setOrder((prestate) => prestate - 1);
    }
  };

  return (
    <li>
      {props.orderTypes}: {orders}
      <RestaurantButton handleClick={addOrder} name="Add Order now" />
      <RestaurantButton handleClick={subOrder} name="remove Order now" />
    </li>
  );
}

// class Order extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//           orders: 0
//         }
//         this.addOrder = this.addOrder.bind(this);
//         this.subOrder = this.subOrder.bind(this)
//       }

//       addOrder = () => {
//         this.setState({
//           orders: this.state.orders + 1
//         })
//       }
//       subOrder =  () => {
//         this.setState({
//           orders: this.state.orders - 1
//         })
//       }

//       render(){

//           return(
//           <li>
//              {this.props.orderTypes}:{" "}{this.state.orders}
//              <RestaurantButton handleClick={this.addOrder} name="Add Order now" />
//             <RestaurantButton handleClick={this.subOrder} name="remove Order now" />
//           </li>
//           )
//       }
// }

export default Order;
