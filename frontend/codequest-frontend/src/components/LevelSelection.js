import React from 'react';
import { Link } from 'react-router-dom';

function LevelSelection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-6">Select a Level to Begin</h2>
      <ul className="space-y-4">
        <li><Link to="/level1" className="text-blue-400 hover:underline">1. The Engine Room (Variables)</Link></li>
        <li><Link to="/level2" className="text-blue-400 hover:underline">2. The Navigation System (Conditionals)</Link></li>
        <li>3. The Communication Hub (Locked)</li>
      </ul>
      <p className="mt-4">Progress: 1/7 Levels Completed</p>
    </div>
  );
}

export default LevelSelection;
