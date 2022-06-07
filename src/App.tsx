import "./styles.css";
import React, { useState, useEffect, useCallback } from "react";
import CountDownTimer from "./CountDownTimer";

export default function App() {
  const [seconds, setSeconds] = useState(10);

  const handleTimeup = useCallback(() => {
    console.log("time up!!");
  }, []);
  return (
    <div className="App">
      <h1>react_countdown_timer</h1>
      <div>
        請輸入倒數秒數
        <input
          value={seconds}
          type="number"
          onChange={(e) => setSeconds(Number(e.target.value) || 0)}
        />
      </div>

      <CountDownTimer seconds={seconds} onTimeUp={handleTimeup} />
    </div>
  );
}
