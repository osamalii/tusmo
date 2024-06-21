import React from 'react';
import LetterBox from './LetterBox';

const WordRow = ({ id, word, solution, isCurrentGuess = false }) => {
  const getLetterState = (char, index) => {
    if (solution[index] === char) return 'correct';
    if (solution.includes(char)) return 'close';
    return 'incorrect';
  };

  return (
    <div className="word-row">
      <LetterBox char={solution[0]} isFirst={true} />
      {solution.slice(1).split('').map((char, index) => (
        <LetterBox
          key={index + 1}
          char={word[index + 1] || ''}
          state={!isCurrentGuess && getLetterState(word[index + 1], index + 1)}
        />
      ))}
    </div>
  );
};

export default WordRow;
