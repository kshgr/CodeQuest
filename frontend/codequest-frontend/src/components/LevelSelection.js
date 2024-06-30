import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LevelSelection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storedProgress = localStorage.getItem('progress');
    if (storedProgress) {
      setProgress(parseInt(storedProgress, 10));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <h2 className="text-4xl font-bold mb-6">Select a Level to Begin</h2>
      <ul className="space-y-4">
        <li>
          {progress >= 0 ? (
            <Link to="/level1" className="text-blue-400 hover:underline">1. The Engine Room (Variables)</Link>
          ) : (
            '1. The Engine Room (Locked)'
          )}
        </li>
        <li>
          {progress >= 1 ? (
            <Link to="/level2" className="text-blue-400 hover:underline">2. The Navigation System (Conditionals)</Link>
          ) : (
            '2. The Navigation System (Locked)'
          )}
        </li>
        <li>3. The Communication Hub (Locked)</li>
        {/* Add more levels as needed */}
      </ul>
      <p className="mt-4">Progress: {progress}/7 Levels Completed</p>
    </div>
  );
}

export default LevelSelection;
