import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Test.css"


const moodValues = {
  "😊 Happy": 5,
  "😌 Calm": 4,
  "😨 Anxious": 3,
  "😔 Sad": 2,
  "😠 Angry": 1,
};

const Test = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [moodEntries, setMoodEntries] = useState([]);
 // const [selectedDate, setSelectedDate] = useState(new Date());

  const handleMoodChange = (e) => {
    setSelectedMood(e.target.value);
  };

  const handleAddMood = () => {
    if (selectedMood) {
      const newEntry = {
        mood: selectedMood,
        date: new Date().toLocaleDateString(),
        showTime: new Date().toLocaleTimeString(),
        moodValue: moodValues[selectedMood],
      };
      setMoodEntries([...moodEntries, newEntry]);
      setSelectedMood("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mood Tracker</h2>

      <select value={selectedMood} onChange={handleMoodChange}>
        <option value="">Select Mood</option>
        <option value="😊 Happy">😊 Happy</option>
        <option value="😔 Sad">😔 Sad</option>
        <option value="😠 Angry">😠 Angry</option>
        <option value="😨 Anxious">😨 Anxious</option>
        <option value="😌 Calm">😌 Calm</option>
      </select>

      <button onClick={handleAddMood} style={{ marginLeft: "10px" }}>
        Add Mood
      </button>

      <h3>Mood History</h3>
      <ul>
        {moodEntries.map((entry, index) => (
          <li key={index}>
            {entry.date}, {entry.showTime} - {entry.mood}
          </li>
        ))}
      </ul>

      <h3>Mood Trend Graph</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={moodEntries} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis type="number" domain={[0, 5]} tickCount={6} allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="moodValue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h3>Calendar</h3>
      <Calendar />
    </div>
  );
};

export default Test;