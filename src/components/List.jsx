import React from "react";

const List = ({ task, handleChange, handleDelete }) => {
  return (
    <div className="taskWrapper">
      <input
        type="checkbox"
        name={`${task.id}-completed`}
        id={`${task.id}-completed`}
        checked={task.completed}
        onChange={(e) => {
          handleChange({ ...task, completed: e.target.checked });
        }}
      />
      {task.title}
      <button onClick={(e) => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default List;
