import React from 'react'
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import RewardsSection from "../components/RewardsSection";
import { dummyUser, rewards } from "../data";

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Welcome, {dummyUser.name} 👋</h1>
      <div className="space-y-4">
        <DashboardCard label="Referral Code" value={dummyUser.referralCode} />
        <DashboardCard label="Donations Raised" value={dummyUser.donationsRaised} />
        <RewardsSection rewards={rewards} />
      </div>
    </main>
  </div>
);

export default Dashboard;

