import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { Card } from "@/components/ui/card";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setUsers(res.data);
      } catch (err) {
        console.error("❌ Error fetching leaderboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankEmoji = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `${index + 1}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading leaderboard...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 dark:text-gray-200">🏆 Leaderboard</h1>
        <Card className="overflow-x-auto shadow">
          <table className="min-w-full text-sm text-left text-gray-700 bg-yellow-200 dark:text-gray-200 ">
            <thead className="bg-blue-100 text-gray-700  dark:bg-gray-800 dark:text-gray-200 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Rank</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Referral Code</th>
                <th className="px-6 py-3">Donations Raised</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-black divide-y">
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 font-semibold">{getRankEmoji(index)}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.referralCode}</td>
                  <td className="px-6 py-4">
                    ₹
                    {typeof user.donationsRaised === "number"
                      ? user.donationsRaised.toLocaleString()
                      : Number(user.donationsRaised.replace(/[^\d]/g, "")).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </main>
    </div>
  );
};

export default Leaderboard;
