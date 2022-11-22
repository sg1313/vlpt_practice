import React, { useRef, useState, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는중");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  // useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됩니다.
  //그리고 이 값을 수정 할때에는 .current 값을 수정하면 되고 조회 할 때에는 .current 를 조회하면 됩니다.

  const onCreate = useCallback(() => {
    // 1장 18파트. useCallback을 사용하여 함수 재사용하기
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]); // 배열에 항목 추가하기 불변성 유지 1. spread 방법
    setUsers(users.concat(user)); // 배열에 항목 추가하기 불변성 유지 2. concat 함수 사용
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);
  // Memo 는 "memoized" 를 의미하는데, 이는, 이전에 계산 한 값을 재사용한다는 의미를 가지고 있습니다.

  return (
    <div className="App">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />;
      <div>활성 사용자 수 : {count} </div>
    </div>
  );
}

export default App;
