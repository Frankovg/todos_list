import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          props.completed && "Icon-check--active "
        }`}
        onClick={props.onComplete}
      >
        {!props.completed ? (
          <span class="material-symbols-outlined">radio_button_unchecked</span>
        ) : (
          <span class="material-symbols-outlined">radio_button_checked</span>
        )}
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <span class="material-symbols-outlined">delete</span>
      </span>
    </li>
  );
}

export { TodoItem };
