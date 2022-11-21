import React, { useRef } from "react";
// import InputSample from "./InpuSample";
import UserList from "./UserList";
// import { createGlobalStyle } from "styled-components";
// import TodoTemplate from "./components/TodoTemplate";
// import TodoHead from "./components/TodoHead";
// import TodoList from "./components/TodoList";
// import TodoCreate from "./components/TodoCreate";

// const GlobalStyle = createGlobalStyle`
// body {
//   background :#e9ecef;
// }`;

function App() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  const nextId = useRef(4);
  // useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됩니다.
  //그리고 이 값을 수정 할때에는 .current 값을 수정하면 되고 조회 할 때에는 .current 를 조회하면 됩니다.

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    nextId.current += 1;
  };

  return (
    <div className="App">
      {/* <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate> */}
      {/* <InputSample /> */}
      <UserList users={users} />;
    </div>
  );
}

export default App;
