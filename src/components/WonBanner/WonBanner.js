import React from "react";

function WonBanner({ guessList }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessList.length} guesses</strong>.
      </p>
    </div>
  );
}

export default WonBanner;
