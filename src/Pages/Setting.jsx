import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const Setting = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/prem2025");
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Mobile Sidebar Toggle */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden text-2xl"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 p-6 pt-20 md:pt-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">⚙️ Settings</h1>

        {!user ? (
          <p className="text-gray-500">Loading user info...</p>
        ) : (
          <Card className="max-w-xl">
            <CardHeader>
              <CardTitle>Intern Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <Input disabled value={user.name} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Referral Code</label>
                <Input disabled value={user.referralCode} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Total Donations</label>
                <Input disabled value={`₹${user.donationsRaised.toLocaleString()}`} />
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Setting;
