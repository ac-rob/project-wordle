import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
function GuessInput({
  guess,
  setGuess,
  guessList,
  setGuessList,
  gameStatus,
  setGameStatus,
  answer,
}) {
  const handleInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guessList.includes(guess)) {
      window.alert("You've already guessed that. Try something else.");
    } else {
      setGuess(guess);
      if (guess === answer) {
        setGameStatus("won");
      }
      const nextGuesses = [...guessList, guess];
      setGuessList(nextGuesses);
      if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("lost");
      }
    }
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
          disabled={gameStatus !== "in progress"}
        ></input>
        <button className="button" type="submit">
          Guess
        </button>
      </form>
    </div>
  );
}

export default GuessInput;
