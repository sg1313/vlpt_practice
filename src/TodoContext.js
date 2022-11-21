import React, { createContext, useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 만들기",
    done: true,
  },
  {
    id: 2,
    text: "123123",
    done: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled actio type: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const todoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
