import React from "react";
import { useState } from "react";

const CreateList = ({ onAddTask }) => {
  const [task, setTask] = useState();
  return (
    <div className="inputWrapper">
      <input
        type="text"
        value={task}
              name="newTask"
              placeholder="new task"
        id="newTask"
        onChange={(ev) => {
          setTask(ev.target.value);
        }}
      />

      <button
        onClick={() => {
          onAddTask(task);
          setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default CreateList;
