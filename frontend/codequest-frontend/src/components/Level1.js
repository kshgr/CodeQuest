import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Level1() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://codequest-74hq.onrender.com/evaluate', { code });
      setOutput(response.data.output);
      setFeedback(response.data.feedback);

      if (response.data.output === 'Success!') {
        localStorage.setItem('progress', '1');
        setIsCompleted(true);
      }
    } catch (error) {
      console.error(error);
      setOutput('Error!');
      setFeedback('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-4">The Engine Room (Variables)</h2>
      <div className="instructions bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <p>Fix the engine by setting the correct variables.</p>
        <p>Task: Set fuel_level to 100, engine_temp to 350, and power_output to 75.</p>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here"
        className="w-full max-w-xl p-2 mb-4 bg-gray-900 border border-gray-700 rounded-lg"
      ></textarea>
      <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-700 transition">
        Submit
      </button>
      <div className="output mt-4">
        <p className="text-xl font-bold">Output: {output}</p>
        <p>Feedback: {feedback}</p>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => navigate('/levels')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Back
        </button>
        <button
          onClick={() => navigate('/level2')}
          className={`px-4 py-2 text-white rounded-lg shadow-lg transition ${isCompleted ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-500 cursor-not-allowed'}`}
          disabled={!isCompleted}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Level1;
