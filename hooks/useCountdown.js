import React, { useState, useRef, useEffect } from 'react';

function useCountdown() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        if (Number(counter) > 0) {
          const newCounter = counter - 1;
          setCounter(newCounter);
          // const hours = Math.floor((newCounter / 3600) % 24); use this intead if want to 24hr
          const hours = Math.floor(newCounter / 3600);
          const minutes = Math.floor((newCounter / 60) % 60);
          const seconds = newCounter % 60;
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        } else {
          setIsActive(false);
          clearInterval(intervalRef.current);
        }
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, counter]);

  return {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    hours,
    setHours,
    isActive,
    setIsActive,
    counter,
    setCounter,
  };
}

export default useCountdown;
