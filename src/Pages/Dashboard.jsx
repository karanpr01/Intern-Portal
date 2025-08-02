import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import RewardsSection from "../components/RewardsSection";
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  if (!user) return <div className="p-6">Loading dashboard...</div>;

  const rewards = [
    "Certificate",
    "Swags (T-shirt, Stickers)",
    "Top Leaderboard Badge"
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user.name} 👋</h1>
        <div className="space-y-4">
          <DashboardCard label="Referral Code" value={user.referralCode} />
          <DashboardCard label="Donations Raised" value={`₹${user.donationsRaised}`} />
          <RewardsSection rewards={rewards} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
