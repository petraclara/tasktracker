import React from 'react';

const TaskList = ({ tasks, onDelete, onComplete }) => {
    return (
      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.status.toLowerCase()}`}
          >
            <h3>{task.title}</h3>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => onComplete(task.id)}>Mark Completed</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default TaskList;