import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
    const user = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <h1 id="name">Name: {user.name}</h1>
      <h1 id="age">Age: {user.age}</h1>
    </div>
  );
}

export {UserProfile}