import React from "react";

function GuessInput({ guess, setGuess }) {
  const handleInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuess(guess);
    console.log({ guess });
    setGuess("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          pattern="^[A-Za-z]{5}$"
          title="Enter exactly 5 letters."
          value={guess}
          onChange={handleInput}
        ></input>
        <button className="button" type="submit">
          Guess
        </button>
      </form>
    </div>
  );
}

export default GuessInput;

// TODO
// prevent default
// Console log resuilt
// track state
// add function
