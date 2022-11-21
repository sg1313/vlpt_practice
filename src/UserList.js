import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
};

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
        // user= 는 User 컴포넌트의 user인자 , {user} 는 users 배열의 각 원소값
      ))}
    </div>
  );
};

export default UserList;
