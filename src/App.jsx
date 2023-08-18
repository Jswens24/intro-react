import './App.css'
import React, { useState } from 'react'
import List from './List';


function App() {
  const [tasks, setTasks] = useState(['walk dogs', 'eat food', 'sleep']);
  const [input, setInput] = useState();

  console.log(input);

  const addTask = () => {
    setTasks(...tasks, input)
  }

  return (
    <>
      <h1>Todo List</h1>
      <input onChange={e => setInput(e.target.value)} type="text" />
      <button onClick={addTask}>Add Task</button>
      <List tasks={tasks} />
    </>
  )
}

export default App
