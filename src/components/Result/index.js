import React, {useEffect} from "react";

import "./style.css";

const Result = () => {

  return (
    <div className="grand">
      <div className="resultBox">
        <div className="up">
          <h2>Congratulations</h2>

          <h3>User Name</h3>
          <h2>255</h2>
        </div>
{/* animations */}

        <div className="down">
          <button id="restartBtn">Restart</button>
        </div>
      </div>
    </div>
  );
};
export default Result;
