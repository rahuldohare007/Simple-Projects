import { createContext, useContext } from "react";

const todoContext = createContext();

export default function TodoContext(props) {
  const todo = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];
  return (
    <todoContext.Provider value={todo}>{props.children}</todoContext.Provider>
  );
}

export const useTodo = () => {
  return useContext(todoContext);
};
