import React from "react";
import GuessInput from "../GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  return (
    <>
      Put a game here!
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessList={guessList}
        setGuessList={setGuessList}
      />
      <GuessResults guessList={guessList} answer={answer} />
    </>
  );
}

export default Game;
