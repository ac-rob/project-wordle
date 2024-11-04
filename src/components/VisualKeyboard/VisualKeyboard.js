import React from "react";
import { keyboard } from "../../constants";

function VisualKeyboard() {
  return (
    <div>
      <h1>hi</h1>
      <div className="keyboard-wrapper">
        {keyboard.map((k) => {
          return (
            <div className={`key ${k.status}`} key={k.letter}>
              {k.letter}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VisualKeyboard;
