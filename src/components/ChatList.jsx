import React from 'react';

const ChatList = () => {
  const chats = [
    { id: 1, name: "Quazi", lastMessage: "Hi, I need help!" },
    { id: 2, name: "Taha", lastMessage: "Can I reschedule?" },
    { id: 3, name: "Umair", lastMessage: "How do I reset password?" },
  ];

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-700 p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Chats</h2>
      {chats.map(chat => (
        <div key={chat.id} className="mb-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <div className="font-semibold">{chat.name}</div>
          <div className="text-sm text-gray-400">{chat.lastMessage}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
