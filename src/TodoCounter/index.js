import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <>
      <div className="header">
        <h1>TODO's LIST</h1>
      </div>
      <h2 className="TodoCounter">
        You have finished {completedTodos} of {totalTodos} TODOs
      </h2>
    </>
  );
}

export { TodoCounter };
