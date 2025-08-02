import React from 'react'

const DashboardCard = ({ label, value }) => (
  <div className="bg-white p-4 rounded-xl shadow w-full">
    <h4 className="text-sm text-gray-500">{label}</h4>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default DashboardCard;

