import React, { useState } from 'react';
import axios from 'axios';

function Level2() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://codequest-74hq.onrender.com/evaluate', { code });
      setOutput(response.data.output);
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error(error);
      setOutput('Error!');
      setFeedback('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-4">The Navigation System (Conditionals)</h2>
      <div className="instructions bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <p>Use conditionals to make decisions based on different conditions.</p>
        <p>Task: Write a function <code>set_direction</code> that takes <code>fuel_level</code> and <code>engine_temp</code> as arguments. If <code>fuel_level</code> is greater than 50 and <code>engine_temp</code> is less than 200, set the direction to "Forward". Otherwise, set the direction to "Stay".</p>
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
    </div>
  );
}

export default Level2;
