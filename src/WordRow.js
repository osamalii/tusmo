import React from 'react';
import LetterBox from './LetterBox';
import FirstLetterBox from './FirstLetterBox';

const WordRow = ({ word, solution, isCurrentGuess = false, isFirstRow = false }) => {
  const getLetterState = (char, index) => {
    if (solution[index] === char) return 'correct';
    if (solution.includes(char)) return 'close';
    return 'incorrect';
  };

  return (
    <div className="word-row">
      {isFirstRow ? (
        <FirstLetterBox char={solution[0]} />
      ) : (
        <LetterBox char={word[0]} state={!isCurrentGuess && getLetterState(word[0], 0)} />
      )}
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
