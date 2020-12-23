import { useState, useRef } from "react";

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const runTimer = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  const resetTimer = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  }

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(true);
    runTimer();
  }

  const handleStart = () => {
    startTimer();
  }

  const handleStop = () => {
    resetTimer();
  }

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    setIsActive(false);
  }

  const handleReset = () => {
    resetTimer();
    handleStart();
  }

  return { 
    timer, 
    isActive, 
    isPaused, 
    handleStart, 
    handleStop, 
    handlePause, 
    handleReset 
  }
}

export default useTimer;