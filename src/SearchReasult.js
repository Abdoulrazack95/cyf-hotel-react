import React from "react";


const SearchReasult = (props) => {
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mr</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>donkey@gmail.com</td>
      <td>402</td>
      <td>01-02-2018</td>
      <td>08-02-2018</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>donkey@gmail.com</td>
      <td>402</td>
      <td>01-02-2018</td>
      <td>08-02-2018</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>donkey@gmail.com</td>
      <td>402</td>
      <td>01-02-2018</td>
      <td>08-02-2018</td>
    </tr>
  </tbody>
</table>
    )
}

export default SearchReasult;