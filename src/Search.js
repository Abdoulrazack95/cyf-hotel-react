import React from "react";
import Button from "./Button";

class Search extends React.Component{
  setInputRef = input => {
    this.input = input;
  }
  
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.search(this.input.value)
    
  }


  render(){
    return(
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form className="form-group search-box" onSubmit ={this.handleSubmit}>
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                 ref = {this.setInputRef}
                 type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                  
                />
                <Button />
              </div>
            </form>
            <form onSubmit ={this.addMe}>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Sirname"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Title"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="roomID"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="check in date"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="check out date"/>
  </div>
        <button type="button" id= "submitMe" className = "btn btn-primary">Submit</button>
</form>
          </div>
        </div>
      </div>
    )
  }
}



export default Search;
