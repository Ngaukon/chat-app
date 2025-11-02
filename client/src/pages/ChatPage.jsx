// pages/ChatPage.jsx
import React, { useState } from 'react';
import { useSocket } from '../socket/socket';
import ChatBox from '../components/ChatBox';
import MessageList from '../components/MessageList';
import UserList from '../components/UserList';
import TypingIndicator from '../components/TypingIndicator';

export default function ChatPage() {
  const {
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    sendMessage,
    setTyping,
  } = useSocket();

  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (username.trim()) {
      connect(username);
      setJoined(true);
    }
  };

  if (!joined) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-4">Join the Chat</h1>
        <input
          className="p-2 rounded text-black"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="mt-3 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleJoin}
        >
          Join
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center p-4 bg-gray-800 border-b border-gray-700">
          <h2 className="text-lg font-bold">
            Connected as: <span className="text-green-400">{username}</span>
          </h2>
          <p>{isConnected ? '🟢 Online' : '🔴 Offline'}</p>
        </div>

        <MessageList messages={messages} />
        <TypingIndicator typingUsers={typingUsers} />
        <ChatBox sendMessage={sendMessage} setTyping={setTyping} />
      </div>

      <UserList users={users} />
    </div>
  );
}