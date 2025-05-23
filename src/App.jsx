import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import ProfileDrawer from './components/ProfileDrawer';

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Close drawer on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsProfileOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-1">
          <ChatList />
          <ChatWindow />
        </div>
        {/* Button to open Profile Drawer */}
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setIsProfileOpen(true)}
        >
          Open Profile
        </button>
      </div>

      <ProfileDrawer open={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </div>
  );
}

export default App;
