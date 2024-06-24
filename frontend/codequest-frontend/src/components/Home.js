import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-8">CodeQuest: Space Exploration</h1>
      <Link to="/levels">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">Start Adventure</button>
      </Link>
    </div>
  );
}

export default Home;
