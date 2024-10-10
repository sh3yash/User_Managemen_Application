import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserDetailPage.css'; // UserDetailPage-specific styles

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(response.data);
    };
    fetchUser();
  }, [id]);

  return (
    <div className="user-detail-container">
      {user ? (
        <div className="user-detail-card">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetailPage;
