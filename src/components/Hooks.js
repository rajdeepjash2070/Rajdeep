import React, {
    useState,
    useEffect,
    useRef,
    useReducer,
    useContext,
    useMemo,
    useCallback,
    useLayoutEffect,
    createContext,
  } from "react";
import Navigation from "./Navigation";
  
  // 1. Context for Dark Mode
  const ThemeContext = createContext();
  
  // 2. Custom Hook for live clock
  const useCurrentTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return time;
  };
  
  // 3. Reducer for managing tasks
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, action.payload];
      case "REMOVE_TASK":
        return state.filter((_, index) => index !== action.payload);
      default:
        return state;
    }
  };
  
  const Hooks = () => {
    // States
    const [mood, setMood] = useState("");
    const [moodLog, setMoodLog] = useState([]);
    const [location, setLocation] = useState("Fetching...");
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [theme, setTheme] = useState("light");
  
    // Refs
    const taskInputRef = useRef();
  
    // Context value
    const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  
    // Custom hook for time
    const currentTime = useCurrentTime();
  
    // useEffect to fetch location
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation(
            `Lat: ${pos.coords.latitude.toFixed(2)}, Lng: ${pos.coords.longitude.toFixed(2)}`
          );
        },
        () => setLocation("Permission Denied")
      );
    }, []);
  
    // useLayoutEffect to simulate sync fetch
    useLayoutEffect(() => {
      console.log("Layout effect - DOM synced");
    }, []);
  
    // useCallback to memoize handler
    const addTask = useCallback(() => {
      const task = taskInputRef.current.value;
      if (task) {
        dispatch({ type: "ADD_TASK", payload: task });
        taskInputRef.current.value = "";
      }
    }, []);
  
    // useMemo to calculate mood stats
    const moodStats = useMemo(() => {
      const count = {};
      moodLog.forEach((m) => {
        count[m] = (count[m] || 0) + 1;
      });
      return count;
    }, [moodLog]);
  
    return (
      
      <ThemeContext.Provider value={themeValue}>
        <Navigation/>
        <div style={{ padding: 20, backgroundColor: theme === "dark" ? "#0C0630" : "#f5f5f5", color: theme === "dark" ? "#fff" : "#000" }}>
          <h2>Mood & Task Dashboard</h2>
  
          {/* Mood Input */}
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="">Select Mood</option>
            <option value="😊">😊 Happy</option>
            <option value="😔">😔 Sad</option>
            <option value="😠">😠 Angry</option>
            <option value="😌">😌 Calm</option>
          </select>
          <button onClick={() => mood && setMoodLog([...moodLog, mood])}>Log Mood</button>
  
          {/* Mood Logs */}
          <h3>Mood Log</h3>
          <ul>
            {moodLog.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
  
          {/* Mood Stats */}
          <h4>Mood Stats</h4>
          <ul>
            {Object.entries(moodStats).map(([m, c], idx) => (
              <li key={idx}>
                {m}: {c}
              </li>
            ))}
          </ul>
  
          {/* Tasks */}
          <h3>Tasks</h3>
          <input ref={taskInputRef} placeholder="Enter a task" />
          <button onClick={addTask}>Add Task</button>
          <ul>
            {tasks.map((task, idx) => (
              <li key={idx}>
                {task} <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: idx })}>❌</button>
              </li>
            ))}
          </ul>
  
          {/* Footer Info */}
          <p>📍 Location: {location}</p>
          <p>⏰ Time: {currentTime}</p>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </div>
      </ThemeContext.Provider>
    );
  };
  
  export default Hooks;
  