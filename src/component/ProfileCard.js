import React from "react";
import '../style/ProfileCard.css';



// Destructuring props directly in the function parameter
const ProfileCard = ({ name, age, occupation, location }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default ProfileCard;