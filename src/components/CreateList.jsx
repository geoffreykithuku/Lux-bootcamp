import React from 'react'
import { useState , useReducer} from 'react'

function CreateList({setTaskList}) {
    const [taskTitle, setTaskTitle] = useState(' ')
    
    const handleInput = (e)=>{
        setTaskTitle(e.target.value)

    }
    const handleCreateTask =(e)=>{
        let id = Math.ceil(Math.random() * 100000000);
        const newTask = {
            title:taskTitle,
            id:id
            
        
        }
        setTaskList(prev => [newTask,...prev] )
    }
  return (
    <div>
        <div className="inputWrapper">
            <input type='text' name= 'list' placeholder= 'Create Task' onChange={handleInput}/>
            <button type='button' onClick={handleCreateTask}>Submit</button>
        </div>
    </div>
  )
}

export default CreateList