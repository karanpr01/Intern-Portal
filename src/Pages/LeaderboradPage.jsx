import React from 'react'

import Sidebar from "../components/Sidebar";
import Leaderboard from "../components/Leaderboard";
import { leaderboard } from "../data";

const LeaderboardPage = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      <Leaderboard data={leaderboard} />
    </main>
  </div>
);

export default LeaderboardPage;
