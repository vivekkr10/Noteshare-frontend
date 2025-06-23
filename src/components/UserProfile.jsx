import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/UserProfile.css'
const BASE_URL = process.env.REACT_APP_API_URL;

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/user/user/${id}`);
        setUser(res.data);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.error || 'Error fetching user');
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return <div className="text-red-600 p-4 text-center">{error}</div>;
  }

  if (!user) {
    return <div className="text-gray-600 p-4 text-center">Loading user data...</div>;
  }

  return (
    <div className="user-profile-card">
  <h2 className="profile-title">User Profile</h2>
  <div className="profile-info">
    <div><strong>Name:</strong> {user.name}</div>
    <div><strong>Email:</strong> {user.email}</div>
    {user.phone && <div><strong>Phone:</strong> {user.phone}</div>}
    <div><strong>Username:</strong> {user.username}</div>
    <div><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</div>
  </div>
</div>

  );
};

export default UserProfile;
