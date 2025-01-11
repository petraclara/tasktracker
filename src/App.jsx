import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'



const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Write a report", priority: "High", status: "Pending" },
    { id: 2, title: "Read a book", priority: "Medium", status: "Completed" },
    { id: 3, title: "Update resume", priority: "Low", status: "Pending" },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task
      )
    );
  };

  const sortTasks = () => {
    fetch("tasks.py")
      .then((response) => response.json())
      .then((sortedTasks) => setTasks(sortedTasks))
      .catch((err) => console.error("Error sorting tasks:", err));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm onAdd={addTask} />
      <button onClick={sortTasks}>Sort Tasks</button>
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={markCompleted} />
    </div>
  );
};

export default App;


