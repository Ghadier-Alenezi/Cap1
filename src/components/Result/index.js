import React from "react";

import { useParams,useHistory} from "react-router";
import "./style.css";
const Result = () => {
  const userName = useParams().userName;
  const result = useParams().result;
  const history = useHistory();
  function playAgain() {
    history.push("/Game/:userName");
  }
  return (
    <div className="result">
      <div className="resultBox">
        <div className="score">
        <div className="up">
          
          <h3>{userName}</h3>
          <h2>Score</h2>
          <h2>{result}</h2>
        </div>

        <div className="down">
        
          <button id="restartBtn" onClick={playAgain}>
            play again?
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
