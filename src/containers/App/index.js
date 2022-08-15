import { useState } from "react";

import "./styles.css";

function App() {
  const intitalSecondsState = 0;
  const initialLapsState = [];
  const [seconds, setSeconds] = useState(intitalSecondsState);
  const [intervalId, setIntervalId] = useState(null);
  const [laps, setLaps] = useState([]);

  function start() {
    let id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setIntervalId(id);
  }

  function takeLap() {
    setLaps((laps) => [...laps, seconds]);
  }

  const stop = () => clearInterval(intervalId);

  function reset() {
    clearInterval(intervalId);
    setSeconds(intitalSecondsState);
    setLaps(initialLapsState);
  }

  return (
    <div className="App">
      <h1>Lap Timer</h1>
      <div className="sub-content">
        <div className="timer">
          <h2>{seconds}</h2>
          <button onClick={takeLap} id="lap">
            Lap
          </button>
        </div>
        <div className="action-btns">
          <button onClick={reset} id="reset">
            Reset
          </button>
          <button onClick={start} id="start">
            Start
          </button>
          <button onClick={stop} id="stop">
            Stop
          </button>
        </div>
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
