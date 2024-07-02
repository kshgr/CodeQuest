import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Level4() {
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
        localStorage.setItem('progress', '4');
        setIsCompleted(true);
      }
    } catch (error) {
      console.error(error);
      setOutput('Error!');
      setFeedback('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{ backgroundImage: 'url(shield-control-room.webp)' }}>
      <h2 className="text-3xl font-bold mb-4">The Shield Control Room (Functions)</h2>
      <div className="instructions">
        <p>Use functions to manage the shield control system.</p>
        <p>Task: Write a function <code>activate_shield</code> that takes <code>energy_level</code> as an argument. If <code>energy_level</code> is greater than 50, return "Shield Activated". Otherwise, return "Insufficient Energy".</p>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full max-w-xl mb-4 p-2"
        rows="10"
      />
      <button onClick={handleSubmit} className="level-button">
        Submit
      </button>
      <div className="output mt-4">
        <p className="text-xl font-bold">Output: {output}</p>
        <p>Feedback: {feedback}</p>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => navigate('/level3')}
          className="level-button"
        >
          Back
        </button>
        <button
          onClick={() => navigate('/level5')}
          className={`level-button ${isCompleted ? '' : 'disabled'}`}
          disabled={!isCompleted}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Level4;
