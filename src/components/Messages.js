import React from 'react';

function Messages({ messages }) {
  return (
    <div className="messages-card">
      <h3>Messages</h3>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
