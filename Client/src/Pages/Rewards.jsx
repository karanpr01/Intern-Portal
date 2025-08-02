import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        // For now, we use a mocked list:
        const res = await axios.get("http://localhost:5000/api/rewards");
        setRewards(res.data);
      } catch (err) {
        console.error("Error fetching rewards", err);
        setRewards([]); // fallback to empty
      } finally {
        setLoading(false);
      }
    };
    fetchRewards();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 relative dark:bg-gray-800">
      {/* Hamburger for small screen */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden text-2xl"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      <main className="flex-1 p-6 pt-20 md:pt-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">🎁 All Rewards</h1>

        {loading ? (
          <p className="text-gray-500">Loading rewards...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewards.length > 0 ? (
              rewards.map((reward, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl dark:text-gray-800">
                      <span>{reward.emoji}</span> {reward.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-800">
                    {reward.description}
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500">No rewards found.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Rewards;
