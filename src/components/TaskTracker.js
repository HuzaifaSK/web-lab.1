import React from 'react';

function TaskTracker({ tasks }) {
  return (
    <div className="task-tracker-card">
      <h3>Task Tracker</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.task}</span>
            <div className="progress-bar" style={{ width: `${task.progress}%` }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTracker;
