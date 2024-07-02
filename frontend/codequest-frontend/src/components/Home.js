import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <h1 className="text-6xl font-bold mb-8">CodeQuest: Space Exploration</h1>
      <Link to="/levels">
        <button className="start-button px-6 py-3">
          Start Adventure
        </button>
      </Link>
    </div>
  );
}

export default Home;
