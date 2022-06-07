import React, { useState, useEffect } from "react";

interface commentProp {
  onTimeUp: () => void;
  seconds: number;
}

const CountDownTimer = ({ seconds, onTimeUp }: commentProp) => {
  const [remainSecond, setRemainSecond] = useState(0);

  useEffect(() => {
    const countDownSecond = seconds;

    console.log(`[timer] == start count down ${countDownSecond}s  ==`);
    const startTime = Date.now();
    const countDownTimer = setInterval(() => {
      const pastSeconds = parseInt((Date.now() - startTime) / 1000);
      const remain = countDownSecond - pastSeconds;
      setRemainSecond(remain < 0 ? 0 : remain);
      console.log("[timer] count down: ", remain);

      if (remain <= 0) {
        clearInterval(countDownTimer);
        console.log(`[timer] == stop count down ${countDownSecond}s  ==`);
        onTimeUp();
      }
    }, 1000);

    return () => {
      // 清除 Timer
      clearInterval(countDownTimer);
      console.log(`[timer] == stop count down ${countDownSecond}s  ==`);
    };
  }, [onTimeUp, seconds]); // 相依 prop / state 值的 Effect

  return (
    <div className="tp-count-down-timer">
      <div className="tp-count-down-timer__time">
        {new Date(remainSecond * 1000).toISOString().substr(11, 8)}
      </div>
    </div>
  );
};

export default CountDownTimer;
