import './App.css'
import React, { useState } from 'react'
import List from './List';


function App() {
  const [tasks, setTasks] = useState(['walk dogs', 'eat food', 'sleep']);
  const [input, setInput] = useState();

  const deleteTask = (index) => {
    setTasks(currentTasks => {
      const newTasks = [...currentTasks]
      newTasks.splice(index, 1)
      return newTasks
    })
  }

  const addTask = () => {
    setTasks(currentTasks => {
      return [...tasks, input]
    })
  }

  return (
    <>
      <h1>Todo List</h1>
      <input onChange={e => setInput(e.target.value)} type="text" />
      <button onClick={addTask}>Add Task</button>
      <List tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App
