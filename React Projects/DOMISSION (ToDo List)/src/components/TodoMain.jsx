import TaskInput from "./TaskInput";
import TaskDisplay from "./TaskDisplay";
import { useTodo } from "../context/TodoContext";
import { useReducer } from "react";
import { todoReducer } from "../reducers/TodoReducer";

function TodoMain() {
  const data = useTodo();
  const [tasks, dispatch] = useReducer(todoReducer, data);
  return (
    <>
      <TaskInput dispatch={dispatch} />
      <TaskDisplay tasks={tasks} dispatch={dispatch} />
    </>
  );
}

export default TodoMain;
