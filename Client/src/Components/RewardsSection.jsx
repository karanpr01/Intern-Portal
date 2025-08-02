import React from 'react'

const RewardsSection = ({ rewards }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">Rewards</h3>
    <ul className="space-y-2">
      {rewards.map((reward, i) => (
        <li key={i} className="bg-green-50 p-3 rounded-lg">
          <strong>{reward.title}</strong>: {reward.description}
        </li>
      ))}
    </ul>
  </div>
);

export default RewardsSection;

