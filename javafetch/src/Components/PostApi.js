import { useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState({name:'',email:'',phone:''});
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/addUser',data)
        .then(response => {
            console.log("data added successfully",response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className="App">
           <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={data.email} onChange={handleChange} />

        <label>Phone:</label>
        <input type="text" name="phone" value={data.phone} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
 
    </div>
  );
}

export default App;
