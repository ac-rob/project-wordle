import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess value={guessList[num]} key={num} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResults;
