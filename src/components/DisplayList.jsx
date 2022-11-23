import React from "react";
import { useReducer } from "react";
import CreateList from "./CreateList";
import List from "./List";

let nextId = 4;
const initialTasks = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Revise React Hooks", completed: false },
  { id: 3, title: "Build a Todo APP", completed: false },
];

function reducer(tasks, action) {
  const { type } = action;
  switch (type) {
    case "add":
      const { id, title } = action;
      return [{ id, title, completed: false }, ...tasks];
    case "change":
      const updatedTask = action.task;
      return tasks.map((existingTask) => {
        if (existingTask.id === updatedTask.id) {
          return updatedTask;
        } else {
          return existingTask;
        }
      });
    case "remove":
      const taskId = action.id;
      return tasks.filter((task) => {
        return task.id !== taskId;
      });
    default:
      return "No tasks";
  }
}
const DisplayList = () => {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  function handleCreateTask(task) {
    dispatch({
      type: "add",
      id: nextId++,
      title: task,
    });

    // setTasks([
    //   {
    //     id: nextId++,
    //     title: task,
    //     completed: false,
    //   },
    //   ...tasks,
    // ]);
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
    dispatch({
      type: "change",
      task: updatedTask,
    });

    // setTasks(
    //   tasks.map((existingTask) => {
    //     if (existingTask.id === updatedTask.id) {
    //       return updatedTask;
    //     } else {
    //       return existingTask;
    //     }
    //   })
    // );
  }

  function handleDelete(taskId) {
    dispatch({
      type: "remove",
      id: taskId,
    });
    // setTasks(
    //   tasks.filter((task) => {
    //     return task.id !== taskId;
    //   })
    // );
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
