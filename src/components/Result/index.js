import React from "react";
import Game from "../Game";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";

const Result = () => {
  const userName = useParams().userName;
  const history = useHistory();
  const playAgain =()=> {
    history.push(`/Game/${userName}`);
  }

  return (
    <div className="result">
      <div className="resultBox">
        <div className="up">
          <h2>Congrats!</h2>
          <h3>{userName}</h3>
          <h2>255</h2>
        </div>

        <div className="down">
          <button id="restartBtn" onClick={playAgain}>
            play again?
          </button>
        </div>
      </div>
    </div>
  );
};
export default Result;
