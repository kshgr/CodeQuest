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
    <div className="container min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white">
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
        <li>
          {progress >= 2 ? (
            <Link to="/level3" className="text-blue-400 hover:underline">3. The Communication Hub (Loops)</Link>
          ) : (
            '3. The Communication Hub (Locked)'
          )}
        </li>
        <li>
          {progress >= 3 ? (
            <Link to="/level4" className="text-blue-400 hover:underline">4. The Shield Control Room (Functions)</Link>
          ) : (
            '4. The Shield Control Room (Locked)'
          )}
        </li>
        <li>
          {progress >= 4 ? (
            <Link to="/level5" className="text-blue-400 hover:underline">5. The Cargo Bay (Arrays)</Link>
          ) : (
            '5. The Cargo Bay (Locked)'
          )}
        </li>
        <li>
          {progress >= 5 ? (
            <Link to="/level6" className="text-blue-400 hover:underline">6. The Shield Control Room (Functions)</Link>
          ) : (
            '6. The Shield Control Room (Locked)'
          )}
        </li>
        <li>
          {progress >= 6 ? (
            <Link to="/level7" className="text-blue-400 hover:underline">7. The Observation Deck (Recursion)</Link>
          ) : (
            '7. The Observation Deck (Locked)'
          )}
        </li>
        {/* Add more levels as needed */}
      </ul>
      <p className="mt-4">Progress: {progress}/7 Levels Completed</p>
      <div className="mt-4 flex space-x-4">
        <Link to="/">
          <button className="level-button">Back to Main Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default LevelSelection;
