
import { useEffect, useState } from "react";
import axios from 'axios';

export default function GetApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/Users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              </tr>
            );
        })}
        </tbody>
      </table>
    </div>
  );
}

