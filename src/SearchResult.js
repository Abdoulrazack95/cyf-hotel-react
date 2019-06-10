import React from "react";
import moment from "moment"

const SearchResult = (props) => {
    const tableInfo = props.results;
    const tableMe =  tableInfo.map((item)  => 
     <tr>
    <th scope="row">{item.id}</th>
    <td>{item.title}</td>
    <td>{item.firstName}</td>
    <td>{item.surname}</td>
    <td>{item.email}</td>
    <td>{item.roomId}</td>
    <td>{item.checkInDate}</td>
    <td>{item.checkOutDate}</td>
    <td>{moment(item.checkOutDate).diff(item.checkInDate, 'days')}</td>
  </tr>)
   
    
    return(
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">First name</th>
      <th scope="col">surname</th>
      <th scope="col">Email</th>
      <th scope="col">room id</th>
      <th scope="col">check in date</th>
      <th scope="col">check out date</th>
      <th scope="col">Night of Stay</th>
    </tr>
  </thead>
  <tbody>
    {tableMe}
  </tbody>
</table>
    )
}

export default SearchResult;