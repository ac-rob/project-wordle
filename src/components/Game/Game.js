import React from "react";
import GuessInput from "../GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner/LostBanner";

//TODO - make banners dynamic - fix content of banners - pass data into banners for num of guesses/answer

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("won");
  return (
    <>
      {gameStatus === "won" && <WonBanner />}
      {gameStatus === "lost" && <LostBanner />}
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
