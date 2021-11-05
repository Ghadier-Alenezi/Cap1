import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Timer = (props) => {
  let [timeSeconds, setTimeSeconds] = useState("60");

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const history = useHistory();
  const userName = useParams().userName;
  const playAgain =()=> {
    history.push(`/Game/${userName}`);
  }

  function updateTime() {
    // check is it print every sec
    if (timeSeconds >= 0) {
      setTimeSeconds(timeSeconds--);
      // console.log(timeSeconds);
    } else {
      history.push(`/Result/${userName}/${props.result}`);
     
    }
  }
  useEffect(() => updateTime, [10]);

  return (
    <div className="timer">
      <span>{timeSeconds}</span>

    </div>
  );
};

export default Timer;
