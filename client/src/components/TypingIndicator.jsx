// components/TypingIndicator.jsx
import React from 'react';

export default function TypingIndicator({ typingUsers }) {
  if (!typingUsers.length) return null;

  return (
    <div className="p-2 text-gray-400 italic">
      {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
    </div>
  );
}