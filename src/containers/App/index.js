import { useState } from "react";

import "./styles.css";

function App() {
  const intitalSecondsState = 0;
  const initialLapsState = [];
  const [seconds, setSeconds] = useState(intitalSecondsState);
  const [intervalId, setIntervalId] = useState(null);
  const [laps, setLaps] = useState([]);
  const [isActive, setIsActive] = useState(false);

  function handleStartAndStop() {
    if (isActive) {
      clearInterval(intervalId);
      setIsActive(false);
      return;
    }

    setIsActive(true);
    let id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setIntervalId(id);
  }

  function takeLap() {
    setLaps((laps) => [...laps, seconds]);
  }

  function reset() {
    clearInterval(intervalId);
    setSeconds(intitalSecondsState);
    setLaps(initialLapsState);
    setIsActive(false);
  }

  return (
    <div className="App">
      <h1>Lap Timer</h1>
      <div className="timer">
        <h2>{seconds}</h2>
      </div>
      <div className="action-btns">
        <button onClick={reset} id="reset">
          Reset
        </button>
        <button onClick={handleStartAndStop} id="start">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={takeLap} id="lap">
          Lap
        </button>
      </div>
      <div className="laps">
        <ul>
          {laps.length > 0 && laps.map((lap) => <li> {lap} seconds </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
