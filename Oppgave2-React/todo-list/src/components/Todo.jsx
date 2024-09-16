import React, { useState } from 'react';
import './CSS/Todo.css'

const initialTasks = [
  { title: 'Clean Room', compleated: false, id: 1 },
  { title: 'Wash Clothes', compleated: false, id: 2 },
  { title: 'Study', compleated: false, id: 3 },
];

function AddTask({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default function ToDo() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (newTaskTitle) => {
    const newTask = {
      title: newTaskTitle,
      compleated: false,
      id: tasks.length + 1,
    };
    setTasks([...tasks, newTask]);
  };

  const removeCompletedTasks = (id) => {
   
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleTaskChange = (id) => {
    const task = tasks.find(task => task.id === id);
    if (task && task.compleated === false) {
      
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, compleated: true } : task
      ));
    } else {
      
      removeCompletedTasks(id);
    }
  };

  const listItems = tasks.map(task => (
    <li key={task.id}>
      <label>
        <input
          type="checkbox"
          checked={task.compleated}
          onChange={() => handleTaskChange(task.id)}
        />
        {task.title}
      </label>
    </li>
  ));

  return (
    <>
      <h1>Todo List:</h1>
      <AddTask onAddTask={handleAddTask} />
      <ul>{listItems}</ul>
    </>
  );
}
