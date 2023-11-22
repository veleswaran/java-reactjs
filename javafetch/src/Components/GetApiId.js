import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function GetUser({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/User/${userId}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="App">
      <h1>User Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}
