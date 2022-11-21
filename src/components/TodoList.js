import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem done={true} text="프로젝트 만들기"></TodoItem>
      <TodoItem done={false} text="324234234"></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
