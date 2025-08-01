import React from 'react'

const Leaderboard = ({ data }) => (
  <div className="mt-6">
    <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
    <table className="w-full bg-white shadow rounded-xl overflow-hidden">
      <thead className="bg-gray-200 text-left">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Referral Code</th>
          <th className="p-3">Donations</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index} className="border-t">
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.code}</td>
            <td className="p-3">{user.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Leaderboard;
