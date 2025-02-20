import React from 'react';
import './usercard.css';

const UserCard = () => {
  // Static user data
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "John Doe";
  const email = "john.doe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, New York, NY 10001";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <div className="user-details">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

export default UserCard;
