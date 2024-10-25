import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  let chars = [];
  console.log(`${value} :value`);
  
  if (value) {
    chars = value.split('');
  } else {
    chars = ['', '', '', '', ''];
  }
  
  console.log(chars);
  
  return (
    <p className="guess">
      {range(5).map((cell, index) => (
        <span className="cell" key={index}>
          {chars[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
