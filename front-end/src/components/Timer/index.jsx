import React, { useState } from "react";
import { Watch, Visor, Button, ButtonWrapper } from "./style";
import { useWatchInterval } from "../../utils/hooks";

function Timer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  useWatchInterval(setTime, timerOn);

  return (
    <Watch>
      <Visor>
        <p>{`0${Math.floor((time / 3600000) % 24)}: `}</p>
        <p>
          {time < 600000 && `0${Math.floor((time / 60000) % 60)}: `}
          {time > 600000 && `${Math.floor((time / 60000) % 60)}: `}
        </p>
        <p>
          {time < 10000 && `0${Math.floor((time / 1000) % 60)} `}
          {time > 10000 && `${Math.floor((time / 1000) % 60)} `}
        </p>
      </Visor>
      <ButtonWrapper>
        <Button type="submit" onClick={() => setTimerOn(true)}>
          Start
        </Button>
        <Button type="submit" onClick={() => setTimerOn(false)}>
          Stop
        </Button>
        <Button type="submit" onClick={() => setTimerOn(true)}>
          Resume
        </Button>
        <Button type="submit" onClick={() => setTime(0)}>
          Reset
        </Button>
      </ButtonWrapper>
    </Watch>
  );
}

export default Timer;
