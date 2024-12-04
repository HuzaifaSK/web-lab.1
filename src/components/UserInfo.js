import React from 'react';

function UserInfo({ user }) {
  return (
    <div className="user-info-card">
      <img src={user.profilePicture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <span>{user.role}</span>
    </div>
  );
}

export default UserInfo;
