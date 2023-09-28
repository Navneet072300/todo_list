import React, { useState } from "react";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <br />
            <button onClick={() => editTask(index, prompt("Edit task:", task))}>
              Edit
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {tasks.length > 0 && (
        <button className="clear-button" onClick={clearAllTasks}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
