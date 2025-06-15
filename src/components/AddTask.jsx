import React, {useState} from 'react';
import axios from 'axios';


const TaskForm = () => {

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    let res = await axios.post(`http://localhost:3000/tasks`, {
        Name,
        Description
        });
        setName("")
        setDescription("")
        alert("Task added successfully");
  }  catch(err){
    alert(`Task not added`);
  }
}

  return (
    <>
    <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="name">Task Name</label>
            <input type="text" name='Name' value={Name} onChange={(e) => setName(e.target.value)} placeholder='Enter task name' />
            <label htmlFor="description">Description</label>
            <textarea name="Description" value={Description} onChange={(e) => setDescription(e.target.value)} rows="10" placeholder='Enter task description'></textarea>
            <div className="buttons">
            <button type='submit' onClick={handleSubmit}>Add Task</button>
            </div>
            
        </form>
    </div>
    </>
  )
}

export default TaskForm;