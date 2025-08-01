import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-100 p-4">
    <h2 className="text-2xl font-bold mb-6">Intern Portal</h2>
    <ul className="space-y-4 text-lg">
      <li><Link to="/dashboard">Overview</Link></li>
      <li><Link to="/leaderboard">Leaderboard</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/">Logout</Link></li>
    </ul>
  </div>
);

export default Sidebar;

