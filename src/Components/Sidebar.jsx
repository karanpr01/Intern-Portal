import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-white shadow-lg z-50 w-64 
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        md:translate-x-0 md:static md:block
      `}
    >
      <div className="p-6 space-y-4 h-screen">
        <h2 className="text-2xl font-bold text-blue-600">Intern Portal</h2>
        <nav className="space-y-2">
          <Link to="/dashboard" className="block text-gray-700 hover:text-blue-500">
            📊 Overview
          </Link>
           <Link to="/leaderborad" className="block text-gray-700 hover:text-blue-500">
            🔥 LeaderBoard
          </Link>
          <Link to="/rewards" className="block text-gray-700 hover:text-blue-500">
            🎁 Rewards
          </Link>
          <Link to="/settings" className="block text-gray-700 hover:text-blue-500">
            ⚙️ Settings
          </Link>
          <Link to="/" className="block text-red-500 font-semibold hover:underline">
            🚪 Logout
          </Link>
        </nav>
      </div>

      {/* Close Button for mobile */}
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 md:hidden text-gray-500 hover:text-black"
      >
        ❌
      </button>
    </aside>
  );
};

export default Sidebar;
