import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const User = () => {


  const history = useHistory();
  const userNameF = (e) => {
    history.push(`/Description/${e.target.userName.value}`);

  };

  return (
    <div className="user">
      <div className="userBox">
        <h1 className="enterT">Enter Your name</h1>

        <form className="formSection"
        onSubmit={userNameF}
        >
          <input
            id="textField"
            type="text"
            name="userName"
           placeholder="Your name is.."
          />
         
            <button
              className="enterBtn"
              
            >
              Enter
            </button>
          
        </form>

      </div>
    </div>
  );
};

export default User;