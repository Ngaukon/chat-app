// components/MessageList.jsx
import React from 'react';
import dayjs from 'dayjs';

export default function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-850 p-4 space-y-2">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-2 rounded ${
            msg.system ? 'bg-gray-700 italic text-gray-300' : 'bg-gray-700'
          }`}
        >
          {!msg.system && (
            <strong className="text-blue-300">{msg.sender || 'Anonymous'}: </strong>
          )}
          {msg.message}
          <div className="text-xs text-gray-400">
            {dayjs(msg.timestamp).format('HH:mm:ss')}
          </div>
        </div>
      ))}
    </div>
  );
}