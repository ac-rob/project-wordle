import React from "react";

function GuessInput() {
  return (
    <div>
      <h2>HI THERE</h2>
      <form className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input type="text" id="guess-input"></input>
      </form>
    </div>
  );
}

export default GuessInput;
