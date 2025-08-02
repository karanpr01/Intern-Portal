import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ Toggle logic

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/prem2025");
        setUser(res.data);
      } catch (err) {
        console.error("❌ Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading user data...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">User not found or error occurred.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Hamburger Menu for mobile */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden text-2xl"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      {/* Main content */}
      <main className={`
    flex-1 p-6 space-y-6 
    ${sidebarOpen ? "pt-20" : "pt-16"} 
     md:pt-6
  `}>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, <span className="text-blue-600">{user?.name}</span> 👋
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Referral Code</CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-semibold text-blue-700">
              {user.referralCode}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Donations Raised</CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-semibold text-green-700">
              ₹{user.donationsRaised.toLocaleString()}
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">🎁 Rewards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {user.rewards?.length > 0 ? (
              user.rewards.map((reward, index) => (
                <Card key={index} className="border shadow-sm bg-green-50">
                  <CardContent className="p-4 font-medium text-green-900">
                    <div className="text-xl">
                      <span className="text-2xl">{reward.emoji}</span> {reward.title}
                      <p className="text-sm text-gray-600">{reward.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500">No rewards yet.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
