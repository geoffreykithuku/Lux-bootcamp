import React from "react";
import { useState } from "react";
import CreateList from "./CreateList";
import List from "./List";

let nextId = 4;
const initialTasks = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Revise React Hooks", completed: false },
  { id: 3, title: "Build a Todo APP", completed: false },
];
const DisplayList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  function handleCreateTask(task) {
    setTasks([
      {
        id: nextId++,
        title: task,
        completed: false,
      },
      ...tasks,
    ]);
  }

  let taskList = tasks.map((task) => {
    return (
      <List
        task={task}
        key={task.id}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    );
  });

  function handleChange(updatedTask) {
    setTasks(
      tasks.map((existingTask) => {
        if (existingTask.id === updatedTask.id) {
          return updatedTask;
        } else {
          return existingTask;
        }
      })
    );
  }

  function handleDelete(taskId) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== taskId;
      })
    );
  }
  return (
    <div>
      <h1 className="header">Task Manager</h1>
      <CreateList onAddTask={handleCreateTask} />
      {taskList}
    </div>
  );
};

export default DisplayList;
