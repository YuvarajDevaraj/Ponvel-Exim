import React, { useEffect, useState } from "react";
import "./ComingSoon.css";
import { RootURL } from "../../url";
const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const launchDate = new Date("2025-08-31T00:00:00");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = launchDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className="coming-soon-container">
      <h1 className="title">Coming Soon</h1>
      <p className="subtitle">We’re working hard to bring something amazing!</p>

      <div className="countdown">
        <div className="time-box">
          <div className="time">{timeLeft.days}</div>
          <div className="soon-label">days</div>
        </div>
        <div className="time-box">
          <div className="time">{timeLeft.hours}</div>
          <div className="soon-label">hours</div>
        </div>
        <div className="time-box">
          <div className="time">{timeLeft.minutes}</div>
          <div className="soon-label">minutes</div>
        </div>
        <div className="time-box">
          <div className="time">{timeLeft.seconds}</div>
          <div className="soon-label">seconds</div>
        </div>
      </div>

      <a href={RootURL} rel="noopener noreferrer" className="notify-button">
        Stay Tuned
      </a>
    </div>
  );
};

export default ComingSoon;
