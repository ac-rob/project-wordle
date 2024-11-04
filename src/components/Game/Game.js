import React from "react";
import GuessInput from "../GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("in progress");

  return (
    <>
      {gameStatus === "won" && <WonBanner guessList={guessList} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}

      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessList={guessList}
        setGuessList={setGuessList}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        answer={answer}
      />
    </>
  );
}

export default Game;
