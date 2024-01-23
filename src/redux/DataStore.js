import React from 'react';

const DataStore = () => {
  const user = {
    name: "example_username",
    email: "example@email.com",
    password: "example_password"
  };

  return (
    <div>
      {/* You can use the user data in your component as needed */}
      <p>Username: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default DataStore;
