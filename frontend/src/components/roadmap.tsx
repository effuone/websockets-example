// components/RoadmapItem.tsx

import React from 'react';

type RoadmapProps = {
  title: string;
  details: string[];
};

const Roadmap: React.FC<RoadmapProps> = ({ title, details }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg max-w-sm w-full">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc list-inside space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-lg">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
