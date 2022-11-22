import { useEffect } from "react";
import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  // useEffect(() => {
  //   console.log("user 값이 설정됨"); // 1장 16파트 부분..
  //   console.log(user);
  //   return () => {
  //     console.log("user 가 바뀌기 전..");
  //     console.log(user);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(user);  // deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출이 됩니다.
  // });

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        // user= 는 User 컴포넌트의 user인자 , {user} 는 users 배열의 각 원소값
      ))}
    </div>
  );
};

export default UserList;
