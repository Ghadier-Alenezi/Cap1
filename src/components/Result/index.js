import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Result = () => {
  const history = useHistory();
  function playAgain() {
    history.push("/Game/:userName");
  }
  return (
    <div className="result">
      <div className="resultBox">
        <div className="up">
          <h2>Congratulations</h2>
          <h3>User Name</h3>
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
