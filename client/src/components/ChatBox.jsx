// components/ChatBox.jsx
import React, { useState, useEffect } from 'react';

export default function ChatBox({ sendMessage, setTyping }) {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage({ text: message });
      setMessage('');
      setTyping(false);
    }
  };

  // Typing indicator
  useEffect(() => {
    if (message.trim()) {
      setTyping(true);
    } else {
      setTyping(false);
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSend}
      className="p-4 bg-gray-800 flex border-t border-gray-700"
    >
      <input
        className="flex-1 p-2 rounded-l text-black"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 rounded-r hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}