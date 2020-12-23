import React from "react";
import useTimer from "../../hooks/useTimer";
import useDoubleClick from "../../hooks/useDoubleClick";
import { formatTime } from "../../helpers/helpers";
import {
  StopwatchStyled,
  StopwatchTitle,
  StopwatchCard,
  StopwatchButtons,
  StopwatchButton,
  StopwatchTimer,
} from "./StopwatchStyled";

const Stopwatch = () => {
  const { 
    timer, 
    isActive, 
    isPaused, 
    handleStart, 
    handleStop, 
    handlePause, 
    handleReset 
  } = useTimer(0);

  const pauseOnDoubleClick = () => {
    handlePause();
  }

  const [refCallback, elem] = useDoubleClick(pauseOnDoubleClick, 300);


  return (
    <StopwatchStyled>
      <StopwatchTitle>React Stopwatch</StopwatchTitle>
      <StopwatchCard>
        <StopwatchTimer>{formatTime(timer)}</StopwatchTimer>
        <StopwatchButtons>
          {
            !isActive && !isPaused ?
              <StopwatchButton onClick={handleStart}>Start</StopwatchButton>
              : (
                <StopwatchButton onClick={handleStop} disabled={!isActive}>Stop</StopwatchButton>
              )
          }
          <StopwatchButton 
            ref={refCallback} 
            disabled={!isActive} 
            title={'doubleclick'}
          >
            Wait
          </StopwatchButton>
          <StopwatchButton onClick={handleReset} disabled={!isActive}>Reset</StopwatchButton>
        </StopwatchButtons>
      </StopwatchCard>
    </StopwatchStyled>
  );
}

export default Stopwatch;