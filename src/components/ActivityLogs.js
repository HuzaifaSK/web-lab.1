import React from 'react';

function ActivityLogs({ logs }) {
  return (
    <div className="activity-logs-card">
      <h3>Recent Activity</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityLogs;
