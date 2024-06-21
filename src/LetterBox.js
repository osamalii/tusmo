import React from 'react';

const LetterBox = ({ char, state, isFirst = false }) => {
  let className = 'letter-box';
  console.log("state", state);
  if (state) {
    className += ` ${state}`;
  }

  if(isFirst) {
    className += ' first-letter';
  }

  return <div className={className}>{char}</div>;
};

export default LetterBox;
