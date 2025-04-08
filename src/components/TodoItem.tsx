import React from "react";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
