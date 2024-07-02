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
    <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{ backgroundImage: 'url(engine-room.webp)' }}>
      <h2 className="text-3xl font-bold mb-4">The Engine Room (Variables)</h2>
      <div className="instructions">
        <p>Fix the engine by setting the correct variables.</p>
        <p>Task: Set <code>fuel_level</code> to 100, <code>engine_temp</code> to 350, and <code>power_output</code> to 75.</p>
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
          onClick={() => navigate('/levels')}
          className="level-button"
        >
          Back
        </button>
        <button
          onClick={() => navigate('/level2')}
          className={`level-button ${isCompleted ? '' : 'disabled'}`}
          disabled={!isCompleted}
        >
          Next
        </button>
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.classList.add('level-container');

  const background = document.createElement('div');
  background.classList.add('background');
  container.appendChild(background);

  const foreground = document.createElement('canvas');
  foreground.classList.add('foreground');
  container.appendChild(foreground);

  document.body.appendChild(container);

  // Chroma key effect using JavaScript
  const video = document.createElement('video');
  video.src = 'path-to-video.mp4';
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.style.display = 'none'; // Hide the video element
  document.body.appendChild(video);

  const ctx = foreground.getContext('2d');
  video.addEventListener('play', () => {
    foreground.width = video.videoWidth;
    foreground.height = video.videoHeight;

    function render() {
      ctx.drawImage(video, 0, 0, foreground.width, foreground.height);
      const frame = ctx.getImageData(0, 0, foreground.width, foreground.height);
      const data = frame.data;

      for (let i = 0; i < data.length; i += 4) {
        // Adjust this condition to match the chroma key color
        if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { // Green screen
          data[i + 3] = 0; // Set alpha to 0 (transparent)
        }
      }

      ctx.putImageData(frame, 0, 0);
      requestAnimationFrame(render);
    }

    render();
  });
});


export default Level1;
