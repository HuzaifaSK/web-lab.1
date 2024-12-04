import React from 'react';

function Statistics({ stats }) {
  return (
    <div className="statistics-card">
      <h3>Statistics</h3>
      <p>Total Users: {stats.totalUsers}</p>
      <p>Active Users: {stats.activeUsers}</p>
      <p>New Signups: {stats.newSignups}</p>
      <div className="progress-bar">
        Active User Percentage: {stats.activePercentage}%
      </div>
    </div>
  );
}

export default Statistics;
