import "./styles.css";
import React, { useState } from "react";
import CountDownTimer from "./CountDownTimer";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [countDownseconds, setCountDownseconds] = useState(0);
  return (
    <div className="App">
      <h1 className="h1">react_countdown_timer</h1>
      <div>
        請輸入倒數秒數:
        <input
          value={seconds}
          type="number"
          onChange={(e) => setSeconds(Number(e.target.value) || 0)}
        />
        <button
          onClick={() => {
            setCountDownseconds(seconds);
          }}
        >
          確認
        </button>
      </div>

      <CountDownTimer seconds={countDownseconds} />
    </div>
  );
}
