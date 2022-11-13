import { useState } from "react";
import CreateList from "./components/CreateList";
import DisplayList from "./components/DisplayList";
import './App.css'


function App() {

  const [taskList, setTaskList] = useState([{title: 'Task 1', id:'2'}])

  function handleDelete(id){
  let remTasks = taskList.filter(task=> task.id !== id)
  setTaskList(remTasks)

  }
  return (
    <div className="App">
      <CreateList setTaskList= {setTaskList}/>
      <DisplayList list ={taskList} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
