import React, { useState, useRef } from "react";
import { padTime } from "./utils/utils";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [subtitle, setSubtitle] = useState("Let's do it");
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  const startTimer = () => {
    setIsRunning(true);
    if (intervalRef.current !== null) return;
    setSubtitle("You're doing great!");
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSubtitle("Don't give up!");
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSubtitle("Ready to go another round?");
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };
  return (
    <div className="App">
      <h2 className="title">Pomodoro</h2>
      <h3 className="subtitle">{subtitle}</h3>
      <div className="timer">
        <div className="timer__container">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
      </div>
      <div className="btns">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
