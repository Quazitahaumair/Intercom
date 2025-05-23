import React from 'react';

const ProfileDrawer = ({ open, onClose }) => {
  const handleLogout = () => {
    // Add your logout logic here
    alert('Logged out!');
    onClose();
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Profile</h2>
          <button onClick={onClose} className="text-gray-500">✖</button>
        </div>
        <div className="p-4">
          <p className="font-semibold">Name:</p>
          <p>Quazi Taha</p>
          <p className="mt-4 font-semibold">Role:</p>
          <p>Admin</p>

          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDrawer;
