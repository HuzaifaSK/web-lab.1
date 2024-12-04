import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Statistics from './components/Statistics';
import Messages from './components/Messages';
import TaskTracker from './components/TaskTracker';
import ActivityLogs from './components/ActivityLogs';

function App() {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Administrator',
    profilePicture: 'https://i.pravatar.cc/150?img=32',
  };

  const stats = {
    totalUsers: 1000,
    activeUsers: 750,
    newSignups: 120,
    activePercentage: 75,
  };

  const messages = ['Welcome!', 'System update complete', 'Project deadline tomorrow'];

  const tasks = [
    { task: 'Finish React app', progress: 80 },
    { task: 'Debug code', progress: 50 },
    { task: 'Prepare report', progress: 30 },
  ];

  const activityLogs = ['Logged in at 10 AM', 'Started new project', 'Sent an email'];

  return (
    <div className="dashboard">
      <div className="user-info">
        <UserInfo user={user} />
      </div>
      <div className="statistics">
        <Statistics stats={stats} />
      </div>
      <div className="task-tracker">
        <TaskTracker tasks={tasks} />
      </div>
      <div className="activity-logs">
        <ActivityLogs logs={activityLogs} />
      </div>
      <div className="messages">
        <Messages messages={messages} />
      </div>
    </div>
  );
}

export default App;
