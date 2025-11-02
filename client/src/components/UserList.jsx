// components/UserList.jsx
import React from 'react'

export default function UserList({ users, onSelectUser, currentUser }) {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 border-r border-gray-700">
      <h2 className="text-lg font-semibold mb-4">Online Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className={`cursor-pointer p-2 rounded ${
              user.username === currentUser ? 'bg-blue-700' : 'hover:bg-gray-800'
            }`}
            onClick={() => onSelectUser(user)}
          >
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
