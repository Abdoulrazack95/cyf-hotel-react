import React from 'react';
import RestaurantButton from './RestaurantButton';


class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          orders: 0
        }
        this.addOrder = this.addOrder.bind(this);
        this.subOrder = this.subOrder.bind(this)
      }
      
      addOrder = () => {
        this.setState({
          orders: this.state.orders + 1
        })
      }
      subOrder =  () => {
        this.setState({
          orders: this.state.orders - 1
        })
      }

      render(){
        
          return(
            <li>
             {this.props.orderTypes}:{" "}{this.state.orders} <RestaurantButton handleClick={this.addOrder} name="Add Order now" />
        <RestaurantButton handleClick={this.subOrder} name="remove Order now" /> 
          </li>
          )
      }
}

export default Order;