import React, { useState, useEffect, useRef } from 'react';
import './MeditationTimer.css';
import bellSound from './bell.mp3';

function MeditationTimer() {
  const [duration, setDuration] = useState(5 * 60); // duration in seconds
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [addTime, setAddTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);

      if (timeLeft === 0) {
        setIsRunning(false);
        audioRef.current.play();
      }

      return () => clearInterval(intervalId);
    }
  }, [isRunning, timeLeft]);

  const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const minutes = new Date(timeLeft * 1000).toISOString().substr(14, 2);
  const seconds = new Date(timeLeft * 1000).toISOString().substr(17, 2);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setTimeLeft(duration);
  }

  function handleAddTime() {
    setShowModal(false);
    setDuration(prevDuration => prevDuration + addTime * 60);
    setTimeLeft(prevTimeLeft => prevTimeLeft + addTime * 60);
    setAddTime(0);
  }

  function handleCancel() {
    setShowModal(false);
    setAddTime(0);
  }

  return (
    <div className="timer-container">
      <div className="background"></div>
      <div className="timer">
        <h1>{`${hours}:${minutes}:${seconds}`}</h1>
        {isRunning ? (
          <button className="stop" onClick={handleStop}>Stop</button>
        ) : (
          <button className="start" onClick={handleStart}>Start</button>
        )}
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className="add-time" onClick={() => setShowModal(true)}>Add Time</button>
      </div>
      {showModal && (
        <div className="modal">
          <h2>Add Time</h2>
          <div className="input-container">
            <input type="number" min="1" max="60" value={addTime} onChange={(e) => setAddTime(Number(e.target.value))} />
            <span>Minutes</span>
          </div>
          <div className="button-container">
            <button className="add" onClick={handleAddTime}>Add</button>
            <button className="cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
      <audio ref={audioRef} src={bellSound} />
    </div>
  );
}

export default MeditationTimer;