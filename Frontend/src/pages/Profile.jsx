import React from 'react';

const Profile = () => {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
  }

  const firstname = user?.fullname?.firstname || "Guest";

  return (
    
      <h1 className="text-6xl font-extrabold text-blue-400 animate-pulse">
        Heyyy, !!
      </h1>
    
  );
};

export default Profile;
