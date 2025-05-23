import React, { useState, useEffect } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Hi, I need help!' },
    { sender: 'agent', text: 'Sure! What do you need help with?' },
  ]);
  const [input, setInput] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('You can reset your password from settings.');
  const [simulateReply, setSimulateReply] = useState(null);
  const [aiBotEnabled, setAiBotEnabled] = useState(true);

  const keywordReplies = {
    password: 'You can reset your password from your profile settings.',
    help: 'I am here to help. Can you please elaborate?',
    account: 'You can update your account info from the settings page.',
    login: 'Try logging out and logging back in again.',
  };

  const getAIReply = (message) => {
    const lower = message.toLowerCase();
    for (let keyword in keywordReplies) {
      if (lower.includes(keyword)) {
        return keywordReplies[keyword];
      }
    }
    return "I'm here to assist you with anything you need.";
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { sender: 'agent', text: input };
      setMessages(prev => [...prev, newMessage]);
      setInput('');

      // Simulate user reply
      setSimulateReply(setTimeout(() => {
        const userMsg = 'Thanks, I was asking about ' + input.split(" ")[0].toLowerCase();
        setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
      }, 2000));
    }
  };

  useEffect(() => {
    // AI bot responds to the last user message if enabled
    if (aiBotEnabled && messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.sender === 'user') {
        const reply = getAIReply(lastMsg.text);
        const replyTimeout = setTimeout(() => {
          setMessages(prev => [...prev, { sender: 'agent', text: reply }]);
        }, 1500);
        return () => clearTimeout(replyTimeout);
      }
    }
  }, [messages, aiBotEnabled]);

  const handleSuggestionClick = () => {
    setInput(aiSuggestion);
  };

  return (
    <div className="flex-1 bg-gray-800 p-4 flex flex-col">
      <div className="flex justify-between mb-2 items-center">
        <span className="text-white font-medium">Chat</span>
        <label className="flex items-center space-x-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={aiBotEnabled}
            onChange={() => setAiBotEnabled(!aiBotEnabled)}
            className="form-checkbox"
          />
          <span>AI Bot</span>
        </label>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded max-w-xs ${msg.sender === 'agent' ? 'bg-blue-600 self-end' : 'bg-gray-700 self-start'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={handleSuggestionClick}
          className="mb-2 text-sm text-blue-300 hover:underline"
        >
          Suggestion: {aiSuggestion}
        </button>
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-1 p-2 rounded bg-gray-700 text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
