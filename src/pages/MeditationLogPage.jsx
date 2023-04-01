import React, { useState } from 'react';
import './MeditationLogPage.css';

function MeditationLog() {
  const [meditations, setMeditations] = useState([]);
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newMeditation = { title, duration, date };
    setMeditations([...meditations, newMeditation]);
    setTitle('');
    setDuration('');
    setDate('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="duration">Duration (minutes):</label>
          <input type="number" id="duration" value={duration} onChange={handleDurationChange} />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={handleDateChange} />
        </div>
        <button type="submit">Add Meditation</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration (minutes)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {meditations.map((meditation, index) => (
            <tr key={index}>
              <td>{meditation.title}</td>
              <td>{meditation.duration}</td>
              <td>{meditation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MeditationLog;