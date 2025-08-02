import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LeaderboardPage from "./Pages/LeaderboradPage";
import Setting from './Pages/Setting';
import Rewards from './Pages/Rewards';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/rewards" element={<Rewards/>} />
      <Route path="/leaderborad" element={<LeaderboardPage />} />
      <Route path="/settings" element={<Setting/>} />
    
    </Routes>
  </BrowserRouter>
);

export default App;

