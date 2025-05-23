import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      {/* Toggle Button - Only visible on mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 p-2 rounded text-white"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:h-auto md:flex md:flex-col transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="p-4 flex flex-col space-y-4">
          <a href="#" className="hover:text-blue-400">Dashboard</a>
          <a href="#" className="hover:text-blue-400">Messages</a>
          <a href="#" className="hover:text-blue-400">Users</a>
          <a href="#" className="hover:text-blue-400">Settings</a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
